'use client'
import s from './news_layout.module.scss';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Select from 'react-select';
import { useRouter} from 'next/navigation';


const dafaulCategory= {value: 'all', label: 'Усі новини'}

const NewsLayoutModule = ({categories,selectedCategory,children})=>{
  
    const router = useRouter();
      const options = [dafaulCategory, ...categories?.map((opt)=> {return {value: opt?.code, label: opt?.description}})];

  console.log(categories)


 const handleChangeCategory = (selected) => {
   if (!selected) {
      selected = options[0];
    }
    router.push(`/news/all_news/${selected.value}/1`);
  };


return(
    <section>
        <SectionWrapper>
            <div className={s.center_box}>
                    <div className={s.head_container}>
                        <h2 className={s.title}>НАШ ГЕКТАР НОВИН</h2>
                        <p >КОЖЕН ДЕНЬ ЗАСІВАЄМО ІНФОРМАЦІЙНЕ ПОЛЕ!</p>
                    </div>

                    <div className={s.filter_box}>
                         <Select
                              instanceId="category-select"
                               isSearchable={false}
                               classNames={{
                                control: ()=>s.input,
                                menu: ()=>s.menu,
                                option: (state) =>
                                        `${s.option} ${state.isSelected ? s.optionSelected : ""} ${state.isFocused ? s.optionFocused : ""}`,
                               }}
                                options={options}
                                placeholder={'Обрати категорію'}
                                value={options.find((opt) => opt.value === selectedCategory)}
                                onChange={handleChangeCategory}
                                isClearable/>
                    </div>
                    {children}
            </div>

        </SectionWrapper>
    </section>

)

}

export default NewsLayoutModule;