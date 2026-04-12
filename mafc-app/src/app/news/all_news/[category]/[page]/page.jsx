import { getAllCategories, getTotalPages, getNews} from "@/server/strapi/strapi";
import NewsPage from "@/components/pages/NewsPage";
import ScrollToTopOnPageChange from "@/components/elements/scrollToTop/ScrollToTop";
import { notFound } from "next/navigation";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/news/all_news');

const POSTS_PER_PAGE = 12;
const PREGENERATE_PAGES = 12; 

const dafaulCategory= {code: 'all', description: 'Усі новини'}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  if (!categories) return [];

  const allCategories = [dafaulCategory, ...categories];
  const params = [];

  for (const category of allCategories) {
    const totalPages = await getTotalPages(category?.code, 1, POSTS_PER_PAGE);

    const total = totalPages?.pagination?.pageCount;
    if (!total) continue;

    const pagesToGenerate = Math.min(total, PREGENERATE_PAGES);

    for (let page = total - pagesToGenerate + 1; page <= total; page++) {
      params.push({
        category: category.code,
        page: page.toString(),
      });
    }
  }

  return params;
}

const NewsPageTest = async({params})=> {
  const { category, page } = await params;
  const [categories, news, totalPages] = await Promise.all([
    getAllCategories(),
    getNews(category, page, POSTS_PER_PAGE),
    getTotalPages(category, 1, POSTS_PER_PAGE)
  ]);

  if(!news){notFound()}

    return (
    <><ScrollToTopOnPageChange/>
    <NewsPage totalPages={totalPages?.pagination?.pageCount} currentPage={page} selectedCategory={category} categories={categories} news={news}/></>)
};

export default NewsPageTest;