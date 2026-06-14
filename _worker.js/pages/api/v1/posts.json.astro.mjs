globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getCollection } from '../../../chunks/_astro_content_CT6nnaQL.mjs';
import { g as getPostUrl, a as getCleanSlug } from '../../../chunks/urls_zT8Wsznn.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async (context) => {
  const posts = await getCollection("posts");
  const baseUrl = context.site?.toString() || "https://strongya.github.io";
  const index = posts.map((post) => ({
    id: post.id,
    slug: getCleanSlug(post),
    title: post.data.title,
    abstract: post.data.abstract,
    tags: post.data.tags,
    date: post.data.published.toISOString(),
    language: post.data.language,
    reading_time: Math.ceil(post.body?.split(/\s+/).length / 200) || 5,
    url: getPostUrl(post, baseUrl),
    copyright: {
      holder: "Arlen",
      license: "CC BY-NC-SA 4.0",
      attribution_required: true,
      canonical_url: getPostUrl(post, baseUrl)
    }
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return new Response(JSON.stringify(index, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60",
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
