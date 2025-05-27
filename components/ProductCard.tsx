import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  showDealTag?: boolean;
  showBuyButton?: boolean;
  isHovered?: boolean;
}

export default function ProductCard({
  image,
  name,
  price,
  oldPrice,
  discount,
  showDealTag = true,
  showBuyButton = true,
  isHovered = false,
}: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-0 flex flex-col hover:shadow-[0_8px_16px_#0375F329] transition-shadow duration-200 relative overflow-hidden">
      {/* Product Image Container */}
      <div className="relative p-1">
        <div className="w-full aspect-square relative bg-gray-50 rounded-lg overflow-hidden">
          <Image src={image} alt={name} fill className="object-contain" />
        </div>

        {/* Hover overlay - only show when hovered */}
        {isHovered && (
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center">
              {/* Add to cart or other action icon */}
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2 sm:space-y-4 p-3 sm:p-6 pt-0 flex-1 flex flex-col">
        {/* Deal Badge */}
        {showDealTag ? (
          <Badge className="w-fit bg-gradient-to-r h-6 sm:h-7 from-[#FFD666] to-[#FFAB00] text-[#7A0916] font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border-0">
            <div className="flex items-center gap-1 sm:gap-1.5">
              {/* Fire icon */}
              <Image
                src="/Fire.svg"
                alt="Fire icon"
                width={16}
                height={16}
                className="shrink-0 size-4"
              />
              <span className="hidden sm:inline">Giá cực sốc</span>
              <span className="sm:hidden">Sốc</span>
            </div>
          </Badge>
        ) : (
          <div className="h-6 sm:h-7" />
        )}

        {/* Product Name */}
        <h3 className="text-[#1C252E] font-semibold text-sm sm:text-base leading-[1.375] line-clamp-2 min-h-[36px] sm:min-h-[46px]">
          {name}
        </h3>

        <div className="space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between">
          {/* Price Section */}
          <div className="flex flex-col gap-1 sm:gap-2">
            {/* Current Price */}
            <div className="text-[#B71D18] font-semibold text-lg sm:text-xl leading-[1.2]">
              {price}
            </div>

            {/* Old Price and Discount */}
            {oldPrice && discount && (
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="text-[#919EAB] font-medium text-xs sm:text-sm leading-[1.714] line-through">
                  {oldPrice}
                </span>
                <div className="text-[#B71D18] font-semibold text-xs px-1.5 sm:px-2 py-0 rounded-full">
                  {discount}
                </div>
              </div>
            )}
          </div>

          {/* Buy Button */}
          {showBuyButton && (
            <Button
              className={`w-full ${
                isHovered
                  ? "bg-[#E6F1FF] text-[#025FCA] hover:bg-[#025FCA] hover:text-white"
                  : "bg-[#E6F1FF] text-[#025FCA] hover:bg-[#025FCA] hover:text-white"
              } font-semibold text-sm sm:text-base leading-[1.714] rounded-lg py-2 sm:py-3 px-3 transition-colors duration-200`}
              variant="ghost"
            >
              Mua ngay
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
