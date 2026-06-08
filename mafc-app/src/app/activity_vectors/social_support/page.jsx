import { getSocialSupportPageData } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import AccordionComponent from "@/components/modules/Accordion/Accordion";
import GridContainer from "@/components/modules/GridContainer/GridContainer";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import LinkCard from "@/components/elements/linkCard/LinkCard";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";


export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/activity_vectors/social_support');

const SocialSupport= async()=> {

    const pageData = await getSocialSupportPageData();
  
  
    if(!pageData) return <EmptyState/>;

    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data;

    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);
    const ratings = await fetchAllDocxFromSubfolders(pageData?.student_ratings_folder_id?.folder_id)

    

return <>
        <DepartmentSection link_item={link} page_title={page_title} markdown={markdown} docList={docxList}/>
        {(ratings && ratings?.length >0) && <AccordionComponent title={pageData?.student_ratings_folder_id?.title} data={ratings}/>}
       {(pageData?.link && pageData?.link?.length >0)  && <section>
            <SectionWrapper>
                <GridContainer>
                    {pageData?.link?.map(item => <LinkCard cardData={item}/>) }
                </GridContainer>
            </SectionWrapper>

        </section>}

        </>

}


export default SocialSupport;