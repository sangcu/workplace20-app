import Header from './components/Header';
import Footer from './components/Footer';
import Redirect from 'components/Redirect';
import { useRouter } from 'next/router';
import { useQueryProfile } from 'pages-lib/_states/server';
import LoadingPage from 'pages-lib/loading';
import Error from 'next/error';

const Layout = ({ children }) => {
  const router = useRouter();

  const { isLoading, isError, data: profile, error } = useQueryProfile();

  if (isLoading) {
    return (<LoadingPage />)
  }

  if (isError) {
    return (<Error statusCode={error.statusCode} />)
  }

  if (router.pathname === '/quick-start') {
    return <>{children}</>
  }

  if (!profile.kind) return (<Redirect to="/quick-start" />);

  if (['/challenges', '/'].includes(router.pathname)) {
    return <>{children}</>
  } 

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="-mt-24 lg:pb-10 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;