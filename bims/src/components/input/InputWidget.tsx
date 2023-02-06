import {FC, useState} from 'react'

/* State */
import {useRecoilState} from 'recoil'
import {inputState, resultState} from 'stores'

interface Props {
  id: string
  sns: string
  option: string
  contract: string
  chain_id: number
  index: number
}

const InputWidget: FC<Props> = ({id, sns, option, contract, chain_id, index}) => {
  const [isResult, setResult] = useRecoilState(resultState)
  const [isInput, setIsInput] = useRecoilState(inputState)
  const [isConfirm, setIsConfirm] = useState(isInput?.get(index)?.isConfirm || false)
  const [inputs, setInputs] = useState({
    id: id,
    title: sns,
    content: isInput?.get(index)?.content || '',
    type: sns === 'ETC' ? 'link' : `${sns}.${option === 'Join' ? 'invite' : option}`,
    metadata: {
      url: isInput?.get(index)?.metadata.url || '',
      count: isInput?.get(index)?.metadata.count || 0,
      contract: contract,
      chain_id: chain_id,
    },
    point: isInput?.get(index)?.count || 1,
  })

  const {content, metadata, point} = inputs

  const onChange = (e: any) => {
    const {name, value} = e.target

    setIsInput(
      isInput.set(index, {
        ...inputs,
        [name]: value,
      })
    )
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onChangeLink = (e: any) => {
    const {name, value} = e.target

    setIsInput(
      isInput.set(index, {
        ...inputs,
        [name]: {
          url: value,
        },
      })
    )
    setInputs({
      ...inputs,
      [name]: {
        url: value,
      },
    })
  }

  const onChangeCount = (e: any) => {
    const {name, value} = e.target

    setIsInput(
      isInput.set(index, {
        ...inputs,
        [name]: {
          count: value,
          contract: contract,
          chain_id: chain_id,
        },
      })
    )
    setInputs({
      ...inputs,
      [name]: {
        count: value,
        contract: contract,
        chain_id: chain_id,
      },
    })
  }

  const confirmHandler = (e: any) => {
    setResult([...isResult, inputs])
    setIsInput(
      isInput.set(index, {
        ...inputs,
        isConfirm: true,
      })
    )
    setIsConfirm(true)
  }

  const editHandler = () => {
    setResult(isResult.filter((isResult) => isResult.id !== id))
    setIsInput(
      isInput.set(index, {
        ...inputs,
        isConfirm: false,
      })
    )
    setIsConfirm(false)
  }

  const exampleURL = () => {
    if (sns === 'Facebook') return 'https://facebook.com/klaytn.official'
    if (sns === 'Instagram') return 'https://instagram.com/p/Ca7SYYHpgLu/'
    if (sns === 'Twitter') return 'https://twitter.com/klaytn_official/status/1574900715381825539'
    if (sns === 'Youtube') return 'https://youtube.com/c/Klaytn_official'
    if (sns === 'Discord')
      return 'https://discord.com/channels/937571529087152189/952307109339463730'
    if (sns === 'ETC') return 'https://example.com'
  }

  return (
    <>
      <div className='pb-4'>
        <label className='form-label px-2'>Content</label>
        <textarea
          className='form-control'
          name='content'
          defaultValue={content}
          onChange={onChange}
          placeholder={`${option} on @metaoneer`}
        />
      </div>
      {option === 'Hold' ? (
        <div className='pb-4'>
          <label className='form-label px-2'>Count</label>
          <input
            type='number'
            className='form-control'
            name='metadata'
            defaultValue={metadata.count}
            onChange={onChangeCount}
            placeholder='5'
          />
        </div>
      ) : (
        <div className='pb-4'>
          <label className='form-label px-2'>Link</label>
          <input
            className='form-control'
            name='metadata'
            defaultValue={metadata.url}
            onChange={onChangeLink}
            placeholder={exampleURL()}
          />
        </div>
      )}
      <div className='d-flex justify-content-between'>
        <div>
          <label className='form-label px-2'>Point</label>
          <input
            type='number'
            className='w-150px form-control text-center'
            name='point'
            defaultValue={point}
            onChange={onChange}
            placeholder='0'
          />
        </div>
        {isConfirm ? (
          <button
            type='button'
            onClick={editHandler}
            className='mt-auto ml-auto btn btn-primary btn-active-light-primary'
          >
            Edit
          </button>
        ) : (
          <button
            type='button'
            onClick={confirmHandler}
            className='mt-auto ml-auto btn btn-primary'
            disabled={!content || !metadata || point <= 0}
          >
            Confirm
          </button>
        )}
      </div>
    </>
  )
}

export {InputWidget}
