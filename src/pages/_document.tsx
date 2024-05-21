import { Html, Head, Main, NextScript } from 'next/document';

import FONTS from '@app/constants/fonts';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className={FONTS.join(' ')}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
