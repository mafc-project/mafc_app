import s from './profesio_description.module.scss';
import ResponsiveImage from '../responsiveImage/ResponsiveImage';


const ProfesionDescription = ({profesion})=> {
    const {title, code, discipline, educational_program, term_of_study, tuition_fees, image} = profesion;

    return(
        <div className={s.profesion_wrapper}> 
                <div className={s.thumb}>
                    <ResponsiveImage
                    formats={image?.formats}
                    singleImgUrl={image?.url}
                    alt={educational_program}
                    className={s.image}/>
                </div>
                <div className={s.detail}>
                    <p> Галузь знань
                        <span>{discipline.code} {discipline.definition}</span>
                    </p>
                    <p>Спеціальність
                        
                        <span>{code} {title}</span>
                    </p>
                    <p>ОПП
                        <span>{educational_program}</span>
                    </p>
                    <p>
                        Термін навчання
                        <span>{term_of_study}</span>
                    </p>
                    <p>
                        Мова освітнього процесу
                        <span>Українська</span>
                    </p>
                    <p>
                        Вартість одного року навчання
                        <span>{tuition_fees}</span>
                    </p>
                </div>

                </div>
    )
};

export default ProfesionDescription;