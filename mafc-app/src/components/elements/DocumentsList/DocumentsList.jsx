
import s from './documents_list.module.scss';
import DocIcon from '../../../../public/doc_icon.svg';
import { v4 } from 'uuid';
import clsx from 'clsx';


const DocumentsList = ({documents_list, variant='singe'}) => {
 const docxToRender = [...(documents_list ?? [])].sort(
  (a, b) => a?.description - b?.description);
    return (
        <ul className={clsx(s.list, {[s.double] : variant === 'double'}) }>
        {docxToRender?.map((el)=>{
            return (
                <li key={el?.id || v4()} className={s.item}>
                  <DocIcon className={s.icon}/>
                  <a className={s.link} href={el?.webViewLink || el?.url || el?.link} target="_blank">{el?.name || el?.title}</a>
                </li>)
        })}
    </ul>
    )
}

export default DocumentsList;