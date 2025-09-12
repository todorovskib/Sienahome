import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { supabase, ContentBlock } from '../lib/supabase';

interface ContentContextType {
  getContent: (section: string, key: string, lang: string) => string;
  updateContent: (section: string, key: string, content: string, lang: string) => Promise<void>;
  loading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contentCache, setContentCache] = useState<Map<string, ContentBlock>>(new Map());
  const [loading, setLoading] = useState(true);

  const generateCacheKey = (section: string, key: string, lang: string) => `${section}-${key}-${lang}`;

  // Load all content blocks on initial mount
  useEffect(() => {
    const fetchAllContent = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('content_blocks')
          .select('*');

        if (error) {
          console.error('Error fetching content blocks:', error);
        } else {
          const newCache = new Map<string, ContentBlock>();
          data.forEach(block => {
            newCache.set(generateCacheKey(block.section, block.key, block.language), block);
          });
          setContentCache(newCache);
        }
      } catch (error) {
        console.error('Error in fetchAllContent:', error);
      }
      setLoading(false);
    };

    fetchAllContent();
  }, []);

  const getContent = useCallback((section: string, key: string, lang: string): string => {
    const cacheKey = generateCacheKey(section, key, lang);
    return contentCache.get(cacheKey)?.content || '';
  }, [contentCache]);

  const updateContent = useCallback(async (section: string, key: string, content: string, lang: string) => {
    const cacheKey = generateCacheKey(section, key, lang);
    const existingBlock = contentCache.get(cacheKey);

    if (existingBlock) {
      // Update existing block
      const { data, error } = await supabase
        .from('content_blocks')
        .update({ content, updated_at: new Date().toISOString() })
        .eq('id', existingBlock.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating content block:', error);
        throw error;
      }
      if (data) {
        setContentCache(prev => new Map(prev).set(cacheKey, data));
        window.dispatchEvent(new Event('siteContentUpdated'));
        window.dispatchEvent(new Event('contentUpdated'));
      }
    } else {
      // Insert new block
      const newBlock: Omit<ContentBlock, 'id' | 'created_at' | 'updated_at'> = {
        section,
        key,
        language: lang as 'mk' | 'en',
        content,
        content_type: 'text',
        is_published: true,
        created_by: null,
        updated_by: null
      };
      const { data, error } = await supabase
        .from('content_blocks')
        .insert(newBlock)
        .select()
        .single();

      if (error) {
        console.error('Error inserting content block:', error);
        throw error;
      }
      if (data) {
        setContentCache(prev => new Map(prev).set(cacheKey, data));
        window.dispatchEvent(new Event('siteContentUpdated'));
        window.dispatchEvent(new Event('contentUpdated'));
      }
    }
  }, [contentCache]);

  const value = {
    getContent,
    updateContent,
    loading,
  };

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};