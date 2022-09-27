import React from 'react'
import { classNames } from '../../utils/functions'
import HeaderNavigatorContent, { NavigatorContentInterface } from './HeaderNavigatorContent'

type Props = {
    className?:string
    data:NavigatorContentInterface[]
    fontClass?:string
    width?:string
}

const HeaderNavigator = ({className,data,fontClass,width}: Props) => {
  return (
    <div className={classNames('relative scroll-pl-6 snap-x overflow-scroll no-scrollbar',className?className:'')}>
        <HeaderNavigatorContent fontClass={fontClass} data={data} width={width?width:null}/>
    </div>
  )
}

export default HeaderNavigator