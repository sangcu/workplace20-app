import Challenge from 'pages-lib/challenge/questions';
import { useRouter } from 'next/router'

const ChallengePage = () => {
  const router = useRouter()
  const { challengeId } = router.query;

  return (<Challenge challengeId={challengeId}/>)
}

export default ChallengePage;
