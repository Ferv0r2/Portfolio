import {FC} from 'react'

const SNSTable: FC = () => {
  return (
    <>
      <table className='table table-striped gy-7 gs-7'>
        <thead>
          <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
            <th className='min-w-400px'>Address</th>
            <th className='min-w-200px'>Discord</th>
            <th className='min-w-100px'>Twitter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0x33365F518A0F333365b7FF53BEAbf1F5b1247b5C</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
          </tr>
          <tr>
            <td>0x33365F518A0F333365b7FF53BEAbf1F5b1247b5C</td>
            <td>Accountant</td>
            <td>Tokyo</td>
          </tr>
          <tr>
            <td>0x33365F518A0F333365b7FF53BEAbf1F5b1247b5C</td>
            <td>Accountant</td>
            <td>Tokyo</td>
          </tr>
          <tr>
            <td>0x33365F518A0F333365b7FF53BEAbf1F5b1247b5C</td>
            <td>Accountant</td>
            <td>Tokyo</td>
          </tr>
          <tr>
            <td>0x33365F518A0F333365b7FF53BEAbf1F5b1247b5C</td>
            <td>Accountant</td>
            <td>Tokyo</td>
          </tr>
        </tbody>
      </table>
      <ul className='pagination py-4'>
        <li className='page-item previous disabled'>
          <a href='/' className='page-link'>
            <i className='previous'></i>
          </a>
        </li>
        <li className='page-item active'>
          <a href='/' className='page-link'>
            1
          </a>
        </li>
        <li className='page-item'>
          <a href='/' className='page-link'>
            2
          </a>
        </li>
        <li className='page-item next disabled'>
          <a href='/' className='page-link'>
            <i className='next'></i>
          </a>
        </li>
      </ul>
    </>
  )
}

export {SNSTable}
