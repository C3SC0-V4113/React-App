import styles from "../styles/styles.module.css";

import { useContext } from "react";

import { ProductContext } from "./ProductCard";

export interface ProductTitleProps {
  className?: string;
  title?: string;
}

export const ProductTitle = ({ title, className }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};

export default ProductTitle;
