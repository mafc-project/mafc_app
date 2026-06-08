import StructureDepartmentLayout from "@/components/layouts/structureDepartmentLayout/StructureDepartmentLayuout";
import AdmissionRulesNavList from "@/utils/admissionRulesNavList";



const AdmissionResultsLayout = ({children})=> {


    return <StructureDepartmentLayout
    const rootPath = {'/entrants/admission_rules/'}
    page_title={'Організація вступу'} 
    nav_list= {AdmissionRulesNavList}>
        {children}
    </StructureDepartmentLayout>
};

export default AdmissionResultsLayout;



