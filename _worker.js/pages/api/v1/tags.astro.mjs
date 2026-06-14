globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getCollection } from '../../../chunks/_astro_content_CT6nnaQL.mjs';
import { a as getCleanSlug } from '../../../chunks/urls_zT8Wsznn.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async () => {
  const posts = await getCollection("posts");
  const tagMap = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, { count: 0, posts: [], languages: /* @__PURE__ */ new Set() });
      }
      const info = tagMap.get(tag);
      info.count++;
      info.posts.push(getCleanSlug(post));
      info.languages.add(post.data.language);
    });
  });
  const tags = Array.from(tagMap.entries()).map(([name, info]) => ({
    name,
    count: info.count,
    posts: info.posts,
    languages: Array.from(info.languages)
  })).sort((a, b) => b.count - a.count);
  return new Response(JSON.stringify({
    total_tags: tags.length,
    tags
  }, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300",
      "X-Agent-API": "Arlen-Blog-v1",
      "Access-Control-Allow-Origin": "*"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
