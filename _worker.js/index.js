globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_JhzB1057.mjs';
import { manifest } from './manifest_B44tKzz_.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/.well-known/agent-manifest.json.astro.mjs');
const _page2 = () => import('./pages/.well-known/llms.txt.astro.mjs');
const _page3 = () => import('./pages/404.astro.mjs');
const _page4 = () => import('./pages/about.astro.mjs');
const _page5 = () => import('./pages/agent/feed.json.astro.mjs');
const _page6 = () => import('./pages/agent/posts/_slug_.json.astro.mjs');
const _page7 = () => import('./pages/api/v1/knowledge-graph.astro.mjs');
const _page8 = () => import('./pages/api/v1/posts/_slug_.astro.mjs');
const _page9 = () => import('./pages/api/v1/posts.json.astro.mjs');
const _page10 = () => import('./pages/api/v1/search.astro.mjs');
const _page11 = () => import('./pages/api/v1/tags.astro.mjs');
const _page12 = () => import('./pages/en/about.astro.mjs');
const _page13 = () => import('./pages/en/feed.xml.astro.mjs');
const _page14 = () => import('./pages/en/posts/_---slug_.astro.mjs');
const _page15 = () => import('./pages/en/tags/_tag_.astro.mjs');
const _page16 = () => import('./pages/en.astro.mjs');
const _page17 = () => import('./pages/feed.json.astro.mjs');
const _page18 = () => import('./pages/feed.xml.astro.mjs');
const _page19 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page20 = () => import('./pages/sitemap.xml.astro.mjs');
const _page21 = () => import('./pages/tags/_tag_.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/.well-known/agent-manifest.json.ts", _page1],
    ["src/pages/.well-known/llms.txt.ts", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/about.astro", _page4],
    ["src/pages/agent/feed.json.ts", _page5],
    ["src/pages/agent/posts/[slug].json.ts", _page6],
    ["src/pages/api/v1/knowledge-graph.ts", _page7],
    ["src/pages/api/v1/posts/[slug].ts", _page8],
    ["src/pages/api/v1/posts.json.ts", _page9],
    ["src/pages/api/v1/search.ts", _page10],
    ["src/pages/api/v1/tags.ts", _page11],
    ["src/pages/en/about.astro", _page12],
    ["src/pages/en/feed.xml.ts", _page13],
    ["src/pages/en/posts/[...slug].astro", _page14],
    ["src/pages/en/tags/[tag].astro", _page15],
    ["src/pages/en/index.astro", _page16],
    ["src/pages/feed.json.ts", _page17],
    ["src/pages/feed.xml.ts", _page18],
    ["src/pages/posts/[...slug].astro", _page19],
    ["src/pages/sitemap.xml.ts", _page20],
    ["src/pages/tags/[tag].astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
