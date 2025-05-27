"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { categories, products } from "@/store/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

interface CategoryItem {
  id: string;
  label: string;
  count: number;
  checked?: boolean;
}

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Calculate counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((category) => {
      counts[category.id] = products.filter(
        (product) => product.category_id === category.id
      ).length;
    });
    return counts;
  }, []);

  // Get initial checked states from URL params
  const getInitialCheckedState = useCallback(
    (itemId: string) => {
      const paramValue = searchParams.get("categories");
      if (!paramValue) return false;
      return paramValue.split(",").includes(itemId);
    },
    [searchParams]
  );

  const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([]);
  const [expanded, setExpanded] = useState(true);

  // Initialize category items after component mounts
  useEffect(() => {
    setCategoryItems(
      categories.map((category) => ({
        id: category.id,
        label: category.name,
        count: categoryCounts[category.id] || 0,
        checked: getInitialCheckedState(category.id),
      }))
    );
  }, [categoryCounts, getInitialCheckedState]);

  // Update URL when filters change
  const updateURL = useCallback(
    (updatedItems: CategoryItem[]) => {
      const params = new URLSearchParams(searchParams);

      const checkedItems = updatedItems
        .filter((item) => item.checked)
        .map((item) => item.id);

      if (checkedItems.length > 0) {
        params.set("categories", checkedItems.join(","));
      } else {
        params.delete("categories");
      }

      // Update URL
      const paramString = params.toString();
      const newUrl = paramString ? `/?${paramString}` : "/";
      router.push(newUrl, { scroll: false });
    },
    [router, searchParams]
  );

  const toggleCheckbox = (itemId: string) => {
    setCategoryItems((prev) => {
      const updatedItems = prev.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      );

      // Schedule URL update for next tick to avoid updating during render
      setTimeout(() => {
        updateURL(updatedItems);
      }, 0);

      return updatedItems;
    });
  };

  return (
    <div>
      <div className="p-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full"
        >
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
            Danh mục sản phẩm
          </h3>
          {expanded ? (
            <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
          ) : (
            <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
          )}
        </button>

        {expanded && (
          <div className="mt-4 space-y-3">
            {categoryItems.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <Checkbox
                  id={item.id}
                  checked={item.checked}
                  onCheckedChange={() => toggleCheckbox(item.id)}
                  className="w-5 h-5 lg:w-6 lg:h-6 border-2 border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <label
                  htmlFor={item.id}
                  className={`flex-1 cursor-pointer text-sm lg:text-base ${
                    item.checked ? "font-medium text-gray-900" : "text-gray-900"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="ml-1 text-gray-500">({item.count})</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
