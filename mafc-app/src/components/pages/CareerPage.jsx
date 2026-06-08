import CompaniesCardList from "../modules/CompaniesCardList/CompaniesCardList";
import DepartmentSection from "../modules/DepartmentSection/DepartmentSection";
import SectionWrapper from "../layouts/SectionWrapper";
import AllNews from "../modules/allNews/AllNews";

const CarrerPage = ({pageData, docList})=> {

const {page_title, markdown,link}= pageData?.data;

return (<>
        <CompaniesCardList pageData={pageData}/>
       {pageData?.data && <DepartmentSection
        page_title={page_title}
        markdown={markdown}
        docList={docList}
        link_item={link}/>}
      {(pageData?.news && pageData?.news?.length > 0 ) && <section>
                <SectionWrapper title={'Події та можливості'}>
                     <AllNews news_list={pageData?.news}/>
                </SectionWrapper>
            </section>}
        </>)
}

export default CarrerPage;