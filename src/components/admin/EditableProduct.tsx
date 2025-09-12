import React from 'react';
import { Product } from '../../types';

interface EditableProductProps {
  product: Product;
  children: React.ReactNode;
}

const EditableProduct: React.FC<EditableProductProps> = ({ children }) => {
  // This component will eventually contain logic for inline editing of products
  // when admin mode is active. For now, it simply renders its children.
  return <>{children}</>;
};

export default EditableProduct;