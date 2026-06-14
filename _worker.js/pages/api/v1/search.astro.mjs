globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getCollection } from '../../../chunks/_astro_content_CT6nnaQL.mjs';
import { g as getPostUrl, a as getCleanSlug } from '../../../chunks/urls_zT8Wsznn.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url, site }) => {
  const query = url.searchParams.get("q")?.toLowerCase() || "";
  const lang = url.searchParams.get("lang");
  const baseUrl = site?.toString() || "https://strongya.github.io";
  const posts = await getCollection("posts");
  const results = posts.filter((post) => {
    if (lang && post.data.language !== lang) return false;
    const searchText = `${post.data.title} ${post.data.abstract} ${post.data.tags.join(" ")} ${post.body || ""}`.toLowerCase();
    return query.split(/\s+/).every((term) => searchText.includes(term));
  }).map((post) => ({
    id: post.id,
    slug: getCleanSlug(post),
    title: post.data.title,
    abstract: post.data.abstract,
    tags: post.data.tags,
    language: post.data.language,
    date: post.data.published.toISOString(),
    url: getPostUrl(post, baseUrl),
    relevance: query.split(/\s+/).filter(
      (term) => post.data.title.toLowerCase().includes(term)
    ).length
  })).sort((a, b) => b.relevance - a.relevance);
  return new Response(JSON.stringify({
    query,
    count: results.length,
    results
  }, null, 2), {
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
