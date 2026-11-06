import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/flaticon.css';
import '../styles/font-awesome.min.css';
import '../styles/themify-icons.css';
import '../styles/sass/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Yogesh K S | Full Stack Developer & Software Engineer</title>
        <meta name="description" content="Personal portfolio of Yogesh K S, Full Stack Developer specializing in building modern web applications, scalable software solutions, and interactive digital experiences." />
        <meta name="author" content="Yogesh K S" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <ThemeSwitch />
    </ThemeProvider>
  );
}

export default MyApp;
