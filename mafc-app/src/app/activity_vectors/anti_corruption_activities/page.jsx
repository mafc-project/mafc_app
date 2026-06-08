import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getContactsData } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import { getDepartment } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import CollegeContacts from "@/components/modules/CollegeContacts/CollegeContacts";


export const revalidate = 3600;


export const metadata = generateStaticPageMeta('/activity_vectors/anti_corruption_activities');

const AntiCorruption = async()=> {
    const pageRoute ='/api/anticorruption-activity-page';
    const pageData = await getDepartment(pageRoute);
    const pageContacts= await getContactsData('anti_corruption');
    if (!pageData && !pageContacts) return <EmptyState/>

    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data
    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);
    
    return <>
            <DepartmentSection
                page_title={page_title}
                markdown={markdown}
                docList={docxList}
                link_item={link}/>
            <CollegeContacts 
                contactsData={pageContacts?.[0]} 
                isSocialShow={false}/>
            </>

};

export default AntiCorruption;