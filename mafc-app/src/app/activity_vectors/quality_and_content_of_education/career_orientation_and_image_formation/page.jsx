import { getDepartment, getSocialMediaData } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import News from "@/components/modules/news/News";
import { getNews } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import LargeSocialPanel from "@/components/elements/social/LargeSocialPanel";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/activity_vectors/quality_and_content_of_education/career_orientation_and_image_formation');


const CareerOrientationAndImageFormation= async()=> {

    const pageRoute = '/api/career-orientation-and-image-formation';
    const pageData = await getDepartment(pageRoute);

    if(!pageData) return <EmptyState/>;
   

    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data;

    const category = pageData?.category?.code;
    const news =await getNews(category);
    const social = await getSocialMediaData();
    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

return <>
    <DepartmentSection link_item={link} page_title={page_title} markdown={markdown} docList={docxList}/>
    {(news && news?.length > 0) && <News newsList={news} title={'Будуємо бренд разом'} subtitle={'Формуємо позитивний імідж коледжу через активну взаємодію, медіаприсутність, досягнення студентів і партнерство з громадою'} category={category}/>}
    <LargeSocialPanel social={social} title={'Коледж у медіа'}/>
</>

}

export default CareerOrientationAndImageFormation;