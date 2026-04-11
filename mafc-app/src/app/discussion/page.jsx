import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { getDepartment } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

const Discussion = async ()=>{
    const pageRoute = '/api/discussion-page';
    const pageData = await getDepartment(pageRoute)
   
    if(!pageData) return <EmptyState/>;
    const {page_title, markdown, link, google_drive_doc_folder_id}= pageData.data;

    const docx = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

 return <DepartmentSection
            page_title={page_title}
            markdown={markdown}
            docList={docx}
            link_item={link}/>
};

export default Discussion;

