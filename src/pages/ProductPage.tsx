import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductDetails from '../components/product/ProductDetails';
import RelatedProducts from '../components/product/RelatedProducts';
import { useAdmin } from '../contexts/AdminContext';
import Container from '../components/ui/Container';

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const { t } = useTranslation();
  const { state: adminState } = useAdmin();
  
  const products = adminState.products;
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return <Navigate to="/" replace />;
  }

  const productWithDefaults = {
    ...product,
    specifications: product.specifications || {
      material: 'N/A',
      finish: 'N/A',
      handleType: 'N/A',
      hingeType: 'N/A',
      mountingType: 'N/A'
    }
  };

  return (
    <div className="pt-20">
      <Container>
        <nav className="py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-teal-600">
                {t('nav.home')}
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <a href="/#products" className="text-gray-500 hover:text-teal-600">
                {t('nav.products')}
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-teal-600">{product.name}</li>
          </ol>
        </nav>
        
        <ProductDetails product={productWithDefaults} />
        <RelatedProducts currentProductId={product.id} />
      </Container>
    </div>
  );
};

export default ProductPage;