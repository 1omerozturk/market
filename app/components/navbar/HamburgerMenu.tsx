import {RxHamburgerMenu} from 'react-icons/rx'
import commonClasses from '../TailwindClasses/Class'
const HamburgerMenu = () => {
  return (
    <div className='relative'>
        <RxHamburgerMenu size="25" className={commonClasses.crs + " flex md:hidden"} />
    </div>
  )
}

export default HamburgerMenu