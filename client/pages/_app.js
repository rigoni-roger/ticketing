import 'bootstrap/dist/css/bootstrap.min.css';
import buildClient from '../api/buildClient';
import Header from '../components/header';

const MyApp = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />;
    </div>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const axiosClient = buildClient(ctx);
  let pageProps = {};

  const response = await axiosClient
    .get('/api/users/currentuser')
    .catch((error) => {});

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, ...response?.data };
};

export default MyApp;
