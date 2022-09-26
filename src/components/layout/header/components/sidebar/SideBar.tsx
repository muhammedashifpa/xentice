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

      {/* <div className="space-y-6 border-t border-gray-200 py-6 px-4">
        <ul
            className="mt-6 flex flex-col space-y-6"
            >
        {pages.map((page) => (
            <li key={page.name} className="flow-root">
                <a href={page.href} className="-m-2 block p-2 text-gray-500">
                {page.name}
                </a>
            </li>
        ))}
        </ul>
      </div> */}

      {/* <div className="space-y-6 border-t border-gray-200 py-6 px-4">
        <div className="flow-root">
          <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
            Sign in
          </a>
        </div>
        <div className="flow-root">
          <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
            Create account
          </a>
        </div>
      </div> */}

      {/* <div className="border-t border-gray-200 py-6 px-4">
        <a href="#" className="-m-2 flex items-center p-2">
          <img
            src="https://tailwindui.com/img/flags/flag-canada.svg"
            alt=""
            className="block h-auto w-5 flex-shrink-0"
            />
          <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
          <span className="sr-only">, change currency</span>
        </a>
      </div> */}
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
        key:1,
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
      key:3
  },
  }