import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, Product } from '../lib/supabase';
import { initialProducts } from '../data/products';

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  refreshProducts: () => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshProducts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await supabase
        .from('products')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });

      if (fetchError) {
        console.error('Error fetching products:', fetchError);
        setError(fetchError.message);
        // Keep using initial products as fallback
      } else if (data && data.length > 0) {
        setProducts(data);
      }
    } catch (err) {
      console.error('Error in refreshProducts:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      // Keep using initial products as fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Try to load from database, but don't block the UI
    refreshProducts();
  }, []);

  const value = {
    products,
    loading,
    error,
    refreshProducts,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};