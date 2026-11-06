import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark-theme" data-theme="dark">
        <Head>
          {/* Site Icons & Manifest */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#121415" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var saved = localStorage.getItem('yogesh_portfolio_theme') || localStorage.getItem('tonu_portfolio_theme');
                    var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                    if (theme === 'light') {
                      document.documentElement.classList.remove('dark-theme');
                      document.documentElement.classList.add('light-theme');
                      document.documentElement.setAttribute('data-theme', 'light');
                    } else {
                      document.documentElement.classList.remove('light-theme');
                      document.documentElement.classList.add('dark-theme');
                      document.documentElement.setAttribute('data-theme', 'dark');
                    }
                  } catch(e) {}
                })();
              `,
            }}
          />
        </Head>
        <body className="dark-theme" data-theme="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}