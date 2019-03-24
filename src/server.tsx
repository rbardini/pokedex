import express from 'express';
import React, { FC } from 'react';
import { renderToStaticNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet, HelmetData } from 'react-helmet';

import App from './App';
import { StaticRouterContext } from 'react-router';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);

type Props = {
  assets: {
    client: {
      css: string;
      js: string;
    }
  },
  helmet: HelmetData;
}

const HTML: FC<Props> = ({ assets, children, helmet }) => (
  <html {...helmet.htmlAttributes.toComponent()}>
    <head>
      {helmet.meta.toComponent()}
      {helmet.title.toComponent()}
      {assets.client.css && (
        <link rel="stylesheet" href={assets.client.css} />
      )}
      {process.env.NODE_ENV === 'production'
        ? <script src={assets.client.js} defer></script>
        : <script src={assets.client.js} defer crossOrigin="true"></script>
      }
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      <div id="root">{children}</div>
    </body>
  </html>
);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req, res) => {
    const context: StaticRouterContext = {};
    const stream = renderToStaticNodeStream(
      <HTML assets={assets} helmet={Helmet.rewind()}>
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
