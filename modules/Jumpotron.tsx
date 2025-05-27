import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { EndIcon } from "@/components/icons/EndIcon";
import { Button } from "@/components/ui/button";

export default function Jumpotron() {
  return (
    <div className="bg-[#E6F1FF] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-4">
          {/* Left side - Icon and Text */}
          <div className="flex items-center gap-4">
            {/* Location Icon */}
            <p className="shrink-0">
              <EndIcon />
            </p>

            {/* Text */}
            <h2 className="text-primary font-medium text-xl sm:text-2xl lg:text-[28px] leading-none text-center lg:text-left">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </h2>
          </div>

          {/* Right side - Button */}
          <Button className="bg-white hover:bg-brand-600 hover:text-white transition-all h-[48px] sm:h-[56px] text-lg sm:text-2xl leading-1 text-brand-600 rounded-full !px-4 sm:!px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 hover:shadow-md duration-200 shrink-0">
            Xem ngay
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
