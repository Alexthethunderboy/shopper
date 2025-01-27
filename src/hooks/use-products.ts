'use client';

import { useState, useEffect } from 'react';
import { type Product } from '@/types';
import { products } from '@/data/products';

export function useProducts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    try {
      // For now, we're using mock data
      setData(products);
      setLoading(false);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error
  };
} 