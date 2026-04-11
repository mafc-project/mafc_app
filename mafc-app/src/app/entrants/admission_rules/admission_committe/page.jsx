import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { getAdmissionCommittePageData } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import WorkSchedule from "@/components/elements/work_schedule/work_schedule";
import HotlineAndComplaintBox from "@/components/modules/HotlineAndComplaintBox/HotlineAndComplaintBox";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/entrants/admission_rules/admission_committe');


const AdmissionCommitte = async()=>{

const pageData = await getAdmissionCommittePageData();

if(!pageData) return <EmptyState/>

const {page_title, markdown, link, google_drive_doc_folder_id} = pageData?.data;

const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

    return <>
            <DepartmentSection
                page_title={page_title}
                markdown={markdown}
                link_item={link}
                docList={docxList}/>
            <section>
            <HotlineAndComplaintBox
                     title={'Консультація приймальної комісії'}
                     description={'Не знаєте, з чого почати вступ? Маєте уточнення щодо спеціальностей чи документів? Зв’яжіться з нами — відповімо на всі ваші запитання'}/>
            </section>         

                <section>
                    <WorkSchedule work_shedule_data={pageData?.work_schedule}/>
                </section>
                
            </>
    

}

export default AdmissionCommitte;