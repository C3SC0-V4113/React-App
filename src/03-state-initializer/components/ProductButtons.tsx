import styles from "../styles/styles.module.css";

import { CSSProperties, useContext, useMemo } from "react";

import { ProductContext } from "./ProductCard";

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  // TODO: isMaxReached=useCallback, dependencias [counter,maxCount]
  // TRUE si counter===maxCount
  // FALSE caso contrario

  const isMaxReached = useMemo(() => {
    if (counter === maxCount) {
      return true;
    }
    return false;
  }, [counter, maxCount]);

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxReached ? styles.disabled : false
        }`}
        disabled={isMaxReached}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};

export default ProductButtons;
