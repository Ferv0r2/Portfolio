import {FC, MouseEventHandler} from 'react'

/* Component */
import {KTSVG} from 'utils'

interface Props {
  deleteHandler: MouseEventHandler<HTMLButtonElement>
}

const DeleteCheckModal: FC<Props> = ({deleteHandler}) => {
  return (
    <>
      <div
        className='modal fade'
        id='deleteCheckModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex={-1}
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content bg-light-danger'>
            <div className='modal-header'>
              <div className='mx-auto text-center'>
                <KTSVG
                  path='/media/icons/warning.svg'
                  className='svg-icon svg-icon-5tx svg-icon-danger mb-5'
                />

                <div className='mt-2 text-center'>
                  <h5 className='fw-bolder fs-1 mb-5'>Are you sure?</h5>
                </div>
              </div>
            </div>

            <div className='modal-body'>
              <div className='fs-5 text-center mb-4'>
                Are you sure you want to delete it? <br></br> You <strong>cannot revert</strong>{' '}
                after deletion.
              </div>
            </div>
            <div className='modal-footer d-flex flex-center flex-wrap'>
              <button
                className='btn btn-outline btn-outline-danger btn-active-danger m-2'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
              <button
                onClick={deleteHandler}
                type='button'
                data-bs-dismiss='modal'
                className='btn btn-danger m-2'
              >
                Ok, I got it
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {DeleteCheckModal}
