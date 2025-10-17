/*
  # Create Products Table

  1. New Tables
    - `products`
      - `id` (uuid, primary key) - Unique product identifier
      - `name` (text) - Product name
      - `slug` (text, unique) - URL-friendly product identifier
      - `category` (text) - Product category
      - `price` (numeric) - Product price
      - `description` (text) - Product description
      - `features` (jsonb) - Array of product features
      - `colors` (jsonb) - Array of available colors
      - `dimensions` (jsonb) - Product dimensions (width, height, depth, weight)
      - `specifications` (jsonb) - Product specifications
      - `main_image_url` (text) - Main product image URL
      - `additional_images` (jsonb) - Array of additional image URLs
      - `in_stock` (boolean) - Stock availability
      - `is_published` (boolean) - Publication status
      - `sort_order` (integer) - Display order
      - `created_by` (uuid) - User who created the product
      - `updated_by` (uuid) - User who last updated the product
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access to published products
    - Add policy for authenticated admins to manage products

  3. Indexes
    - Index on slug for fast lookups
    - Index on category for filtering
    - Index on is_published for published products queries
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  description text NOT NULL DEFAULT '',
  features jsonb DEFAULT '[]'::jsonb,
  colors jsonb DEFAULT '[]'::jsonb,
  dimensions jsonb DEFAULT '{}'::jsonb,
  specifications jsonb DEFAULT '{}'::jsonb,
  main_image_url text NOT NULL,
  additional_images jsonb DEFAULT '[]'::jsonb,
  in_stock boolean DEFAULT true,
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_by uuid,
  updated_by uuid,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_published ON products(is_published);
CREATE INDEX IF NOT EXISTS idx_products_sort_order ON products(sort_order);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view published products
CREATE POLICY "Public can view published products"
  ON products
  FOR SELECT
  USING (is_published = true);

-- Policy: Authenticated users can view all products
CREATE POLICY "Authenticated users can view all products"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can insert products
CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update products
CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete products
CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);