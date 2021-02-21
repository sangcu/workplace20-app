import skillList from '_data/skill.json'
import challengeList from '_data/challenges.json'
import debug from 'debug'

const log = debug('profile controller')

export class Profile {
    constructor(collection, email) {
        this.collection = collection
        this.email = email
    }

    debugInfo() {
        if (this.collection) {
            return "Look good!"
        } else
            return "Not found collection"
    }

    async _getProfile() {
        if (this.profile) {
            return this.profile
        }

        this.profile = await this.collection.findOne({
            email: this.email
        })

        return this.profile
    }

    async Get(){
        return await this._getProfile()
    }


    async setSkill(challengeId, level) {

        const profile = await this._getProfile()
        if (!profile) {
            return [null, 'Profile not found']
        }

        let profileSkill = profile.skillMatrix[challengeId]

        let newSkill = {}

        newSkill[challengeId] = {
            level: level
        }

        await this.collection.updateOne({
            email: this.email
        }, {
            $set: {
                skillMatrix: Object.assign(profile.skillMatrix, newSkill)
            }
        })

    }

    async getNextLevelOf(challengeId) {

        const profile = await this._getProfile()
        if (!profile) {
            return [null, 'Profile not found']
        }


        let levelOfChallenge = profile.skillMatrix[challengeId]

        if (!levelOfChallenge || !levelOfChallenge.level) {

            log(`Profile ${this.email} start with default level Basic`)

            levelOfChallenge = {
                level: 'Basic'
            }
        }

        const nextLevel = nextLevelOfChallenge(challengeId, levelOfChallenge.level);

        if (!nextLevel) {
            return [null, 'Challenge is not supported']
        }

        if (nextLevel == levelOfChallenge.level) {
            // User reached all level
            return [null, 'User is reached max level']
        }

        log(`Current level of profile for skill ${challengeId} is ${levelOfChallenge.level}`)
        log(`next level for skill ${challengeId} is ${nextLevel}`)

        const challenge = challengeList
            .find(el =>
                el.challengeId == challengeId &&
                el.level == nextLevel)

        if (!challenge) {
            return [null, 'Challenge is not support']
        }
        return [challenge, null]
    }

}

function nextLevelOfChallenge(challengeCode, currentLevel) {

    const skill = skillList
        .find(el => el.code == challengeCode);

    if (!skill) {
        return "";
    }

    const indexCurrentLevel = skill.levels.indexOf(currentLevel)

    if (indexCurrentLevel < 0) {
        return skill.levels[0]
    }

    if (indexCurrentLevel == skill.levels.length - 1) {
        return currentLevel;
    }

    return skill.levels[indexCurrentLevel + 1]

}
