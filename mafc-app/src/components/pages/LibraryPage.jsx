import LibraryDashboardSection from "../modules/LibraryDashboardSection/LibraryDashboardSection";
import AccordionComponent from "../modules/Accordion/Accordion";
import GallerySection from "../modules/GallerySection/GallerySection";
import NMTLIst from "../modules/NMTList/NMTlist";
import DepartmentSection from "../modules/DepartmentSection/DepartmentSection";





const LibraryPage =({pageDocx,libraryData})=> {

const{e_libraries, work_schedule, services, images, rules, dashboard, data} = libraryData;

const libListTorender = e_libraries?.map((el)=> {return {id: el?.id, url: el?.link?.url, title: el?.profession?.educational_program}})

return (
    <>
    <DepartmentSection 
    page_title={data?.page_title}
    markdown={data?.markdown}
    docList={pageDocx}
    link_item={data?.link}/>
    <LibraryDashboardSection 
        dashboardData={dashboard}
        work_shedule_data={work_schedule}/>

    <AccordionComponent 
    data={rules} 
    title={'користувачам'}/> 
    
    <AccordionComponent 
    data={services} 
    title={'послуги'}/>   
     
    <GallerySection imageArr={images}/>
    
   <NMTLIst 
            linkList={libListTorender} 
            title={'Е-бібліотека'} 
            type={'secondary'}/>
    </>   
)

}


export default LibraryPage;