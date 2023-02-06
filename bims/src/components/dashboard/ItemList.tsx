import {FC} from 'react'

/* Component */
import {KTSVG} from 'utils'

const ItemList: FC = () => {
  return (
    <div className='card card-xl-stretch'>
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold fs-3 text-dark'>Notifications</h3>
        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/menu-1.svg' className='svg-icon-2' />
          </button>
        </div>
      </div>
      <div className='card-body pt-3'>
        <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
          <span className='svg-icon svg-icon-warning me-5'>
            <KTSVG path='/media/icons/stack.svg' className='svg-icon-1' />
          </span>
          <div className='flex-grow-1 me-2'>
            <a href='/' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              License will expire soon
            </a>
            <span className='text-muted fw-semibold d-block'>Due in 2 Days</span>
          </div>
        </div>
        <div className='d-flex align-items-center bg-light-success rounded p-5 mb-7'>
          <span className='svg-icon svg-icon-success me-5'>
            <KTSVG path='/media/icons/stack.svg' className='svg-icon-1' />
          </span>
          <div className='flex-grow-1 me-2'>
            <a href='/' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              OOO Event will be end
            </a>
            <span className='text-muted fw-semibold d-block'>Due in 2 Days</span>
          </div>
        </div>
        <div className='d-flex align-items-center bg-light-danger rounded p-5 mb-7'>
          <span className='svg-icon svg-icon-danger me-5'>
            <KTSVG path='/media/icons/stack.svg' className='svg-icon-1' />
          </span>
          <div className='flex-grow-1 me-2'>
            <a href='/' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              "Klay Weasel" Holders uptrend
            </a>
            <span className='text-muted fw-semibold d-block'>Due in 5 Days</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ItemList}
