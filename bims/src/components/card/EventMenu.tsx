import {FC} from 'react'

/* Component */
import {KTSVG} from 'utils'

/* State */
import {useRecoilState} from 'recoil'
import {basketState} from 'stores'

interface Props {
  className?: string
  style?: any
}

const EventMenu: FC<Props> = ({className, style}) => {
  const [basketItems, setBasketItems] = useRecoilState(basketState)

  return (
    <div className={`card ${className}`} style={style}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Event Menu</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Social Items</span>
        </h3>
        <KTSVG path='/media/icons/shopping-bag.svg' className='svg-icon-muted svg-icon-2hx' />
      </div>

      <div className='card-body p-4'>
        {/* begin::Facebook */}
        <div
          onClick={() => {
            setBasketItems([
              ...basketItems,
              {
                id: 'e1',
                sns: 'Facebook',
                options: ['Link'],
              },
            ])
          }}
          className='d-flex align-items-center mb-4 cursor-pointer px-4 py-2 bg-hover-light-primary rounded'
        >
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-primary'>
              <KTSVG
                path='/media/svg/social-logos/facebook.svg'
                className='svg-icon-2x svg-icon-primary'
              />
            </span>
          </div>
          <div className='d-flex flex-column'>
            <span className='text-dark text-hover-primary fs-6 fw-bold'>Facebook</span>
            <span className='text-muted fw-semibold'>Link</span>
          </div>
        </div>
        {/* end::Facebook */}
        {/* begin::Instagram */}
        <div
          onClick={() => {
            setBasketItems([
              ...basketItems,
              {
                id: 'e2',
                sns: 'Instagram',
                options: ['Link'],
              },
            ])
          }}
          className='d-flex align-items-center mb-4 cursor-pointer px-4 py-2 bg-hover-light-info rounded'
        >
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-info'>
              <KTSVG
                path='/media/svg/social-logos/instagram.svg'
                className='svg-icon-2x svg-icon-info'
              />
            </span>
          </div>
          <div className='d-flex flex-column'>
            <span className='text-dark text-hover-info fs-6 fw-bold'>Instagram</span>
            <span className='text-muted fw-semibold'>Link</span>
          </div>
        </div>
        {/* end::Instagram */}
        {/* begin::Twitter */}
        <div
          onClick={() => {
            setBasketItems([
              ...basketItems,
              {
                id: 'e3',
                sns: 'Twitter',
                options: ['Link'],
              },
            ])
          }}
          className='d-flex align-items-center mb-4 cursor-pointer px-4 py-2 bg-hover-light-primary rounded'
        >
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-primary'>
              <KTSVG
                path='/media/svg/social-logos/twitter.svg'
                className='svg-icon-2x svg-icon-primary'
              />
            </span>
          </div>
          <div className='d-flex flex-column'>
            <span className='text-dark text-hover-primary fs-6 fw-bold'>Twitter</span>
            <span className='text-muted fw-semibold'>Link</span>
          </div>
        </div>
        {/* end::Twitter */}
        {/* begin::Youtube */}
        <div
          onClick={() => {
            setBasketItems([
              ...basketItems,
              {
                id: 'e4',
                sns: 'Youtube',
                options: ['Link'],
              },
            ])
          }}
          className='d-flex align-items-center mb-4 cursor-pointer px-4 py-2 bg-hover-light-danger rounded'
        >
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-danger'>
              <KTSVG
                path='/media/svg/social-logos/youtube.svg'
                className='svg-icon-2x svg-icon-danger'
              />
            </span>
          </div>
          <div className='d-flex flex-column'>
            <span className='text-dark text-hover-danger fs-6 fw-bold'>Youtube</span>
            <span className='text-muted fw-semibold'>Link</span>
          </div>
        </div>
        {/* end::Youtube */}
        {/* begin::Discord */}
        <div
          onClick={() => {
            setBasketItems([
              ...basketItems,
              {
                id: 'e5',
                sns: 'Discord',
                options: ['Link', 'Join'],
              },
            ])
          }}
          className='d-flex align-items-center mb-4 cursor-pointer px-4 py-2 bg-hover-light-info rounded'
        >
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-info'>
              <KTSVG
                path='/media/svg/social-logos/discord.svg'
                className='svg-icon-2x svg-icon-info'
              />
            </span>
          </div>
          <div className='d-flex flex-column'>
            <span className='text-dark text-hover-info fs-6 fw-bold'>Discord</span>
            <span className='text-muted fw-semibold'>Link, Join</span>
          </div>
        </div>
        {/* end::Discord */}
        {/* begin::NFT */}
        <div
          onClick={() => {
            setBasketItems([
              ...basketItems,
              {
                id: 'e6',
                sns: 'NFT',
                options: ['Hold'],
              },
            ])
          }}
          className='d-flex align-items-center mb-4 cursor-pointer px-4 py-2 bg-hover-light-info rounded'
        >
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-info'>
              <KTSVG path='/media/svg/social-logos/nft.svg' className='svg-icon-2x svg-icon-info' />
            </span>
          </div>
          <div className='d-flex flex-column'>
            <span className='text-dark text-hover-info fs-6 fw-bold'>NFT</span>
            <span className='text-muted fw-semibold'>Hold</span>
          </div>
        </div>
        {/* end::NFT */}
        {/* begin::ETC */}
        <div
          onClick={() => {
            setBasketItems([
              ...basketItems,
              {
                id: 'e7',
                sns: 'ETC',
                options: ['Link'],
              },
            ])
          }}
          className='d-flex align-items-center mb-4 cursor-pointer px-4 py-2 bg-hover-light-info rounded'
        >
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-dark'>
              <KTSVG path='/media/svg/social-logos/etc.svg' className='svg-icon-2x svg-icon-dark' />
            </span>
          </div>
          <div className='d-flex flex-column'>
            <span className='text-dark text-hover-info fs-6 fw-bold'>ETC</span>
            <span className='text-muted fw-semibold'>Link</span>
          </div>
        </div>
        {/* end::ETC */}
      </div>
    </div>
  )
}

export {EventMenu}
