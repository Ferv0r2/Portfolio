import {FC} from 'react'

interface Props {
  list: {
    address: string
    point: number
  }[]
  total_point: number
}

const UserTable: FC<Props> = ({list, total_point}) => {
  return (
    <>
      <table className='table table-striped gy-7 gx-7'>
        <thead>
          <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
            <th className='min-w-60px'>Rank</th>
            <th className='min-w-220px'>Address</th>
            <th className='min-w-100px text-center'>Point</th>
            <th className='min-w-100px text-center'>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {list?.length > 0 ? (
            list?.map((v, i) => (
              <tr key={v.address}>
                <td>{i + 1}</td>
                <td>{v.address}</td>
                <td className='text-center'>
                  {String(v.point).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                </td>
                <td className='text-center'>{((v.point / total_point) * 100).toFixed(2)}%</td>
              </tr>
            ))
          ) : (
            <>
              <td className='fs-4 fw-semibold'>Holder is Empty.</td>
              <td></td>
              <td></td>
              <td></td>
            </>
          )}
        </tbody>
      </table>
    </>
  )
}

export {UserTable}
