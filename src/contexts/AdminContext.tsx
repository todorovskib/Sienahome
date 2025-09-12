import React, { createContext, useContext, useState, ReactNode } from 'react';
import { initialProducts } from '../data/products';
import { Product } from '../types';

interface AdminState {
  isAuthenticated: boolean;
  editMode: boolean;
  products: Product[];
}

interface AdminContextType {
  state: AdminState;
  editMode: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  toggleEditMode: () => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  removeProduct: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

interface AdminProviderProps {
  children: ReactNode;
  isAdmin: boolean;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children, isAdmin }) => {
  // Force initial state to be logged out
  const [state, setState] = useState<AdminState>({
    isAuthenticated: false,
    editMode: false,
    products: initialProducts
  });

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simple admin login check
    if (username === 'admin' && password === 'siena2024') {
      setState(prev => ({
        ...prev,
        isAuthenticated: true
      }));
      return true;
    }
    return false;
  };

  const logout = () => {
    // Force complete logout
    setState({
      isAuthenticated: false,
      editMode: false,
      products: initialProducts
    });
  };

  const toggleEditMode = () => {
    if (!state.isAuthenticated) return;
    
    setState(prev => ({
      ...prev,
      editMode: !prev.editMode
    }));
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setState(prev => ({
      ...prev,
      products: prev.products.map(product =>
        product.id === id ? { ...product, ...updates } : product
      )
    }));
  };

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      slug: productData.name.toLowerCase().replace(/\s+/g, '-'),
      main_image_url: productData.imageUrl,
      additional_images: productData.additionalImages || [],
      in_stock: productData.inStock,
      is_published: true,
      sort_order: state.products.length + 1,
      created_by: null,
      updated_by: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    setState(prev => ({
      ...prev,
      products: [...prev.products, newProduct]
    }));
  };

  const removeProduct = (id: string) => {
    setState(prev => ({
      ...prev,
      products: prev.products.filter(product => product.id !== id)
    }));
  };

  return (
    <AdminContext.Provider
      value={{
        state,
        editMode: state.editMode,
        login,
        logout,
        toggleEditMode,
        updateProduct,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};