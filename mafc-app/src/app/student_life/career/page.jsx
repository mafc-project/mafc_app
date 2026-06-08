import { getCareerPage } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import CarrerPage from "@/components/pages/CareerPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/career');

const Career= async()=>{

const pageData = await getCareerPage();
if(!pageData) return <EmptyState/>;

const docList = await fetchAllDocxFromSubfolders(pageData?.data?.google_drive_doc_folder_id);



    return <CarrerPage docList={docList} pageData={pageData}/>
};

export default Career;