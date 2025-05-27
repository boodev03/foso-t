"use client";

import { FilterIcon } from "@/components/icons/FilterIcon";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import ManufacturingYearFilter from "./ManufacturingYearFilter";
import OriginFilter from "./OriginFilter";
import PriceFilter from "./PriceFilter";

export default function Filter() {
  return (
    <div className="w-full lg:w-[315px] bg-white border border-gray-200 rounded-lg">
      {/* Filter Header */}
      <div className="flex items-center gap-3 p-3 border-b border-gray-200">
        <FilterIcon />
        <h2 className="text-xl lg:text-2xl font-bold text-blue-600 relative top-0.5">
          Bộ lọc
        </h2>
      </div>

      <div className="divide-y divide-gray-200">
        <CategoryFilter />
        <PriceFilter />
        <BrandFilter />
        <ManufacturingYearFilter />
        <OriginFilter />
      </div>
    </div>
  );
}
