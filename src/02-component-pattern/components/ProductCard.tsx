import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";
import { CSSProperties, createContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProducts();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
