import s from './library_dashboard_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import WorkSchedule from '@/components/elements/work_schedule/work_schedule';


const LibraryDashboardSection = ({dashboardData, work_shedule_data})=> {


    if(!dashboardData && !work_shedule_data) return null;

return(
    <section>
        <SectionWrapper>
            {dashboardData && <div className={s.dash_box}>
                <ul className={s.dash_list}>
                {dashboardData?.map(({id, title, value})=> {
                    return(
                        <li className={s.dash_item} key={id}>
                            <p>{title}</p>
                            <p>{value}</p>
                        </li>
                    )
                })}
                </ul>
            </div>}
           <WorkSchedule
           work_shedule_data={work_shedule_data}
            />
        </SectionWrapper>
    </section>
)

};

export default LibraryDashboardSection;