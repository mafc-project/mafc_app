import { getDepartmentAndOptionalData } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import News from "@/components/modules/news/News";
import { getNews } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/educational_process/educational_opportunities_and_trajectory/practical_training');


const PracticalTrainingPage= async()=> {

    const pageRoute = '/api/practical-training-page';
      const queryOptions =  { data: {   populate: '*' }, category: {  populate: '*' }}
    const pageData = await getDepartmentAndOptionalData(pageRoute, queryOptions);
    if(!pageData) return <EmptyState/>;
   

    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data;

    const category = pageData?.category?.code;
    const news =await getNews(category);
    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

return <>
    <DepartmentSection link_item={link} page_title={page_title} markdown={markdown} docList={docxList}/>
    {(news && news?.length > 0) && <News newsList={news} title={'Навчаємось. Створюємо. Впроваджуємо.'} subtitle={'Тут навчання переходить у дію: реальні проєкти, виробничі кейси, стажування та досвід, який формує конкурентних фахівців.'} category={category}/>}
</>

}

export default PracticalTrainingPage;