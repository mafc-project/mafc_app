import LibraryDashboardSection from "../modules/LibraryDashboardSection/LibraryDashboardSection";
import AccordionComponent from "../modules/Accordion/Accordion";
import GallerySection from "../modules/GallerySection/GallerySection";
import NMTLIst from "../modules/NMTList/NMTlist";





const LibraryPage =({pageDocx,libraryData})=> {

const{page_title, e_libraries, work_schedule, services, images, rules, dashboard} = libraryData;

const libListTorender = e_libraries?.map((el)=> {return {id: el?.id, url: el?.link?.url, title: el?.profession?.educational_program}})

return (
    <>
    <LibraryDashboardSection 
        page_title={page_title}
        dashboardData={dashboard}
        work_shedule_data={work_schedule}/>

    <AccordionComponent 
    data={pageDocx} 
    title={'регламентуючі документи'}/>

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