import s from './usefullinks.module.scss';
import { v4 } from 'uuid';
import Link from 'next/link';


const links = [{
    path: '/entrants/areas_of_educational_activity',
    title: 'Вступний гід'
},
{
    path: '/news',
    title: 'Новини'
},
{
    path: '/about/contacts',
    title: 'скринька довіри'
},
]

const UsefulLinks = ()=> {

    return(
        <div className={s.box}>
            <h3 className={s.title}>Корисні посилання</h3>
          <ul className={s.list}>
            {links.map(el =>  <li className={s.item} key={v4()}>
                    <Link className={s.link} href={el.path}>
                    {el.title}
                    </Link>
                </li>)
               
            }

          </ul>
        </div>
    )
};

export default UsefulLinks;