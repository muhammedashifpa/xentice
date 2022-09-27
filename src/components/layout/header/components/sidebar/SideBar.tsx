import SideBarWrapper from './SideBarWrapper'
import SideBarHeader from './SideBarHeader'
import { IconLinkInterface } from '../utils/IconLink'
import SideBarBody from './SideBarBody'

export  interface SideBarInterface {
    setOpen:(val:boolean)=>void
    open:boolean
}

const SideBar = ({setOpen, open}: SideBarInterface) => {
  return (
    <SideBarWrapper  setOpen={setOpen} open={open}>
      <SideBarHeader setOpen={setOpen} open={open}/>
      <SideBarBody

        data={Navigators.data} 
        login={Navigators.login}
        pages={Navigators.pages}
      />
  </SideBarWrapper>
  )
}

export default SideBar

export interface NavigatorPagesInterface {
  key:number
  name:string
  link:string
}

export interface NavigatorInterface {
  key?:number
  data:IconLinkInterface[]
  pages:NavigatorPagesInterface[]
  login:IconLinkInterface
}

const Navigators: NavigatorInterface =  
  {
    key:1,
    data:[
      { 
        key:1,
        icon:'BellIcon',
        link:'',
        name:'Post Requirments'
      },
      { 
        key:2,
        icon:'SpeakerWaveIcon',
        link:'',
        name:'Post Ad'
      },
      { 
        key:3,
        icon:'PaintBrushIcon',
        link:'',
        name:'Post Services'
      },
      { 
        key:4,
        icon:'UserIcon',
        link:'',
        name:'Profile'
      },
      { 
        key:5,
        icon:'BellAlertIcon',
        link:'',
        name:'Notificaion'
      },
      { 
        key:6,
        icon:'MapPinIcon',
        link:'',
        name:'Near Me'
      },
      { 
        key:7,
        icon:'TagIcon',
        link:'',
        name:'string'
      },
    ],
    pages:[
      {
        key:1,
        name:'About Us',
        link:'about-us'
      },
      {
        key:2,
        name:'Contact Us',
        link:'contact-us'
      },
      {
        key:3,
        name:'Privacy & Policy',
        link:'privacy-and-policy'
      },
    ],
    login:    {
      icon:'ArrowRightOnRectangleIcon',
      name:'Login/SignUp',
      screenRead:'Login or signup',
      link:''
      // key:3
  },
  }