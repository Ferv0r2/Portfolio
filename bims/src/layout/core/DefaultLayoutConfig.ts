import {ILayout} from './LayoutModels'

export const DefaultLayoutConfig: ILayout = {
  main: {
    type: 'default',
    primaryColor: '#009EF7',
    darkSkinEnabled: true,
  },
  loader: {
    display: true,
    type: 'default', // Set default|spinner-message|spinner-logo to hide or show page loader
  },
  scrolltop: {
    display: true,
  },
  header: {
    display: true, // Set true|false to show or hide Header
    width: 'fluid', // Set fixed|fluid to change width type
    left: 'menu',
    fixed: {
      desktop: true, // Set true|false to set fixed Header for desktop mode
      tabletAndMobile: true, // Set true|false to set fixed Header for tablet and mobile modes
    },
    menuIcon: 'svg',
  },
  megaMenu: {
    display: true, // Set true|false to show or hide Mega Menu
  },
  aside: {
    display: true,
    theme: 'dark',
    menu: 'main',
    fixed: true,
    minimized: false,
    minimize: true,
    hoverable: true,
    menuIcon: 'svg',
  },
  content: {
    width: 'fixed', // Set fixed|fluid to change width
    layout: 'default',
  },
  footer: {
    width: 'fluid', // Set fixed|fluid to change width type
  },
  pageTitle: {
    display: true,
    breadCrumbs: true,
    description: false,
    layout: 'default',
    direction: 'row',
    responsive: true,
    responsiveBreakpoint: 'lg',
    responsiveTarget: '#kt_toolbar_container',
  },
}
