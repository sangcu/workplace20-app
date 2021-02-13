import Redirect from 'components/Redirect';
import { useSession } from 'next-auth/client';
import LoadingPage from 'pages-lib/loading';

const WithAuthSecure = (Component) => ({...props}) => {
  const [session, loading] = useSession();

  if (loading) return (<LoadingPage />);
  if (!session) return (<Redirect to="/api/auth/signin" />);

  return <Component {...props}/>;
}

export default WithAuthSecure;