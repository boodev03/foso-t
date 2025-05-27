"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// Price range configuration
const PRICE_RANGES = [
  { key: "under-100k", label: "Dưới 100,000 đ" },
  { key: "100k-300k", label: "100,000 đ - 300,000 đ" },
  { key: "300k-500k", label: "300,000 đ - 500,000 đ" },
  { key: "over-500k", label: "Trên 500,000 đ" },
] as const;

export default function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null
  );
  const [priceExpanded, setPriceExpanded] = useState(true);

  // Initialize selected price range from URL params
  useEffect(() => {
    const priceParam = searchParams.get("priceRange");
    if (priceParam) {
      const range = PRICE_RANGES.find((r) => r.key === priceParam);
      setSelectedPriceRange(range ? range.label : null);
    } else {
      setSelectedPriceRange(null);
    }
  }, [searchParams]);

  // Update URL when price range changes
  const updateURL = useCallback(
    (priceRange: string | null) => {
      const params = new URLSearchParams(searchParams);

      if (priceRange) {
        const range = PRICE_RANGES.find((r) => r.label === priceRange);
        if (range) {
          params.set("priceRange", range.key);
        }
      } else {
        params.delete("priceRange");
      }

      const paramString = params.toString();
      const newUrl = paramString ? `/?${paramString}` : "/";
      router.push(newUrl, { scroll: false });
    },
    [router, searchParams]
  );

  const handlePriceRangeClick = (range: string) => {
    const newPriceRange = selectedPriceRange === range ? null : range;
    setSelectedPriceRange(newPriceRange);
    updateURL(newPriceRange);
  };

  return (
    <div className="p-3">
      <button
        onClick={() => setPriceExpanded(!priceExpanded)}
        className="flex items-center justify-between w-full mb-4"
      >
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
          Khoảng giá
        </h3>
        {priceExpanded ? (
          <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
        ) : (
          <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
        )}
      </button>

      {priceExpanded && (
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
          {PRICE_RANGES.map((range) => (
            <Button
              key={range.key}
              variant="outline"
              onClick={() => handlePriceRangeClick(range.label)}
              className={`w-full justify-center px-2 py-2 text-xs lg:text-sm border-gray-300 hover:bg-gray-50 h-auto ${
                selectedPriceRange === range.label
                  ? "bg-brand-50 text-brand-600 border-blue-300"
                  : "text-gray-900"
              }`}
            >
              {range.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
