import { useSetRecoilState } from "recoil";
import { inputState, resultState } from "stores";

export const useBasket = () => {
  const setResult = useSetRecoilState(resultState);
  const setIsInput = useSetRecoilState(inputState);

  const onReset = () => {
    setResult([]);
    setIsInput(new Map());
  };

  return {
    onReset,
  };
};
