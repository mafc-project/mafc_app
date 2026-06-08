import EmptyState from "@/components/modules/EmptyState/EmptyState";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import { getDepartment } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/college_history');

const CollegeHistory = async()=> {
    const pageRoute ='/api/college-history-page';
    const pageData = await getDepartment(pageRoute);
   
    if(!pageData) return <EmptyState/>
      const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data;
      const page_docx = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

return <DepartmentSection 
        page_title={page_title}
        markdown={markdown}
        link_item={link}
        docList={page_docx}/>

}

export default CollegeHistory;