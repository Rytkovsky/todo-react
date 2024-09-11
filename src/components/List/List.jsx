import { Item } from '../Item/Item'
import s from './List.module.scss'

export const List = ({children}) => {return <>

<ul className={s.list}>{children}</ul>

</>}