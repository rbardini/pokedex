import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToStaticNodeStream } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const HTML = ({ assets, children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Pokédex</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {assets.client.css
        ? <link rel="stylesheet" href={assets.client.css} />
        : ''
      }
      {process.env.NODE_ENV === 'production'
        ? <script src={assets.client.js} defer></script>
        : <script src={assets.client.js} defer crossOrigin="true"></script>
      }
    </head>
    <body>
      <div id="root">{children}</div>
    </body>
  </html>
);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const stream = renderToStaticNodeStream(
      <HTML assets={assets}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </HTML>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.write('<!DOCTYPE html>');
      stream.pipe(res);
    }
  });

export default server;
