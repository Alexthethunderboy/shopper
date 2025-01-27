'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { Input } from '@/components/ui';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { type Product } from '@/types';
import { useProducts } from '@/hooks/use-products';

type SearchResult = Pick<Product, 'id' | 'name' | 'price' | 'image' | 'category' | 'slug'>;

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [debouncedQuery] = useDebounce(query, 300);
  const router = useRouter();

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      
      if (data.error) {
        console.error('Search error:', data.error);
        return;
      }
      
      setResults(data.products);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  const handleSelect = (productId: string) => {
    setOpen(false);
    router.push(`/products/${productId}`);
  };

  // Update search when debounced query changes
  useEffect(() => {
    handleSearch(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <>
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="w-full pl-9"
          placeholder="Search products..."
          onClick={() => setOpen(true)}
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search products..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Products">
            {results.map((product) => (
              <CommandItem
                key={product.id}
                onSelect={() => handleSelect(product.id)}
                className="flex items-center gap-4 p-2"
              >
                <div className="relative w-12 h-12 rounded overflow-hidden bg-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {product.category} · ${product.price}
                  </p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
} 