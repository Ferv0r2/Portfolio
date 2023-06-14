import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";

type UseInputHook<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  (event: ChangeEvent<HTMLInputElement>) => void
];

export default function useInput<T>(initialValue: T): UseInputHook<T> {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value as unknown as T;

    if (!/^[0-9]+$/.test(String(input)) && input !== "") {
      alert("숫자만 입력해 주세요");
      return;
    }

    if (Number(input) < 0 || Number(input) > 30) {
      alert("예제 NFT로 번호는 0 ~ 30 까지 있습니다");
      return;
    }

    setValue(input);
  }, []);

  return [value, setValue, handleChange];
}
