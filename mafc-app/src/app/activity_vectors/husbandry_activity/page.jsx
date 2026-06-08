import { getDepartmentAndOptionalData } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import ModalImageGallery from "@/components/modules/ModalImageGallery/ModalImageGallery";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/activity_vectors/husbandry_activity');

const HusbandryActivity= async()=> {
  const pageRoute = '/api/husbandry-activity-page';
  const queryOptions =  { data: {   populate: '*' }, images: {  populate: '*' }};
const pageData = await getDepartmentAndOptionalData(pageRoute, queryOptions);

    if(!pageData) return <EmptyState/>;

    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data

    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

return <>
        <DepartmentSection link_item={link} page_title={page_title} markdown={markdown} docList={docxList}/>
        {(pageData?.images && pageData?.images?.length > 0) && <ModalImageGallery imagesList={pageData?.images}/>}
        </>

}

export default HusbandryActivity;