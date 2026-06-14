globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getCollection } from '../../../../chunks/_astro_content_CT6nnaQL.mjs';
import { a as getCleanSlug, g as getPostUrl } from '../../../../chunks/urls_zT8Wsznn.mjs';
export { renderers } from '../../../../renderers.mjs';

async function getStaticPaths() {
  if (process.env.BUILD_TARGET !== "github") return [];
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: getCleanSlug(post) }
  }));
}
const GET = async ({ params, site }) => {
  const { slug } = params;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const posts = await getCollection("posts");
  const post = posts.find((p) => getCleanSlug(p) === slug);
  if (!post) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
  const baseUrl = site?.toString() || "https://strongya.github.io";
  const canonicalUrl = getPostUrl(post, baseUrl);
  const wordCount = post.body?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200);
  const response = {
    id: post.id,
    slug: getCleanSlug(post),
    type: "article",
    version: "1.0.0",
    language: post.data.language,
    title: post.data.title,
    abstract: post.data.abstract,
    content: {
      markdown: post.body,
      text: post.body?.replace(/[#*_`\[\]\(\)]/g, "") || "",
      html: null
    },
    author: {
      name: "Arlen",
      url: new URL("/about", baseUrl).toString(),
      agent: "Strong"
    },
    copyright: {
      holder: "Arlen",
      license: "CC BY-NC-SA 4.0",
      attribution_required: true,
      canonical_url: canonicalUrl
    },
    citation_formats: {
      apa: `Arlen. (${post.data.published.getFullYear()}). ${post.data.title}. Retrieved from ${canonicalUrl}`,
      mla: `Arlen. "${post.data.title}." ${post.data.published.getFullYear()}. Web. ${post.data.published.toISOString().split("T")[0]}.`,
      gb: `Arlen. ${post.data.title}[EB/OL]. ${post.data.published.toISOString().split("T")[0]}. ${canonicalUrl}.`
    },
    entities: post.data.entities.map((e) => ({
      name: e.name,
      type: e.type,
      wiki_url: e.wiki
    })),
    related_posts: post.data.related.map((relatedSlug) => {
      const related = posts.find((p) => getCleanSlug(p) === relatedSlug);
      if (!related) return null;
      return {
        title: related.data.title,
        slug: getCleanSlug(related),
        language: related.data.language,
        url: getPostUrl(related, baseUrl)
      };
    }).filter(Boolean),
    published: post.data.published.toISOString(),
    modified: post.data.modified.toISOString(),
    reading_time: readingTime,
    word_count: wordCount,
    tags: post.data.tags
  };
  return new Response(JSON.stringify(response, null, 2), {
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
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
