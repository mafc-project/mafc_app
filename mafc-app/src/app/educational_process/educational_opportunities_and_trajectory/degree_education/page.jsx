import {getDepartmentAndOptionalData } from "@/server/strapi/strapi";
import {fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import GovernmentResourses from "@/components/modules/GovernmentResourses/GovernmentResourses";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/educational_process/educational_opportunities_and_trajectory/degree_education');


const DegreeEducation = async ()=> {
    
    const pageRoute = '/api/degree-education-page';
    const queryOptions =  { data: {   populate: '*' }, universities: {  populate: '*' }}
    const pageData = await getDepartmentAndOptionalData(pageRoute, queryOptions);

    if(!pageData) return <EmptyState/>;
    const {google_drive_doc_folder_id,markdown, page_title, link } = pageData?.data

    const pageDocs = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

    return <>
                <DepartmentSection
                    page_title={page_title}
                    markdown={markdown}
                    docList={pageDocs}
                    link_item={link}/>

                <GovernmentResourses linkArray={pageData?.universities}/>    
    
            </>

}

export default DegreeEducation;