"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { products } from "@/store/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

interface YearItem {
  id: string;
  label: string;
  count: number;
  checked?: boolean;
}

export default function ManufacturingYearFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Calculate counts for each year
  const yearCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const years = ["2021", "2020", "2019", "2018"];
    years.forEach((year) => {
      counts[year] = products.filter(
        (product) => product.manufacturingYear.toString() === year
      ).length;
    });
    return counts;
  }, []);

  // Get initial checked states from URL params
  const getInitialCheckedState = useCallback(
    (itemId: string) => {
      const paramValue = searchParams.get("years");
      if (!paramValue) return false;
      return paramValue.split(",").includes(itemId);
    },
    [searchParams]
  );

  const [yearItems, setYearItems] = useState<YearItem[]>([]);
  const [expanded, setExpanded] = useState(true);

  // Initialize year items after component mounts
  useEffect(() => {
    const years = ["2021", "2020", "2019", "2018"];
    setYearItems(
      years.map((year) => ({
        id: year,
        label: year,
        count: yearCounts[year] || 0,
        checked: getInitialCheckedState(year),
      }))
    );
  }, [yearCounts, getInitialCheckedState]);

  // Update URL when filters change
  const updateURL = useCallback(
    (updatedItems: YearItem[]) => {
      const params = new URLSearchParams(searchParams);

      const checkedItems = updatedItems
        .filter((item) => item.checked)
        .map((item) => item.id);

      if (checkedItems.length > 0) {
        params.set("years", checkedItems.join(","));
      } else {
        params.delete("years");
      }

      const paramString = params.toString();
      const newUrl = paramString ? `/?${paramString}` : "/";
      router.push(newUrl, { scroll: false });
    },
    [router, searchParams]
  );

  const toggleCheckbox = (itemId: string) => {
    setYearItems((prev) => {
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
    <div className="p-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full"
      >
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
          Năm sản xuất
        </h3>
        {expanded ? (
          <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
        ) : (
          <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
        )}
      </button>

      {expanded && (
        <div className="mt-4 space-y-3">
          {yearItems.map((item) => (
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
  );
}
