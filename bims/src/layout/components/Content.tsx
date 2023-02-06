import {FC, useEffect} from 'react'
import {useLocation} from 'react-router'
import clsx from 'clsx'

/* Component */
import {useLayout} from 'layout/core'
import {DrawerComponent} from 'assets/ts/components'
import {WithChildren} from 'utils'

const Content: FC<WithChildren> = ({children}) => {
  const {classes} = useLayout()
  const location = useLocation()
  useEffect(() => {
    DrawerComponent.hideAll()
  }, [location])

  return (
    <div id='kt_content_container' className={clsx(classes.contentContainer.join(' '))}>
      {children}
    </div>
  )
}

export {Content}
