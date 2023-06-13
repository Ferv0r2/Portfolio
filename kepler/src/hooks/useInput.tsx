import { useState, ChangeEvent } from "react";

type UseInputHook<T> = [T, (event: ChangeEvent<HTMLInputElement>) => void];

export default function useInput<T>(initialValue: T): UseInputHook<T> {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as unknown as T);
  };

  return [value, handleChange];
}
