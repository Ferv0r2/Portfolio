import { useRecoilState, useSetRecoilState } from "recoil";
import {
  basketState,
  eventInputState,
  inputState,
  resultState,
  SNSItem,
} from "stores";

export const useBasket = () => {
  const [isResult, setIsResult] = useRecoilState(resultState);
  const [eventInput, setEventInput] = useRecoilState(eventInputState);
  const [basketItems, setBasketItems] = useRecoilState(basketState);
  const setIsInput = useSetRecoilState(inputState);

  const onAddBasket = (data: SNSItem) => {
    const newItem = [...basketItems, data];
    setBasketItems(newItem);
  };

  const onReset = () => {
    setIsResult([]);
    setBasketItems([]);
    setIsInput(new Map());
  };

  return {
    isResult,
    eventInput,
    setEventInput,
    onAddBasket,
    onReset,
  };
};
