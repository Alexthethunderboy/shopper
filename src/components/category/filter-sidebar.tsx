'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import Button from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { FilterState } from '@/lib/types/product';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableFilters: {
    sizes: string[];
    colors: string[];
    tags: string[];
    priceRange: [number, number];
  };
}

// Add color mapping
const colorMap: Record<string, string> = {
  Black: 'bg-black',
  White: 'bg-white border border-gray-200',
  Blue: 'bg-blue-500',
  Red: 'bg-red-500',
  Green: 'bg-green-500',
  Yellow: 'bg-yellow-400',
  Purple: 'bg-purple-500',
  Pink: 'bg-pink-500',
};

export function FilterSidebar({
  filters,
  onFilterChange,
  availableFilters,
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState(filters);

  const activeFiltersCount = 
    (filters.sizes?.length || 0) + 
    (filters.colors?.length || 0) + 
    (filters.tags?.length || 0);

  function handleFilterChange(newFilters: Partial<FilterState>) {
    const updated = { ...localFilters, ...newFilters };
    setLocalFilters(updated);
  }

  function handleApplyFilters() {
    onFilterChange(localFilters);
    setIsOpen(false);
  }

  function handleClearFilters() {
    const cleared = {
      priceRange: availableFilters.priceRange,
      sizes: [],
      colors: [],
      tags: [],
    };
    setLocalFilters(cleared);
    onFilterChange(cleared);
  }

  return (
    <>
      {/* Mobile Filter Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="lg:hidden relative">
            <Filter className="mr-2 h-4 w-4" />
            Filter
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:max-w-lg">
          <SheetHeader>
            <div className="flex items-center justify-between">
              <SheetTitle>Filters</SheetTitle>
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                >
                  Clear All
                </Button>
              )}
            </div>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
            <div className="space-y-6 py-4">
              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider
                  defaultValue={localFilters.priceRange}
                  min={availableFilters.priceRange[0]}
                  max={availableFilters.priceRange[1]}
                  step={10}
                  onValueChange={(value) =>
                    handleFilterChange({ priceRange: value as [number, number] })
                  }
                />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>${localFilters.priceRange?.[0]}</span>
                  <span>${localFilters.priceRange?.[1]}</span>
                </div>
              </div>

              <Separator />

              {/* Colors */}
              <div>
                <h3 className="font-medium mb-4">Colors</h3>
                <div className="grid grid-cols-4 gap-2">
                  {availableFilters.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        const colors = localFilters.colors?.includes(color)
                          ? localFilters.colors.filter((c) => c !== color)
                          : [...(localFilters.colors || []), color];
                        handleFilterChange({ colors });
                      }}
                      className={cn(
                        "flex flex-col items-center gap-1.5 p-2 rounded-md transition-colors",
                        localFilters.colors?.includes(color) && "bg-accent"
                      )}
                    >
                      <span
                        className={cn(
                          "w-6 h-6 rounded-full ring-2 ring-offset-2",
                          colorMap[color],
                          localFilters.colors?.includes(color) && "ring-primary"
                        )}
                      />
                      <span className="text-xs">{color}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Sizes */}
              <div>
                <h3 className="font-medium mb-4">Sizes</h3>
                <div className="grid grid-cols-4 gap-2">
                  {availableFilters.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        const sizes = localFilters.sizes?.includes(size)
                          ? localFilters.sizes.filter((s) => s !== size)
                          : [...(localFilters.sizes || []), size];
                        handleFilterChange({ sizes });
                      }}
                      className={cn(
                        "h-10 border rounded-md text-sm transition-colors hover:bg-accent",
                        localFilters.sizes?.includes(size)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-input"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Tags */}
              <div>
                <h3 className="font-medium mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {availableFilters.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={localFilters.tags?.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => {
                        const tags = localFilters.tags?.includes(tag)
                          ? localFilters.tags.filter((t) => t !== tag)
                          : [...(localFilters.tags || []), tag];
                        handleFilterChange({ tags });
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="flex gap-2 pt-4 border-t">
            <Button className="flex-1" onClick={handleApplyFilters}>
              Show Results
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Filter Panel */}
      <div className="hidden lg:block w-64 pr-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filters</h2>
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
              >
                Clear All
              </Button>
            )}
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-4">Price Range</h3>
            <Slider
              value={localFilters.priceRange}
              min={availableFilters.priceRange[0]}
              max={availableFilters.priceRange[1]}
              step={10}
              onValueChange={(value) =>
                handleFilterChange({ priceRange: value as [number, number] })
              }
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>${localFilters.priceRange?.[0]}</span>
              <span>${localFilters.priceRange?.[1]}</span>
            </div>
          </div>

          <Separator />

          {/* Colors */}
          <div>
            <h3 className="font-medium mb-4">Colors</h3>
            <div className="grid grid-cols-4 gap-2">
              {availableFilters.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    const colors = localFilters.colors?.includes(color)
                      ? localFilters.colors.filter((c) => c !== color)
                      : [...(localFilters.colors || []), color];
                    handleFilterChange({ colors });
                    onFilterChange({ ...localFilters, colors });
                  }}
                  className={cn(
                    "flex flex-col items-center gap-1.5 p-2 rounded-md transition-colors",
                    localFilters.colors?.includes(color) && "bg-accent"
                  )}
                >
                  <span
                    className={cn(
                      "w-6 h-6 rounded-full ring-2 ring-offset-2",
                      colorMap[color],
                      localFilters.colors?.includes(color) && "ring-primary"
                    )}
                  />
                  <span className="text-xs">{color}</span>
                </button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Sizes */}
          <div>
            <h3 className="font-medium mb-4">Sizes</h3>
            <div className="grid grid-cols-4 gap-2">
              {availableFilters.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    const sizes = localFilters.sizes?.includes(size)
                      ? localFilters.sizes.filter((s) => s !== size)
                      : [...(localFilters.sizes || []), size];
                    handleFilterChange({ sizes });
                    onFilterChange({ ...localFilters, sizes });
                  }}
                  className={cn(
                    "h-10 border rounded-md text-sm transition-colors hover:bg-accent",
                    localFilters.sizes?.includes(size)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-input"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Tags */}
          <div>
            <h3 className="font-medium mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {availableFilters.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={localFilters.tags?.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => {
                    const tags = localFilters.tags?.includes(tag)
                      ? localFilters.tags.filter((t) => t !== tag)
                      : [...(localFilters.tags || []), tag];
                    handleFilterChange({ tags });
                    onFilterChange({ ...localFilters, tags });
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 