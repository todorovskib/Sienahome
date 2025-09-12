import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../types';

export interface FavoriteItem {
  product: Product;
  dateAdded: Date;
}

interface FavoritesState {
  items: FavoriteItem[];
  itemCount: number;
}

type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: Product }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'CLEAR_FAVORITES' };

const FavoritesContext = createContext<{
  state: FavoritesState;
  dispatch: React.Dispatch<FavoritesAction>;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  clearFavorites: () => void;
  isFavorite: (productId: string) => boolean;
} | null>(null);

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const existingItem = state.items.find(
        item => item.product.id === action.payload.id
      );

      if (existingItem) {
        return state; // Already in favorites
      }

      const newItems = [...state.items, { product: action.payload, dateAdded: new Date() }];
      return { items: newItems, itemCount: newItems.length };
    }

    case 'REMOVE_FAVORITE': {
      const newItems = state.items.filter(
        item => item.product.id !== action.payload
      );
      return { items: newItems, itemCount: newItems.length };
    }

    case 'CLEAR_FAVORITES':
      return { items: [], itemCount: 0 };

    default:
      return state;
  }
};

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, {
    items: [],
    itemCount: 0,
  });

  const addToFavorites = (product: Product) => {
    dispatch({ type: 'ADD_FAVORITE', payload: product });
  };

  const removeFromFavorites = (productId: string) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: productId });
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  const isFavorite = (productId: string) => {
    return state.items.some(item => item.product.id === productId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        state,
        dispatch,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};