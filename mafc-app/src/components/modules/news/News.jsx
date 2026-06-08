import SectionWrapper from "@/components/layouts/SectionWrapper";
import s from './news.module.scss';
import MainCard from "@/components/elements/MainCard/MainCard";
import NewsItem from "@/components/elements/NewsItem/NewsItem";
import Link from "next/link";
import formatPreviewText from "@/utils/formatted_text";
import extractImageSourcesFromHTML from "@/utils/extractImageSourcesFromHTML";


const News = ({newsList,title, subtitle, category})=> {

    if(!newsList || newsList?.length === 0) return null;
    return (
        <section className={s.section}>
            <SectionWrapper>
                <div className={s.center_box}>
                    <div className={s.head_container}>
                        <h2 className={s.title}>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                
                    <ul className={s.news_list}>
                        {newsList.map((el, i)=> { 
                            const Card = i === 0? MainCard : NewsItem;
                            const {date, title, article, images, videos, categories, documentId} = el;

                            const imageFormats = images? images[0]?.formats : null;
                           const videoThunbnail = videos.length > 0? [`https://img.youtube.com/vi/${videos[0]?.video_id}/hqdefault.jpg`]: [];
                           const imagesFromHTML = extractImageSourcesFromHTML(article);

                            const posterUrl = [...videoThunbnail, ... imagesFromHTML];

                            
                            return (
                            <li key={el.documentId}>
                             <Card 
                                date={new Date(date).toLocaleDateString('uk-UA')}
                                title={title}
                                description={formatPreviewText(article)}
                                formats={imageFormats}
                                imageUrl={posterUrl[0]}
                                documentId={documentId}
                                categories={categories}
                                />
                            </li>
                                )})}
                    </ul>

                    <Link target="_self" className={s.more_button} href={`/news/all_news/${category}/1`}><span>Більше новин</span></Link>
                </div>
            </SectionWrapper>
        </section>
    )
};


export default News;