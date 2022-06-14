import React from "react";

const Document = ({ children, data }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <title>simple-ssr</title>
    </head>
    <body>
      <div
        id="root"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </body>
    {/* * watch out the js runing sequence */}
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__APP_DATA__=${JSON.stringify(
          data
        )}`,
      }}
    ></script>
    <script src="./build/main.js"></script>
  </html>
);

export default Document;
