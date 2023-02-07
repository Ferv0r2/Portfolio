import { useState } from "react";
import { useRecoilState } from "recoil";
import { inputState, resultState } from "stores";
import { setType } from "utils";

interface Props {
  id: string;
  sns: string;
  option: string;
  contract: string;
  chain_id: number;
  index: number;
}

export const useInput = ({
  id,
  sns,
  option,
  contract,
  chain_id,
  index,
}: Props) => {
  const [isResult, setResult] = useRecoilState(resultState);
  const [isInput, setIsInput] = useRecoilState(inputState);
  const [isConfirm, setIsConfirm] = useState(
    isInput?.get(index)?.isConfirm || false
  );
  const [inputs, setInputs] = useState({
    id: id,
    title: sns,
    content: isInput?.get(index)?.content || "",
    type: setType(sns, option),
    metadata: {
      url: isInput?.get(index)?.metadata.url || "",
      count: isInput?.get(index)?.metadata.count || 0,
      contract: contract,
      chain_id: chain_id,
    },
    point: isInput?.get(index)?.count || 1,
  });

  const { content, metadata, point } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;

    setIsInput(
      isInput.set(index, {
        ...inputs,
        [name]: value,
      })
    );
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onChangeLink = (e: any) => {
    const { name, value } = e.target;

    setIsInput(
      isInput.set(index, {
        ...inputs,
        [name]: {
          url: value,
        },
      })
    );
    setInputs({
      ...inputs,
      [name]: {
        url: value,
      },
    });
  };

  const onChangeCount = (e: any) => {
    const { name, value } = e.target;

    setIsInput(
      isInput.set(index, {
        ...inputs,
        [name]: {
          count: value,
          contract: contract,
          chain_id: chain_id,
        },
      })
    );
    setInputs({
      ...inputs,
      [name]: {
        count: value,
        contract: contract,
        chain_id: chain_id,
      },
    });
  };

  const onConfirm = (e: any) => {
    setResult([...isResult, inputs]);
    setIsInput(
      isInput.set(index, {
        ...inputs,
        isConfirm: true,
      })
    );
    setIsConfirm(true);
  };

  const onEdit = () => {
    setResult(isResult.filter((isResult) => isResult.id !== id));
    setIsInput(
      isInput.set(index, {
        ...inputs,
        isConfirm: false,
      })
    );
    setIsConfirm(false);
  };

  return {
    content,
    metadata,
    point,
    isConfirm,
    onChange,
    onChangeCount,
    onChangeLink,
    onConfirm,
    onEdit,
  };
};
