import rss from '@astrojs/rss';
import { site } from "../utils/constants";
import { getCollection } from "astro:content";

export async function GET(context) {
  const allBlogs = (await getCollection('blog')).filter(({ data }) => {
    return import.meta.env.PROD ? !data.draft : true
  });

  return rss({
    title: site.titleSimple,
    description: site.description,
    site: site.url,
    items: allBlogs.map((blog) => ({
      title: blog.data.title,
      pubDate: blog.data.date,
      description: blog.data.description ? blog.data.description : blog.body.substring(0, 140).replace(/#/gi, "") + "...",
      // This assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${blog.slug}/`,
    })),
  });
}
