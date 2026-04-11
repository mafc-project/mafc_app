import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import AccordionComponent from "@/components/modules/Accordion/Accordion";
import OptionalSubjects from "@/components/elements/optionalSubjects/OptionalSubjects";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getIntroductoryQuidePageData, getConceptualPrinciplesPageData } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/educational_process/conceptual_principles');

const ConceptualPrinciplesPage = async()=> {

    const pageData = await getConceptualPrinciplesPageData();
    if(!pageData) return <EmptyState/>;

    const proffesionsData = await getIntroductoryQuidePageData();

    const {folder_id, title} = pageData?.edu_process_participants_folder_id;
    const eduProcessParticipantsDocs = await fetchAllDocxFromSubfolders(folder_id);

    return(
        <>
        <DepartmentSection 
            page_title={'концептуальні засади'}
            markdown={pageData?.educational_process_description}
            docList={eduProcessParticipantsDocs}
            accorion_title={title}/>
            <AccordionComponent
                title={'ОСОБИСТІСНА ЗОРІЄНТОВАНІСТЬ ОСВІТНЬОГО ПРОЦЕСУ'}
                data={pageData?.personality_orientation}/>

            <OptionalSubjects
            professions={proffesionsData?.professions}
            rootPath={'/educational_process/educational_programs'}
            title={'Вибіркові дисципліни'}
                />
            </>
    )


}

export default ConceptualPrinciplesPage;