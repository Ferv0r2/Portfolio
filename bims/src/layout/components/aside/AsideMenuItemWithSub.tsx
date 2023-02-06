import {FC} from 'react'
import {useLocation} from 'react-router'
import clsx from 'clsx'

/* Component */
import {checkIsActive, KTSVG, WithChildren} from 'utils'
import {useLayout} from 'layout/core'

interface Props {
  to: string
  title: string
  url?: string
  icon?: string
  fontIcon?: string
  hasBullet?: boolean
}

const AsideMenuItemWithSub: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  url,
  icon,
  fontIcon,
  hasBullet,
}) => {
  const {pathname} = useLocation()
  const isActive = checkIsActive(pathname, to)
  const {config} = useLayout()
  const {aside} = config

  return (
    <div
      className={clsx('menu-item', {'here show': isActive}, 'menu-accordion')}
      data-kt-menu-trigger='click'
    >
      <span className='menu-link'>
        {hasBullet && (
          <span className='menu-bullet'>
            <span className='bullet bullet-dot'></span>
          </span>
        )}
        {icon && aside.menuIcon === 'svg' && (
          <span className='menu-icon'>
            <KTSVG path={icon} className='svg-icon-2' />
          </span>
        )}
        {url && (
          <span className='symbol symbol-20px me-4'>
            <img src={url} alt='icon' />
          </span>
        )}
        {fontIcon && aside.menuIcon === 'font' && <i className={clsx('bi fs-3', fontIcon)}></i>}
        <span className='menu-title'>{title}</span>
        <span className='menu-arrow'></span>
      </span>
      <div className={clsx('menu-sub menu-sub-accordion', {'menu-active-bg': isActive})}>
        {children}
      </div>
    </div>
  )
}

export {AsideMenuItemWithSub}
