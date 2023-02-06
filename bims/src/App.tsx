import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {LayoutProvider, LayoutSplashScreen} from 'layout/core'
import {MasterInit} from 'layout/MasterInit'
const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <LayoutProvider>
        <Outlet />
        <MasterInit />
      </LayoutProvider>
    </Suspense>
  )
}

export {App}
