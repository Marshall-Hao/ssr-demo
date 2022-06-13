import React from "react";

const Document = () => (
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
      <div id="root" />
    </body>
    <script src="./main.js"></script>
  </html>
);

export default Document;
