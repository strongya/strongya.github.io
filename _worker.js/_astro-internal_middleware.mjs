globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_B0DaDN5P.mjs';
import './chunks/astro/server_BiBTG5Z9.mjs';
import { s as sequence } from './chunks/render-context_Bbja3S8M.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
