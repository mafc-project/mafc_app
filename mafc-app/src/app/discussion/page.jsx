import DiscussionPage from "@/components/pages/DiscussionPage";
import {fetchDocxFromCurrentFolder } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

const Discussion = async ()=>{
    const folderId = '11fgj3xm-l0KvtdG2t3pOROzh-VSSM0bj';
    const docxList = await fetchDocxFromCurrentFolder(folderId);
    if(!docxList || docxList?.length === 0) return <EmptyState/>;
   

 return <DiscussionPage docx_list={docxList}/>
      
};

export default Discussion;

