export interface ILoader {
  display?: boolean
  type: 'default' | 'spinner-message' | 'spinner-logo'
}

export interface IScrollTop {
  display: boolean
}

export interface IHeader {
  display: boolean
  width: 'fixed' | 'fluid'
  left: 'menu' | 'page-title'
  fixed: {
    desktop: boolean
    tabletAndMobile: boolean
  }
  menuIcon: 'svg' | 'font'
}

export interface IMegaMenu {
  display: boolean
}

export interface IAside {
  display: boolean // Display aside
  theme: 'dark' | 'light' // Set aside theme(dark|light)
  menu: 'main' | 'documentation' // Set aside menu(main|documentation)
  fixed: boolean // Enable aside fixed mode
  minimized: boolean // Set aside minimized by default
  minimize: boolean // Allow aside minimize toggle
  hoverable: boolean // Allow aside hovering when minimized
  menuIcon: 'svg' | 'font' // Menu icon type(svg|font)
}

export interface IContent {
  width: 'fixed' | 'fluid'
  layout: 'default' | 'docs'
}

export interface IFooter {
  width: 'fixed' | 'fluid'
}

export interface ISidebar {
  display: boolean
  toggle: boolean
  shown: boolean
  content: 'general' | 'user' | 'shop'
  bgColor: 'bg-body' | 'bg-info'
  displayFooter: boolean
  displayFooterButton: boolean
}

export interface IPageTitle {
  display: boolean
  breadCrumbs: boolean
  description: boolean
  layout: 'default' | 'select'
  direction: 'row' | 'column'
  responsive: boolean
  responsiveBreakpoint: 'lg' | 'md' | 'lg' | '300px'
  responsiveTarget: string
}

export interface IMain {
  body?: {
    backgroundImage?: string
    class: string
  }
  primaryColor: string
  darkSkinEnabled: boolean
  type: 'blank' | 'default' | 'none'
}

export interface ILayout {
  loader: ILoader
  scrolltop: IScrollTop
  header: IHeader
  megaMenu: IMegaMenu
  aside: IAside
  content: IContent
  footer: IFooter
  sidebar?: ISidebar
  main?: IMain
  pageTitle?: IPageTitle
}

export interface ILayoutCSSClasses {
  header: Array<string>
  headerContainer: Array<string>
  headerMobile: Array<string>
  headerMenu: Array<string>
  aside: Array<string>
  asideMenu: Array<string>
  asideToggle: Array<string>
  sidebar: Array<string>
  toolbar: Array<string>
  toolbarContainer: Array<string>
  content: Array<string>
  contentContainer: Array<string>
  footerContainer: Array<string>
  pageTitle: Array<string>
}

export interface ILayoutHTMLAttributes {
  asideMenu: Map<string, string | number | boolean>
  headerMobile: Map<string, string | number | boolean>
  headerMenu: Map<string, string | number | boolean>
  headerContainer: Map<string, string | number | boolean>
  pageTitle: Map<string, string | number | boolean>
}

export interface ILayoutCSSVariables {
  body: Map<string, string | number | boolean>
}
