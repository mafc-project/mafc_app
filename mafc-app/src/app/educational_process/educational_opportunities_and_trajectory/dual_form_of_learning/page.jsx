import { getDepartment } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import Gallery from "@/components/elements/gallery/Gallery";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/educational_process/educational_opportunities_and_trajectory/dual_form_of_learning');


const DualFormOfLearning = async ()=> {

    const pageRoute = '/api/dual-form-of-learning-page'
    const pageData = await getDepartment(pageRoute);
    if(!pageData) return <EmptyState/>;

    const {data, video, image} = pageData;
    const docsList = await fetchAllDocxFromSubfolders(data?.google_drive_doc_folder_id);

    const imagesArr = image || [];
    const videosArr = video || [];
    const mediaArr = [...imagesArr, ...videosArr];

    return(
        <>
         <DepartmentSection
            page_title={data?.page_title}
            markdown={data?.markdown}
            link_item={data?.link}
            docList={docsList}/>
            <Gallery imageArr={mediaArr}/>
        </>
       
    )

}

export default DualFormOfLearning;