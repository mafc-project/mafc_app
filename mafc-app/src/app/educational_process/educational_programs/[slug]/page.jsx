import EducationalProgramPage from "@/components/pages/EducationalProgramPage";
import { getIntroductoryQuidePageData, getProfessionBySlug, getCommonPool } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { notFound } from "next/navigation";
import { seoConfig } from "../../../../../seo.config";

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

  const desc = `Спеціальність ${code} "${title}", ОПП "${educational_program}"`;
  const imageUrl = image?.url ? image?.url : defaultOgImage;
  

  return {
    title: desc,
    description: desc,
    alternates: { canonical: `${siteUrl}/educational_process/educational_programs/${slug}` },
    openGraph: {
      title: desc,
      description: desc,
      url: `${siteUrl}/educational_process/educational_programs/${slug}`,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },}
};

const EduProgram= async({params})=>{

  const {slug} = await params;
  const profession = await getProfessionBySlug(slug);

  if(!profession[0] || profession?.error ){notFound()}

  const professionDocxFolderId = profession[0]?.google_drive_doc_folder_id;
  const monitoring_and_update_Docx_FolderId = profession[0]?.monitoring_and_updating_edu_program_golder_id?.folder_id;
  const commonPool= await getCommonPool();
  const professionDocx = await fetchAllDocxFromSubfolders(professionDocxFolderId);
  const monitoring_and_update_Docx = await fetchAllDocxFromSubfolders(monitoring_and_update_Docx_FolderId);

    return <EducationalProgramPage 
    commonPool={commonPool} 
    profession={profession[0]}
    professionDocx={professionDocx}
    monitoringDocx = {monitoring_and_update_Docx}/>
};

export default EduProgram