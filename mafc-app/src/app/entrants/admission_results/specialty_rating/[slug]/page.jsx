
import SpecialityRatingList from "@/components/modules/SpecialityRatingList/SpecialityRatingList";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import {getIntroductoryQuidePageData, getProfessionBySlug } from "@/server/strapi/strapi";
import { seoConfig } from "../../../../../../seo.config";
import { notFound } from "next/navigation";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;
export async function generateStaticParams() {
  const res = await getIntroductoryQuidePageData();
  if(!res) return [];

   const paths = res?.professions?.map((n) => ({
        params: { slug: n.slug },
      }));
  return paths
};

export async function generateMetadata({ params }) {
  const {slug} = await params;
  const data = await getProfessionBySlug(slug);
  if(!data || data[0].length === 0) return {};

  const {siteUrl, defaultOgImage}= seoConfig;
  const {title, code, educational_program, image} = data[0];

  const desc = `Рейтинг за спеціальностями: ${code} "${title}", ОПП "${educational_program}"`;
  const imageUrl = image?.url ? image?.url : defaultOgImage;
  

  return {
    title: desc,
    description: desc,
    alternates: { canonical: `${siteUrl}/entrants/admission_results/specialty_rating/${slug}` },
    openGraph: {
      title: desc,
      description: desc,
      url: `${siteUrl}/entrants/admission_results/specialty_rating/${slug}`,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },}
};


const SpecialityRating = async({params})=> {
    const {slug} = await params;
    const profession = await getProfessionBySlug(slug);
    if(!profession[0] || profession?.error ){notFound()}

   
    const folderId = profession[0].speciality_rating_folder_id;
    const pageDocxData = await fetchAllDocxFromSubfolders(folderId);
     if(!pageDocxData) return <EmptyState/>
  
    return <SpecialityRatingList speciality_rating_list={pageDocxData}/>
}


export default SpecialityRating;