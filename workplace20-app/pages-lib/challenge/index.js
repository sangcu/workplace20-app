import withAuthSecure from 'components/withAuthSecure';

const Challenge = () => {
  return (
    <div className="m-16">
      <nav aria-label="Progress">
        <ol className="flex items-center justify-center">
          <li className="relative pr-8 sm:pr-20">
            {/* Completed Step */}
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="h-0.5 w-full bg-orange-500" />
            </div>
            <a href="#" className="relative w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full hover:bg-orange-700">
              {/* Heroicon name: check */}
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Step 1</span>
            </a>
          </li>
          <li className="relative pr-8 sm:pr-20">
            {/* Completed Step */}
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="h-0.5 w-full bg-orange-500" />
            </div>
            <a href="#" className="relative w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full hover:bg-orange-700">
              {/* Heroicon name: check */}
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Step 2</span>
            </a>
          </li>
          <li className="relative pr-8 sm:pr-20">
            {/* Current Step */}
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="h-0.5 w-full bg-gray-200" />
            </div>
            <a href="#" className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-orange-500 rounded-full" aria-current="step">
              <span className="h-2.5 w-2.5 bg-orange-500 rounded-full" aria-hidden="true" />
              <span className="sr-only">Step 3</span>
            </a>
          </li>
          <li className="relative pr-8 sm:pr-20">
            {/* Upcoming Step */}
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="h-0.5 w-full bg-gray-200" />
            </div>
            <a href="#" className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
              <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
              <span className="sr-only">Step 4</span>
            </a>
          </li>
          <li className="relative">
            {/* Upcoming Step */}
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="h-0.5 w-full bg-gray-200" />
            </div>
            <a href="#" className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
              <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
              <span className="sr-only">Step 5</span>
            </a>
          </li>
        </ol>
      </nav>
    </div>

  )
}

export default withAuthSecure(Challenge);