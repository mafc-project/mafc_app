import ComissionPage from "@/components/pages/CommisionPage";
import { getSubjectCommissionPage, getSubjectCommissionData, getNews } from "@/server/strapi/strapi";
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";
import { notFound } from "next/navigation";
import { seoConfig } from "../../../../seo.config";


export const revalidate = 3600;


  export async function generateStaticParams() {
    const subjectCommissionsList = await getSubjectCommissionPage();
     if(!subjectCommissionsList || !subjectCommissionsList?.subject_commissions_lists) return [];

    const paths = subjectCommissionsList?.subject_commissions_lists.map((item) => ({
      
        params: { slug: item?.category?.code},
      }));

    return paths
  };

  export async function generateMetadata({ params }) {
  const {slug} = await params;
  const data = await getSubjectCommissionData(slug);
  if(!data || data.length === 0) return {};

  const {siteUrl, defaultOgImage}= seoConfig;

  const {title} = data[0];
  const desc = `Інформація про ${title}, напрямки роботи, викладацький склад та освітню діяльність коледжу.`

  return {
    title: title,
    description: desc,
    alternates: { canonical: `${siteUrl}/about/councils_and_commissions/${slug}` },
    openGraph: {
      title: title,
      description: desc,
      url: `${siteUrl}/about/councils_and_commissions/${slug}`,
      type: 'website',
      images: [{ url: defaultOgImage, width: 1200, height: 630 }],
    },}
}

const Comission = async({params})=> {
    const {slug} = await params;
   
    const commissionData = await getSubjectCommissionData(slug);
     if(!commissionData){notFound()}

    const news= await getNews(slug);

    const docxList = await fetchDocxFromCurrentFolder(commissionData[0].google_drive_doc_folder_id);

     

return <ComissionPage docs_list={docxList?.documents} category={slug} news={news} commissionData={commissionData}/>
};

export default Comission;