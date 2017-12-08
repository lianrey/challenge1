import React from 'react';
import {renderToString} from 'react-dom/server';
import View from "./src/components/ListBugs.js";

export const data = (context, callback) => {
  const { bugs } = context.params;
  const { staticPath } = context;

  console.log(bugs);  

  const renderedApp = renderToString(<View bugs={bugs} />);

  callback(null, {
    staticPath,
    app: renderedApp,
    componentProps: bugs,
  });
};
