import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  LogOut, 
  Package,
  DollarSign,
  Eye,
  EyeOff,
  Upload,
  Image as ImageIcon
} from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';
import { Product, Color, Dimensions } from '../types';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

const AdminDashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const { state, logout, updateProduct, addProduct, removeProduct } = useAdmin();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'mk';

  // New product template
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    category: 'Vanities',
    price: 0,
    description: '',
    features: [''],
    colors: [{ name: 'White', value: '#ffffff' }],
    dimensions: { width: 0, height: 0, depth: 0, weight: 0 },
    imageUrl: '',
    additionalImages: [],
    inStock: true,
    specifications: {
      material: 'Waterproof PVC',
      finish: 'Matte',
      handleType: 'Push-to-open',
      hingeType: 'Soft-close',
      mountingType: 'Wall-mounted'
    }
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate(`/${currentLang}/admin/login`);
    }
  }, [state.isAuthenticated, navigate, currentLang]);

  const filteredProducts = state.products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    logout();
    navigate(`/${currentLang}`);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct({ ...product });
    setShowAddForm(false);
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      updateProduct(editingProduct.id, editingProduct);
      setEditingProduct(null);
    }
  };

  const handleAddNewProduct = () => {
    if (newProduct.name.trim() === '') {
      alert(t('admin.dashboard.validation.nameRequired'));
      return;
    }
    addProduct(newProduct);
    setNewProduct({
      name: '',
      category: 'Vanities',
      price: 0,
      description: '',
      features: [''],
      colors: [{ name: 'White', value: '#ffffff' }],
      dimensions: { width: 0, height: 0, depth: 0, weight: 0 },
      imageUrl: '',
      additionalImages: [],
      inStock: true,
      specifications: {
        material: 'Waterproof PVC',
        finish: 'Matte',
        handleType: 'Push-to-open',
        hingeType: 'Soft-close',
        mountingType: 'Wall-mounted'
      }
    });
    setShowAddForm(false);
  };

  const addFeature = (isEdit = false) => {
    if (isEdit && editingProduct) {
      setEditingProduct({
        ...editingProduct,
        features: [...editingProduct.features, '']
      });
    } else {
      setNewProduct({
        ...newProduct,
        features: [...newProduct.features, '']
      });
    }
  };

  const removeFeature = (index: number, isEdit = false) => {
    event?.preventDefault();
    if (isEdit && editingProduct) {
      setEditingProduct({
        ...editingProduct,
        features: editingProduct.features.filter((_, i) => i !== index)
      });
    } else {
      setNewProduct({
        ...newProduct,
        features: newProduct.features.filter((_, i) => i !== index)
      });
    }
  };

  const updateFeature = (index: number, value: string, isEdit = false) => {
    if (isEdit && editingProduct) {
      const newFeatures = [...editingProduct.features];
      newFeatures[index] = value;
      setEditingProduct({
        ...editingProduct,
        features: newFeatures
      });
    } else {
      const newFeatures = [...newProduct.features];
      newFeatures[index] = value;
      setNewProduct({
        ...newProduct,
        features: newFeatures
      });
    }
  };

  const addColor = (isEdit = false) => {
    event?.preventDefault();
    if (isEdit && editingProduct) {
      setEditingProduct({
        ...editingProduct,
        colors: [...editingProduct.colors, { name: '', value: '#ffffff' }]
      });
    } else {
      setNewProduct({
        ...newProduct,
        colors: [...newProduct.colors, { name: '', value: '#ffffff' }]
      });
    }
  };

  const removeColor = (index: number, isEdit = false) => {
    event?.preventDefault();
    if (isEdit && editingProduct) {
      setEditingProduct({
        ...editingProduct,
        colors: editingProduct.colors.filter((_, i) => i !== index)
      });
    } else {
      setNewProduct({
        ...newProduct,
        colors: newProduct.colors.filter((_, i) => i !== index)
      });
    }
  };

  const updateColor = (index: number, field: 'name' | 'value', value: string, isEdit = false) => {
    if (isEdit && editingProduct) {
      const newColors = [...editingProduct.colors];
      newColors[index] = { ...newColors[index], [field]: value };
      setEditingProduct({
        ...editingProduct,
        colors: newColors
      });
    } else {
      const newColors = [...newProduct.colors];
      newColors[index] = { ...newColors[index], [field]: value };
      setNewProduct({
        ...newProduct,
        colors: newColors
      });
    }
  };

  const addAdditionalImage = (isEdit = false) => {
    event?.preventDefault();
    if (isEdit && editingProduct) {
      setEditingProduct({
        ...editingProduct,
        additionalImages: [...editingProduct.additionalImages, '']
      });
    } else {
      setNewProduct({
        ...newProduct,
        additionalImages: [...newProduct.additionalImages, '']
      });
    }
  };

  const removeAdditionalImage = (index: number, isEdit = false) => {
    event?.preventDefault();
    if (isEdit && editingProduct) {
      setEditingProduct({
        ...editingProduct,
        additionalImages: editingProduct.additionalImages.filter((_, i) => i !== index)
      });
    } else {
      setNewProduct({
        ...newProduct,
        additionalImages: newProduct.additionalImages.filter((_, i) => i !== index)
      });
    }
  };

  const updateAdditionalImage = (index: number, value: string, isEdit = false) => {
    if (isEdit && editingProduct) {
      const newImages = [...editingProduct.additionalImages];
      newImages[index] = value;
      setEditingProduct({
        ...editingProduct,
        additionalImages: newImages
      });
    } else {
      const newImages = [...newProduct.additionalImages];
      newImages[index] = value;
      setNewProduct({
        ...newProduct,
        additionalImages: newImages
      });
    }
  };

  const ProductForm: React.FC<{ 
    product: any; 
    onSave: () => void; 
    onCancel: () => void; 
    isEdit: boolean;
    onChange: (updates: any) => void;
  }> = ({ product, onSave, onCancel, isEdit, onChange }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg border-2 border-siena-200 mb-6 max-h-[80vh] overflow-y-auto"
    >
      <h3 className="text-lg font-semibold mb-4 text-siena-800">
        {isEdit ? t('admin.dashboard.editProduct') : t('admin.dashboard.addProduct')}
      </h3>
      
      <form onSubmit={(e) => { e.preventDefault(); onSave(); }} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('admin.dashboard.form.name')} *
            </label>
            <input
              type="text"
              value={product.name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
              placeholder={t('admin.dashboard.form.namePlaceholder')}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('admin.dashboard.form.category')}
            </label>
            <select
              value={product.category}
              onChange={(e) => onChange({ category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
            >
              <option value="Vanities">{t('products.categories.vanities')}</option>
              <option value="Storage">{t('products.categories.storage')}</option>
              <option value="Mirrors">{t('products.categories.mirrors')}</option>
              <option value="Accessories">{t('products.categories.accessories')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('admin.dashboard.form.price')} ($) *
            </label>
            <input
              type="number"
              value={product.price}
              onChange={(e) => {
                e.stopPropagation();
                onChange({ price: Number(e.target.value) });
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('admin.dashboard.form.inStock')}
            </label>
            <select
              value={product.inStock.toString()}
              onChange={(e) => onChange({ inStock: e.target.value === 'true' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
            >
              <option value="true">{t('admin.dashboard.form.yes')}</option>
              <option value="false">{t('admin.dashboard.form.no')}</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('admin.dashboard.form.description')}
          </label>
          <textarea
            value={product.description}
            onChange={(e) => onChange({ description: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
            placeholder={t('admin.dashboard.form.descriptionPlaceholder')}
          />
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('admin.dashboard.form.mainImage')} *
          </label>
          <input
            type="url"
            value={product.imageUrl}
            onChange={(e) => onChange({ imageUrl: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        {/* Additional Images */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              {t('admin.dashboard.form.additionalImages')}
            </label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addAdditionalImage(isEdit)}
              className="text-xs"
            >
              <Plus className="h-3 w-3 mr-1" />
              {t('admin.dashboard.form.addImage')}
            </Button>
          </div>
          {product.additionalImages.map((image: string, index: number) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="url"
                value={image}
                onChange={(e) => updateAdditionalImage(index, e.target.value, isEdit)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
                placeholder={`${t('admin.dashboard.form.imageUrl')} ${index + 1}`}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeAdditionalImage(index, isEdit)}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Features */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              {t('admin.dashboard.form.features')}
            </label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addFeature(isEdit)}
              className="text-xs"
            >
              <Plus className="h-3 w-3 mr-1" />
              {t('admin.dashboard.form.addFeature')}
            </Button>
          </div>
          {product.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => updateFeature(index, e.target.value, isEdit)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
                placeholder={`${t('admin.dashboard.form.feature')} ${index + 1}`}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeFeature(index, isEdit)}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Colors */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              {t('admin.dashboard.form.colors')}
            </label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addColor(isEdit)}
              className="text-xs"
            >
              <Plus className="h-3 w-3 mr-1" />
              {t('admin.dashboard.form.addColor')}
            </Button>
          </div>
          {product.colors.map((color: Color, index: number) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={color.name}
                onChange={(e) => updateColor(index, 'name', e.target.value, isEdit)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
                placeholder={t('admin.dashboard.form.colorName')}
              />
              <input
                type="color"
                value={color.value}
                onChange={(e) => updateColor(index, 'value', e.target.value, isEdit)}
                className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeColor(index, isEdit)}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Dimensions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('admin.dashboard.form.dimensions')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                {t('products.dimensions.width')} (cm)
              </label>
              <input
                type="number"
                value={product.dimensions.width}
                onChange={(e) => {
                  e.stopPropagation();
                  onChange({ 
                    dimensions: { ...product.dimensions, width: Number(e.target.value) }
                  });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
                min="0"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                {t('products.dimensions.height')} (cm)
              </label>
              <input
                type="number"
                value={product.dimensions.height}
                onChange={(e) => {
                  e.stopPropagation();
                  onChange({ 
                    dimensions: { ...product.dimensions, height: Number(e.target.value) }
                  });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
                min="0"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                {t('products.dimensions.depth')} (cm)
              </label>
              <input
                type="number"
                value={product.dimensions.depth}
                onChange={(e) => {
                  e.stopPropagation();
                  onChange({ 
                    dimensions: { ...product.dimensions, depth: Number(e.target.value) }
                  });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
                min="0"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                {t('products.dimensions.weight')} (kg)
              </label>
              <input
                type="number"
                value={product.dimensions.weight}
                onChange={(e) => {
                  e.stopPropagation();
                  onChange({ 
                    dimensions: { ...product.dimensions, weight: Number(e.target.value) }
                  });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
                min="0"
                step="0.1"
              />
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('admin.dashboard.form.specifications')}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                {t('products.specs.material')}
              </label>
              <input
                type="text"
                value={product.specifications.material}
                onChange={(e) => onChange({ 
                  specifications: { ...product.specifications, material: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                {t('products.specs.finish')}
              </label>
              <input
                type="text"
                value={product.specifications.finish}
                onChange={(e) => onChange({ 
                  specifications: { ...product.specifications, finish: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                {t('products.specs.handleType')}
              </label>
              <input
                type="text"
                value={product.specifications.handleType}
                onChange={(e) => onChange({ 
                  specifications: { ...product.specifications, handleType: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                {t('products.specs.hingeType')}
              </label>
              <input
                type="text"
                value={product.specifications.hingeType}
                onChange={(e) => onChange({ 
                  specifications: { ...product.specifications, hingeType: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-gray-600 mb-1">
                {t('products.specs.mountingType')}
              </label>
              <input
                type="text"
                value={product.specifications.mountingType}
                onChange={(e) => onChange({ 
                  specifications: { ...product.specifications, mountingType: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
              />
            </div>
          </div>
        </div>
      
      <div className="flex space-x-3 mt-6 pt-4 border-t">
        <Button variant="primary" onClick={onSave}>
          <Save className="h-4 w-4 mr-2" />
          {t('admin.dashboard.form.save')}
        </Button>
        <Button variant="outline" onClick={onCancel}>
          <X className="h-4 w-4 mr-2" />
          {t('admin.dashboard.form.cancel')}
        </Button>
      </div>
      </form>
    </motion.div>
  );

  if (!state.isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {t('admin.dashboard.title')}
              </h1>
              <p className="text-gray-600">{t('admin.dashboard.subtitle')}</p>
            </div>
            <Button variant="outline" onClick={handleLogout} className="text-red-600 border-red-600 hover:bg-red-50">
              <LogOut className="h-4 w-4 mr-2" />
              {t('account.logout')}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-siena-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">{t('admin.dashboard.stats.totalProducts')}</p>
                <p className="text-2xl font-bold text-gray-900">{state.products.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">{t('admin.dashboard.stats.inStock')}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {state.products.filter(p => p.inStock).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <EyeOff className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">{t('admin.dashboard.stats.outOfStock')}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {state.products.filter(p => !p.inStock).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full sm:max-w-md">
              <input
                type="text"
                placeholder={t('admin.dashboard.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-siena-500"
              />
            </div>
            <Button variant="primary" onClick={() => setShowAddForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              {t('admin.dashboard.addProduct')}
            </Button>
          </div>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <ProductForm
            product={newProduct}
            onSave={handleAddNewProduct}
            onCancel={() => setShowAddForm(false)}
            isEdit={false}
            onChange={(updates) => setNewProduct({ ...newProduct, ...updates })}
          />
        )}

        {/* Edit Form */}
        {editingProduct && (
          <ProductForm
            product={editingProduct}
            onSave={handleSaveProduct}
            onCancel={() => setEditingProduct(null)}
            isEdit={true}
            onChange={(updates) => setEditingProduct({ ...editingProduct, ...updates })}
          />
        )}

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {t('admin.dashboard.productsTable')} ({filteredProducts.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('admin.dashboard.table.product')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('admin.dashboard.table.category')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('admin.dashboard.table.price')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('admin.dashboard.table.stock')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('admin.dashboard.table.actions')}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-10 w-10 rounded-lg object-cover mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">ID: {product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-siena-100 text-siena-800 rounded-full">
                        {t(`products.categories.${product.category.toLowerCase()}`)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm font-medium text-gray-900">{product.price}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock ? t('admin.dashboard.inStock') : t('admin.dashboard.outOfStock')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="text-siena-600 hover:text-siena-900 p-1 rounded hover:bg-siena-100"
                          title={t('admin.dashboard.editProduct')}
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeProduct(product.id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-100"
                          title={t('admin.dashboard.deleteProduct')}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminDashboardPage;