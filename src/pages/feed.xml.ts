import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: any }) {
  const blog = await getCollection("blog");
  return rss({
    title: "Sable Blog",
    description: "This is my blog!",
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      language: `<language>${post.data.language}</language>`,
    })),
    // canonicalUrl: "https://brutal.elian.codes",
  });
}
