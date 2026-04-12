import PostPage from "@/components/pages/PostPage";
import { getNewsItem, getAllNews } from "@/server/strapi/strapi";
import { notFound } from "next/navigation";
import { seoConfig } from "../../../../seo.config";
import formatPreviewText from "@/utils/formatted_text";

export const revalidate = 3600;

export async function generateStaticParams() {
  const res = await getAllNews();

  if(!res) return [];

   const paths = res.map((n) => ({
        slug: n?.documentId,
      }));
  return paths
}

  export async function generateMetadata({ params }) {
  const {slug} = await params;
  const data = await getNewsItem(slug);

  if(!data) return {};
  const {siteUrl, defaultPosterOgImage} = seoConfig;

  const {title,date, article, images} = data;
  
  const desc = formatPreviewText(article);
  const image = images?.[0]?.url? images?.[0]?.url : defaultPosterOgImage;
  const publishedDate = new Date(date);

  return {
    title: title,
    description: desc,
    alternates: { canonical: `${siteUrl}/news/${slug}` },
    openGraph: {
      title: title,
      description: desc,
      publishedTime: publishedDate.toISOString(),
      url: `${siteUrl}/news/${slug}`,
      type: 'article',
      images: [{ url: image, width: 1200, height: 630 }],
    },}
}


const Post = async({params})=> {
    const slug = (await params).slug;
    const article = await getNewsItem(slug);

    if(!article){notFound()}

    return <PostPage newsItem={article}/>
};

export default Post;
