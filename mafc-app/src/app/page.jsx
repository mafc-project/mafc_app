import HomePage from "@/components/pages/HomePage";
import { getHomePageData, getNews, getGraduators } from "@/server/strapi/strapi";

export const revalidate = 3600;

 const Home = async()=> {
const pageData = await getHomePageData();
const news = await getNews();
const graduators = await getGraduators();


  return (
       <HomePage news={news} pageData = {pageData} graduators={graduators}/>
  );
};

export default Home;
