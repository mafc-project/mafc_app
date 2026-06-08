import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import News from "@/components/modules/news/News";
import { getNews, getDepartmentAndOptionalData } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/sports_drive');

const SportsDrive = async()=> {
const pageRoute ='/api/sports-drive-page';
 const queryOptions ={data: {populate: "*"},category: {populate: "*"},}
    const pageData = await getDepartmentAndOptionalData(pageRoute, queryOptions);
    if(!pageData) return <EmptyState/>

    const {page_title, markdown, link, google_drive_doc_folder_id}= pageData.data;

    const docx = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);
     const category = pageData?.category?.code;
    const news =await getNews(category);

    return <>
            <DepartmentSection
                page_title={page_title}
                link_item={link}
                markdown={markdown}
                docList={docx}/>
           {(news && news?.length > 0) && <News 
                newsList={news}
                category={category}
                title={'У ритмі спорту'} 
                subtitle={'Енергія перемог, командний дух і найяскравіші спортивні події коледжу'}/>}
            </> 

};

export default SportsDrive;