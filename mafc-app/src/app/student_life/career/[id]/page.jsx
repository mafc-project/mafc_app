import VacancyPage from "@/components/pages/VacancyPage";
import { getCompaniesList, getCompanyData } from "@/server/strapi/strapi";
import BackButton from "@/components/elements/backButton/BackButton";

export const revalidate = 3600;

  export async function generateStaticParams() {
    const res = await getCompaniesList();
    if(!res) return [];

    const paths = res.map((item) => ({
       id: item?.documentId,
      }));

    return paths
  }

const VacancyItem = async({params})=> {
const {id} = await params;
const companyData = await getCompanyData(id)


    return( <>
            <BackButton/>
            <VacancyPage companies={[companyData]}/>
          </>)
};

export default VacancyItem;

