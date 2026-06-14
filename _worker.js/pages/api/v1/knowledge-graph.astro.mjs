globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getCollection } from '../../../chunks/_astro_content_CT6nnaQL.mjs';
import { g as getPostUrl, a as getCleanSlug } from '../../../chunks/urls_zT8Wsznn.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ site }) => {
  const posts = await getCollection("posts");
  const baseUrl = site?.toString() || "https://strongya.github.io";
  const nodes = posts.map((post) => ({
    id: getCleanSlug(post),
    type: "post",
    title: post.data.title,
    language: post.data.language,
    url: getPostUrl(post, baseUrl)
  }));
  const edges = [];
  const tagPosts = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      if (!tagPosts.has(tag)) tagPosts.set(tag, []);
      tagPosts.get(tag).push(getCleanSlug(post));
    });
  });
  tagPosts.forEach((slugs) => {
    for (let i = 0; i < slugs.length; i++) {
      for (let j = i + 1; j < slugs.length; j++) {
        edges.push({
          source: slugs[i],
          target: slugs[j],
          type: "shared_tag",
          weight: 1
        });
      }
    }
  });
  const entityPosts = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    post.data.entities.forEach((entity) => {
      if (!entityPosts.has(entity.name)) entityPosts.set(entity.name, []);
      entityPosts.get(entity.name).push(getCleanSlug(post));
    });
  });
  entityPosts.forEach((slugs) => {
    for (let i = 0; i < slugs.length; i++) {
      for (let j = i + 1; j < slugs.length; j++) {
        const existing = edges.find(
          (e) => e.source === slugs[i] && e.target === slugs[j] || e.source === slugs[j] && e.target === slugs[i]
        );
        if (existing) {
          existing.weight += 1;
          existing.type = "shared_tag_entity";
        } else {
          edges.push({
            source: slugs[i],
            target: slugs[j],
            type: "shared_entity",
            weight: 1
          });
        }
      }
    }
  });
  posts.forEach((post) => {
    const sourceSlug = getCleanSlug(post);
    post.data.related.forEach((relatedSlug) => {
      if (posts.some((p) => getCleanSlug(p) === relatedSlug)) {
        edges.push({
          source: sourceSlug,
          target: relatedSlug,
          type: "explicit_related",
          weight: 2
        });
      }
    });
  });
  return new Response(JSON.stringify({
    nodes,
    edges: edges.sort((a, b) => b.weight - a.weight),
    meta: {
      total_nodes: nodes.length,
      total_edges: edges.length,
      generated_at: (/* @__PURE__ */ new Date()).toISOString()
    }
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
