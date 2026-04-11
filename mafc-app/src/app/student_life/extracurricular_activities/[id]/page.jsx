import { getExtracurricularPageData, getExtracurricularActiviryItem } from "@/server/strapi/strapi";
import { notFound } from "next/navigation";
import ActivityArticlePage from "@/components/pages/ActivityArticle";
import { seoConfig } from "../../../../../seo.config";
import formatPreviewText from "@/utils/formatted_text";
import extractImageSourcesFromHTML from "@/utils/extractImageSourcesFromHTML";

export const revalidate = 3600;

export async function generateStaticParams() {
  const res = await getExtracurricularPageData();
  if(!res) return [];

   const paths = res?.extracurricular_activities_lists?.map((n) => ({
        params: { id: n?.documentId },
      }));
  return paths
};


export async function generateMetadata({ params }) {
  const {id} = await params;
  const data = await getExtracurricularActiviryItem(id);

  if(!data) return {};

  const {siteUrl, defaultPosterOgImage} = seoConfig;

  const {activity, publishedAt} = data;
  
  const desc = formatPreviewText(activity?.description);
  const images = extractImageSourcesFromHTML(activity?.description);
  const poster = images?.[0]? images?.[0] : defaultPosterOgImage;

  return {
    title: activity?.title,
    description: desc,
    alternates: { canonical: `${siteUrl}/student_life/extracurricular_activities/${id}` },
    openGraph: {
      title: activity?.title,
      description: desc,
      publishedTime: publishedAt,
      url: `${siteUrl}/student_life/extracurricular_activities/${id}`,
      type: 'article',
      images: [{ url: poster, width: 1200, height: 630 }],
    },}
}


const Activity = async({params})=> {
  const id = (await params).id;
  const activity = await getExtracurricularActiviryItem(id);

  if(!activity){notFound()}

  return <ActivityArticlePage activity={activity}/>
}


export default Activity