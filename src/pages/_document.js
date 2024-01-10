import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </body>
        </Html>
    );
  }
}
