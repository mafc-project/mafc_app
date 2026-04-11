import {getIntroductoryQuidePageData} from "@/server/strapi/strapi";
import ProfesionsNavPanel from "@/components/elements/profesionsRadioPanel/ProfessionsNavPanel";
import EntrantsGeneralInfo from "@/components/modules/EntrantsGeneralInfo/EntrantsGeneralInfo";
import EntrantsRoadMap from "@/components/modules/EntrantsRoadMap/EntrantsRoadMap";
import HotlineAndComplaintBox from "@/components/modules/HotlineAndComplaintBox/HotlineAndComplaintBox";
import AccordionComponent from "@/components/modules/Accordion/Accordion";
import SectionWrapper from "@/components/layouts/SectionWrapper";


export const revalidate = 3600;


const EducationalAndProfesionalProgramsLayout = async({children}) =>{

const pageData = await getIntroductoryQuidePageData();

return <>
<ProfesionsNavPanel
professions={pageData?.professions}
rootPath={'/entrants/areas_of_educational_activity'}
title={"ТВІЙ СТАРТ У МАЙБУТНЄ: ЩО ОБЕРЕШ ТИ?"}/>
{children}
<EntrantsGeneralInfo entranceDocList={pageData?.entrance_documents_list}/>
<EntrantsRoadMap road_map_data={pageData?.entrants_road_map}/>
<AccordionComponent 
    title={"ВСЕ ПРО ВСТУПНІ ВИПРОБУВАННЯ"}
    data={pageData?.entrance_exams_info}/>
<section>
    <SectionWrapper>
        <HotlineAndComplaintBox title={'Не гугли — запитай у нас'} description={'Допоможемо з документами, термінами та вибором спеціальності. Зв’яжіться з нами та отримайте швидку консультацію.'}/>
    </SectionWrapper>
</section>


</>
}


export default EducationalAndProfesionalProgramsLayout;