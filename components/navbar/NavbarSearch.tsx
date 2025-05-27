"use client";

import { Camera, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function NavbarSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="flex-1 relative">
      <div
        className={`flex items-center border-2 rounded-full overflow-hidden transition-colors px-4 py-1 duration-200 ${
          isFocused ? "border-blue-500" : "border-gray-300"
        }`}
      >
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Tìm sản phẩm"
          className="border-0 focus-visible:ring-0 shadow-none text-gray-500 placeholder:text-gray-400 w-full bg-transparent text-sm h-8"
        />
        <div className="flex items-center gap-5">
          <Camera className="size-5 text-gray-700 ml-4 cursor-pointer hover:text-blue-500 transition-colors" />
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 rounded-full h-8 cursor-pointer"
          >
            <Search className="size-5 text-white" />
          </Button>
        </div>
      </div>
    </form>
  );
}
