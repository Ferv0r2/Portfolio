import {FC} from 'react'
import {Link, useLocation} from 'react-router-dom'
import clsx from 'clsx'

/* Component */
import {checkIsActive, KTSVG} from 'utils'

interface Props {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  hasArrow?: boolean
  hasBullet?: boolean
}

const MenuItem: FC<Props> = ({to, title, icon, fontIcon, hasArrow = false, hasBullet = false}) => {
  const {pathname} = useLocation()

  return (
    <div className='menu-item me-lg-1'>
      <Link
        className={clsx('menu-link py-3', {
          active: checkIsActive(pathname, to),
        })}
        to={to}
      >
        {hasBullet && (
          <span className='menu-bullet'>
            <span className='bullet bullet-dot'></span>
          </span>
        )}

        {icon && (
          <span className='menu-icon'>
            <KTSVG path={icon} className='svg-icon-2' />
          </span>
        )}

        {fontIcon && (
          <span className='menu-icon'>
            <i className={clsx('bi fs-3', fontIcon)}></i>
          </span>
        )}

        <span className='menu-title'>{title}</span>

        {hasArrow && <span className='menu-arrow'></span>}
      </Link>
    </div>
  )
}

export {MenuItem}
