import {FC, ChangeEventHandler, MouseEventHandler} from 'react'

interface Props {
  thumbnailValue: string
  homepageValue: string
  inputThumbnail: ChangeEventHandler<HTMLInputElement>
  inputHomepage: ChangeEventHandler<HTMLInputElement>
  editHandler: MouseEventHandler<HTMLButtonElement>
}

const Dropdown: FC<Props> = ({
  thumbnailValue,
  homepageValue,
  inputThumbnail,
  inputHomepage,
  editHandler,
}) => {
  return (
    <>
      <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
        <div className='px-7 py-5'>
          <div className='fs-5 text-dark fw-bolder'>Edit Contents</div>
        </div>

        <div className='separator border-gray-200'></div>

        <div className='px-7 py-5'>
          <div className='mb-10'>
            <label className='form-label fw-bold'>Thumnail URL:</label>

            <div>
              <input
                type='text'
                onChange={inputThumbnail}
                value={thumbnailValue}
                className='form-control'
                placeholder='https://...'
              />
            </div>
          </div>

          <div className='mb-10'>
            <label className='form-label fw-bold'>Homepage URL:</label>

            <div>
              <input
                type='text'
                onChange={inputHomepage}
                value={homepageValue}
                className='form-control'
                placeholder='https://...'
              />
            </div>
          </div>

          {/* <div className='mb-10'>
            <label className='form-label fw-bold'>Notifications:</label>

            <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                name='notifications'
                defaultChecked={true}
              />
              <label className='form-check-label'>Coming Soon</label>
            </div>
          </div> */}

          <div className='d-flex justify-content-end'>
            <button
              type='button'
              className='btn btn-sm btn-light-danger me-2'
              data-bs-toggle='modal'
              data-bs-target='#deleteCheckModal'
            >
              Delete
            </button>

            <button type='button' onClick={editHandler} className='btn btn-sm btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export {Dropdown}
