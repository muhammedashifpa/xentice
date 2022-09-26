import IconLink, { IconLinkInterface } from './utils/IconLink'

type Props = {}

const RightNav = (props: Props) => {
  return (
    <div className="ml-auto items-center hidden md:flex">
        {RightNavData.map(item=>(
            <IconLink
                key={item.key}
                icon={item.icon}
                name={item.name}
            />
        ))}
  </div>
  )
}

export default RightNav;

const RightNavData : IconLinkInterface[] = [
    {
        icon:'SpeakerWaveIcon',
        name:'Post Ad',
        screenRead:'Post ad',
        key:1
    },
    {
        icon:'MapPinIcon',
        name:'Near Me',
        screenRead:'near me',
        key:2
    },
    {
        icon:'ArrowRightOnRectangleIcon',
        name:'Login/SignUp',
        screenRead:'Login or signup',
        key:3
    },
]


