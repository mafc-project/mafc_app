import s from './social.module.scss';
import socialLinks from '@/utils/social';
import { v4 } from 'uuid';
import SectionWrapper from '@/components/layouts/SectionWrapper';

import Instagram from '../../../../public/instagram.svg'
import Facebook from '../../../../public/facebook.svg';
import Tiktok from '../../../../public/tiktok.svg';
import Youtube from '../../../../public/youtube.svg';


const socialIcon ={
    facebook: <Facebook className={s.icon}/>,
    instagram: <Instagram className={s.icon}/>,
    tiktok: <Tiktok className={s.icon}/>,
    youtube: <Youtube className={s.icon}/>
}


const LargeSocialPanel = ({social, title})=> {

const socialLinksToRender = (!social || social?.length === 0) ? socialLinks : social;
    return(
        <section>
            <SectionWrapper>
                <h3 className={s.title}>{title}</h3>
                <ul className={s.large_social_list}>
                {socialLinksToRender?.map(({social})=> {return (
                <li key={v4()}>
                    <a aria-label={social?.type} className={s.link} href={social?.link} target="_blank" >
                    {socialIcon[social?.type]}
                    </a>
                </li>
            )})}
                </ul>
            </SectionWrapper>
        </section>
    )
}

export default LargeSocialPanel;