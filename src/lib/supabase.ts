import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database types
export interface Profile {
  id: string
  user_id: string
  email: string
  full_name?: string
  role: 'admin' | 'user'
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface ContentBlock {
  id: string
  key: string
  section: string
  language: 'mk' | 'en'
  content: string
  content_type: 'text' | 'html' | 'markdown'
  is_published: boolean
  created_by?: string
  updated_by?: string
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  slug: string
  category: string
  price: number
  description?: string
  features: string[]
  colors: Array<{ name: string; value: string }>
  dimensions: {
    width: number
    height: number
    depth: number
    weight: number
  }
  specifications: {
    material: string
    finish: string
    handleType: string
    hingeType: string
    mountingType: string
  }
  main_image_url?: string
  additional_images: string[]
  in_stock: boolean
  is_published: boolean
  sort_order: number
  created_by?: string
  updated_by?: string
  created_at: string
  updated_at: string
}

export interface ProductImage {
  id: string
  product_id: string
  image_url: string
  alt_text?: string
  is_main: boolean
  sort_order: number
  created_at: string
}

export interface ContentVersion {
  id: string
  content_block_id: string
  content: string
  version_number: number
  created_by?: string
  created_at: string
}

// Helper functions
export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const getCurrentProfile = async () => {
  const user = await getCurrentUser()
  if (!user) return null

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  return profile
}

export const isAdmin = async () => {
  const profile = await getCurrentProfile()
  return profile?.role === 'admin'
}