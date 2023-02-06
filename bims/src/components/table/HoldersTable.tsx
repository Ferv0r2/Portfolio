import {FC, MouseEventHandler} from 'react'
import {v1} from 'uuid'

interface Props {
  list: {
    address: string
    balance: number
  }[]
  section: number
  lastSection: number
  page: number
  lastPage: number
  totalSupply: number
  prevHandler: MouseEventHandler<HTMLButtonElement>
  nextHandler: MouseEventHandler<HTMLButtonElement>
  selectHandler: any
}

const HoldersTable: FC<Props> = ({
  list,
  section,
  page,
  lastSection,
  lastPage,
  totalSupply,
  prevHandler,
  nextHandler,
  selectHandler,
}) => {
  return (
    <>
      <table className='table table-striped gy-7 gx-7'>
        <thead>
          <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
            <th className='min-w-125px'>Rank</th>
            <th className='min-w-350px'>Address</th>
            <th className='min-w-200px text-center'>Amount</th>
            <th className='min-w-200px text-center'>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {list?.length > 0 ? (
            list?.slice(page * 15, (page + 1) * 15).map((v, i) => (
              <tr key={v.address}>
                <td>{section * 75 + page * 15 + i + 1}</td>
                <td>{v.address}</td>
                <td className='text-center'>
                  {String(v.balance).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                </td>
                <td className='text-center'>{((v.balance / totalSupply) * 100).toFixed(2)}%</td>
              </tr>
            ))
          ) : (
            <td>Holder is Empty.</td>
          )}
        </tbody>
      </table>
      <ul className='pagination py-4'>
        <li className='page-item previous'>
          <button type='button' onClick={prevHandler} className='page-link'>
            <i className='previous' />
          </button>
        </li>
        {[...Array(section === lastSection ? lastPage + 1 : 5)].map((n, index) => (
          <li key={v1()} className={`page-item ${index === page && 'active'}`}>
            <button
              type='button'
              onClick={(e) => selectHandler(section * 5 + index, e)}
              className='page-link'
            >
              {section * 5 + index + 1}
            </button>
          </li>
        ))}
        <li className='page-item next'>
          <button type='button' onClick={nextHandler} className='page-link'>
            <i className='next' />
          </button>
        </li>
      </ul>
    </>
  )
}

export {HoldersTable}
