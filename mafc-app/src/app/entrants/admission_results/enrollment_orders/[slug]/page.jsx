
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import {getIntroductoryQuidePageData, getEnrollmentOrderBySlug } from "@/server/strapi/strapi";
import { seoConfig } from "../../../../../../seo.config";
import { notFound } from "next/navigation";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import EnrollmentOrdersList from "@/components/elements/enrollmentOrdersList/EnrollmentOrdersList";

export const revalidate = 3600;
export async function generateStaticParams() {
  const res = await getIntroductoryQuidePageData();
  if(!res) return [];

   const paths = res?.enrollment_order_lists?.map((n) => ({
        slug: n.slug ,
      }));
  return paths
};

export async function generateMetadata({ params }) {
  const {slug} = await params;
  const data = await getEnrollmentOrderBySlug(slug);
  if(!data || data[0].length === 0) return {};

  const {siteUrl, defaultOgImage}= seoConfig;
  const {title} = data[0];

  const desc = `Накази про зарахування, ${title}`;
  const imageUrl = defaultOgImage;
 

  return {
    title: desc,
    description: desc,
    alternates: { canonical: `${siteUrl}/entrants/admission_results/enrollment_orders/${slug}` },
    openGraph: {
      title: desc,
      description: desc,
      url: `${siteUrl}/entrants/admission_results/enrollment_orders/${slug}`,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },}
};


const EnrollmentOrderPage = async({params})=> {
    const {slug} = await params;
    const orders = await getEnrollmentOrderBySlug(slug);
    if(!orders[0] || orders?.error ){notFound()}

    const folderId = orders[0].google_drive_doc_folder_id;
    const pageDocxData = await fetchAllDocxFromSubfolders(folderId);
   
     if(!pageDocxData || pageDocxData?.length === 0) return <EmptyState/>
  
    return <EnrollmentOrdersList orderList={pageDocxData}/>
}


export default EnrollmentOrderPage;