import { getIntelligentNetworkingPageData, getIntelligentNetworkingActivityItem } from "@/server/strapi/strapi";
import { notFound } from "next/navigation";
import ActivityArticlePage from "@/components/pages/ActivityArticle";
import { seoConfig } from "../../../../../seo.config";
import formatPreviewText from "@/utils/formatted_text";
import extractImageSourcesFromHTML from "@/utils/extractImageSourcesFromHTML";

export const revalidate = 3600;

export async function generateStaticParams() {
  const res = await getIntelligentNetworkingPageData();
if(!res) return [];

   const paths = res?.intelligent_networking_activities?.map((n) => ({
       id: n?.documentId,
      }));
  return paths
};


export async function generateMetadata({ params }) {
  const {id} = await params;
  const data = await getIntelligentNetworkingActivityItem(id);

  if(!data) return {};

  const {siteUrl, defaultPosterOgImage} = seoConfig;

  const {activity, publishedAt} = data;
  
  const desc = formatPreviewText(activity?.description);
  const images = extractImageSourcesFromHTML(activity?.description);
  const poster = images?.[0]? images?.[0] : defaultPosterOgImage;

  return {
    title: activity?.title,
    description: desc,
    alternates: { canonical: `${siteUrl}/teaching_field/intelligent_networking/${id}` },
    openGraph: {
      title: activity?.title,
      description: desc,
      publishedTime: publishedAt,
      url: `${siteUrl}/teaching_field/intelligent_networking/${id}`,
      type: 'article',
      images: [{ url: poster, width: 1200, height: 630 }],
    },}
}


const Activity = async({params})=> {
  const id = (await params).id;
  const activity = await getIntelligentNetworkingActivityItem(id);

  if(!activity){notFound()}

  return <ActivityArticlePage activity={activity}/>
}


export default Activity