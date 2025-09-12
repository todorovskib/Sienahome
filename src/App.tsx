import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthProvider, useAuth } from './contexts/SupabaseAuthContext';
import { AdminProvider } from './contexts/AdminContext';
import { ContentProvider } from './contexts/ContentContext';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AdminToolbar from './components/admin/AdminToolbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import WarrantyPage from './pages/WarrantyPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Component to handle language initialization
const LanguageInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  useEffect(() => {
    const currentLang = location.pathname.split('/')[1];
    if (currentLang && ['mk', 'en'].includes(currentLang) && currentLang !== i18n.language) {
      i18n.changeLanguage(currentLang);
    }
  }, [location.pathname, i18n]);
  
  return <>{children}</>;
};

// Component to wrap providers that need auth context
const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  return (
    <AdminProvider isAdmin={false}>
      <ContentProvider>
        <ProductProvider>
          <FavoritesProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </FavoritesProvider>
        </ProductProvider>
      </ContentProvider>
    </AdminProvider>
  );
};

function App() {
  const defaultLanguage = 'mk';

  // Redirect root to default language
  const RootRedirect = () => {
    return <Navigate to={`/${defaultLanguage}`} replace />;
  };

  return (
    <AuthProvider>
      <Router>
        <LanguageInitializer>
          <AppProviders>
            <div className="min-h-screen bg-white">
              <Header />
              <main>
                <Routes>
                  {/* Root redirect */}
                  <Route path="/" element={<RootRedirect />} />

                  {/* Language-specific routes */}
                  {['mk', 'en'].map((lang) => (
                    <React.Fragment key={lang}>
                      <Route path={`/${lang}`} element={<HomePage />} />
                      <Route path={`/${lang}/products`} element={<ProductsPage />} />
                      <Route path={`/${lang}/products/:productId`} element={<ProductPage />} />
                      <Route path={`/${lang}/about`} element={<AboutPage />} />
                      <Route path={`/${lang}/gallery`} element={<GalleryPage />} />
                      <Route path={`/${lang}/contact`} element={<ContactPage />} />
                      <Route path={`/${lang}/services`} element={<ServicesPage />} />
                      <Route path={`/${lang}/privacy-policy`} element={<PrivacyPolicyPage />} />
                      <Route path={`/${lang}/terms-of-service`} element={<TermsOfServicePage />} />
                      <Route path={`/${lang}/warranty`} element={<WarrantyPage />} />
                      
                      {/* Admin routes */}
                      <Route path={`/${lang}/admin/login`} element={<AdminLoginPage />} />
                      <Route path={`/${lang}/admin/dashboard`} element={<AdminDashboardPage />} />
                    </React.Fragment>
                  ))}

                  {/* Catch all redirect */}
                  <Route path="*" element={<Navigate to={`/${defaultLanguage}`} replace />} />
                </Routes>
              </main>
              <Footer />
              <AdminToolbar />
            </div>
          </AppProviders>
        </LanguageInitializer>
      </Router>
    </AuthProvider>
  );
}

export default App;