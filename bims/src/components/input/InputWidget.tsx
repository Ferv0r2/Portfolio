import { FC } from "react";
import { useInput } from "hooks/useInput";
import { exampleURL } from "utils";

interface Props {
  id: string;
  sns: string;
  option: string;
  contract: string;
  chain_id: number;
  index: number;
}

export const InputWidget: FC<Props> = ({
  id,
  sns,
  option,
  contract,
  chain_id,
  index,
}) => {
  const {
    content,
    metadata,
    point,
    isConfirm,
    onChange,
    onChangeCount,
    onChangeLink,
    onConfirm,
    onEdit,
  } = useInput({ id, sns, option, contract, chain_id, index });
  return (
    <>
      <div className="pb-4">
        <label className="form-label px-2">Content</label>
        <textarea
          className="form-control"
          name="content"
          defaultValue={content}
          onChange={onChange}
          placeholder={`${option} on @metaoneer`}
        />
      </div>
      {option === "Hold" ? (
        <div className="pb-4">
          <label className="form-label px-2">Count</label>
          <input
            type="number"
            className="form-control"
            name="metadata"
            defaultValue={metadata.count}
            onChange={onChangeCount}
            placeholder="5"
          />
        </div>
      ) : (
        <div className="pb-4">
          <label className="form-label px-2">Link</label>
          <input
            className="form-control"
            name="metadata"
            defaultValue={metadata.url}
            onChange={onChangeLink}
            placeholder={exampleURL(sns)}
          />
        </div>
      )}
      <div className="d-flex justify-content-between">
        <div>
          <label className="form-label px-2">Point</label>
          <input
            type="number"
            className="w-150px form-control text-center"
            name="point"
            defaultValue={point}
            onChange={onChange}
            placeholder="0"
          />
        </div>
        {isConfirm ? (
          <button
            type="button"
            onClick={onEdit}
            className="mt-auto ml-auto btn btn-primary btn-active-light-primary"
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            onClick={onConfirm}
            className="mt-auto ml-auto btn btn-primary"
            disabled={!content || !metadata || point <= 0}
          >
            Confirm
          </button>
        )}
      </div>
    </>
  );
};
