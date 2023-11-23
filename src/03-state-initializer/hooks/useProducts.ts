import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductsArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return;
    else isMounted.current = true;

    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue > initialValues.maxCount
        ? setCounter(initialValues.maxCount)
        : setCounter(newValue);

      return;
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  return {
    // properties}
    counter,
    // methods
    increaseBy,
  };
};
