import {FC, useEffect, useState} from 'react'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import CopyToClipboard from 'react-copy-to-clipboard'
import {useParams} from 'react-router-dom'

/* API*/
import {useQuery} from 'react-query'
import {EventStatusAPI, NFTDetailAPI, UserEventDetailAPI} from 'api'

/* Components */
import {EventUser} from 'components/item/EventUser'
import {UserTable} from 'components/table/UserTable'
import {KTSVG} from 'utils'
import {Empty} from 'components/empty/Empty'

const BASE_URL = 'https://bims.metaoneer.club/user/'
const EventDetailPage: FC = () => {
  const params = useParams()
  const {isLoading, data} = useQuery(['UserEvent'], async () => {
    const res = await UserEventDetailAPI(Number(params.eid))
    const nft = await NFTDetailAPI(res.project_id)
    return {
      ...res,
      name: nft.name,
      contract: nft.contract,
      thumbnail: nft.thumbnail,
    }
  })
  const [userArray, setUserArray] = useState([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const getData = async () => {
        const res = await EventStatusAPI({
          pid: data.project_id,
          eid: data.id,
        })
        const tmp = res.sort((a: any, b: any) => b.point - a.point)
        setUserArray(tmp)
      }
      getData()
    }
  }, [data, isLoading])

  useEffect(() => {
    if (!copied) {
      return
    }

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }, [copied])

  return (
    <div className='row py-4 gy-10'>
      <div className='col-lg-6 col-11 mx-lg-0 mx-auto'>
        <div className='card card-custom shadow bg-semiwhite'>
          <div className='card-header'>
            <h3 className='card-title'>
              <span>Event Participants</span>
            </h3>
          </div>
          <div className='card-body p-0'>
            <div className='table-responsive rounded shadow bg-semiwhite h-600px overflow-auto'>
              <UserTable list={userArray} total_point={data?.total_point} />
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-5 col-11 mx-auto'>
        {isLoading ? <Empty>Loading...</Empty> : <EventUser isLoading={isLoading} event={data} />}
        <div className='card mt-8'>
          <div className='card-body w-100'>
            <div className='ms-2 mb-3 fw-bold'>Event URL</div>
            <div className='d-flex justify-content-between align-items-center bg-gray-100 rounded p-4'>
              <div className='text-truncate me-1'>{BASE_URL + data?.id}</div>
              <OverlayTrigger
                key='copy-to-clipboard'
                placement='top'
                overlay={
                  <Tooltip id='tooltip-copy-to-clipboard'>
                    {!copied ? 'Copy URL' : 'Copied !'}
                  </Tooltip>
                }
              >
                <CopyToClipboard text={BASE_URL + data?.id} onCopy={() => setCopied(true)}>
                  <div className='btn btn-icon btn-active-light-primary'>
                    <KTSVG
                      path={`/media/icons/clipboard-${!copied ? 'solid' : 'fill'}.svg`}
                      className='svg-icon-2x'
                    />
                  </div>
                </CopyToClipboard>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetailPage
