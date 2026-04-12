import EntrantsPage from "@/components/pages/EntrantsPage";
import { getAllPdfFiles } from "@/server/google/drive";
import {getIntroductoryQuidePageData, getProfessionBySlug } from "@/server/strapi/strapi";
import { seoConfig } from "../../../../../seo.config";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export async function generateStaticParams() {
  const res = await getIntroductoryQuidePageData();
  if(!res || !res?.professions) return [];

   const paths = res?.professions?.map((n) => ({
        slug: n.slug,
      }));
  return paths
}
export async function generateMetadata({ params }) {
  const {slug} = await params;
  const data = await getProfessionBySlug(slug);
  if(!data || data[0].length === 0) return {};

  const {siteUrl, defaultOgImage}= seoConfig;
  const {title, code, educational_program, image} = data[0];

  const desc = `Спеціальність ${code} ${title}, ОПП "${educational_program}"`;
  const imageUrl = image?.url ? image?.url : defaultOgImage;
  

  return {
    title: desc,
    description: desc,
    alternates: { canonical: `${siteUrl}/entrants/areas_of_educational_activity/${slug}` },
    openGraph: {
      title: desc,
      description: desc,
      url: `${siteUrl}/entrants/areas_of_educational_activity/${slug}`,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },}
};

const AreasOfEducationalActivity = async({params})=> {
    const {slug} = await params;
    const professionsData = await getIntroductoryQuidePageData();

    if(!professionsData || professionsData?.error ){notFound()}

    const profession = professionsData?.professions?.filter((p)=> p?.slug === slug);

    if(!profession || profession?.length === 0 ){notFound()};
   
    const folderId ='1jKk_aONFD14-e8pW_4DkreqKFa5s_7Ec';
    const res = await getAllPdfFiles(folderId);
    const pageDocxData = await res.json();


    return <EntrantsPage 
    profession={profession[0]}
    entrance_documents_list={professionsData?.entrance_documents_list}
    pageDocxData={pageDocxData?.subfolders}/>
}


export default AreasOfEducationalActivity;