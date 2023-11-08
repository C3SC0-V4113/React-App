import styles from "../styles/styles.module.css";

import { useContext } from "react";

import { ProductContext } from "./ProductCard";

interface Props {
  className?: string;
  title?: string;
}

export const ProductTitle = ({ title, className }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
