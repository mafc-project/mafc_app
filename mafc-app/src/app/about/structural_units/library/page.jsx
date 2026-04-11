import { getLibraryPage } from "@/server/strapi/strapi";
import LibraryPage from "@/components/pages/LibraryPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/about/structural_units/library');

const Library = async()=> {

 const pageData = await getLibraryPage();
   
if(!pageData) return <EmptyState/>

const pageDocx = await fetchAllDocxFromSubfolders(pageData?.google_drive_folder_id)

return <><LibraryPage pageDocx={pageDocx} libraryData={pageData}/></>
}

export default Library;