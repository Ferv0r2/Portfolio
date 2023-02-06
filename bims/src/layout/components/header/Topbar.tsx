import {FC} from 'react'
import clsx from 'clsx'

/* Component */
import {Logout} from 'components/auth/Logout'
import {ThemeModeSwitcher} from 'components/theme-mode'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px'

const Topbar: FC = () => {
  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        <ThemeModeSwitcher
          toggleBtnClass={clsx('btn-active-light-primary btn-custom', toolbarButtonHeightClass)}
        />
      </div>
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        <Logout toggleBtnClass={clsx('btn-active-light-primary')} />
      </div>
    </div>
  )
}

export {Topbar}
