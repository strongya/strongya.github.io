globalThis.process ??= {}; globalThis.process.env ??= {};
const DEFAULT_SITE = "https://strongya.github.io";
function getCleanSlug(post) {
  return post.id.replace(/\.en\.md$/, "").replace(/\.md$/, "");
}
function getPostPath(post) {
  return post.data.language === "zh-CN" ? `/posts/${post.slug}` : `/en/posts/${getCleanSlug(post)}`;
}
function getPostUrl(post, site = DEFAULT_SITE) {
  return new URL(getPostPath(post), site).toString();
}
function getOgImagePath(post) {
  const baseId = getCleanSlug(post);
  return post.data.language === "en" ? `/og/${baseId}.en.png` : `/og/${baseId}.png`;
}
function getOgImageUrl(post, site = DEFAULT_SITE) {
  if (post.data.cover_image) {
    return new URL(post.data.cover_image, site).toString();
  }
  return new URL(getOgImagePath(post), site).toString();
}

export { getCleanSlug as a, getPostPath as b, getOgImageUrl as c, getPostUrl as g };
