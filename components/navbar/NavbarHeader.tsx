import { MoneySaleIcon } from "../icons/MoneySaleIcon";
import { PhoneCallIcon } from "../icons/PhoneCallIcon";
import { SmartPhoneIcon } from "../icons/SmartPhoneIcon";

export default function NavbarHeader() {
  return (
    <div
      className="py-1 px-4"
      style={{
        background:
          "linear-gradient(270deg, #0D57C6 0%, #37CFFF 50.39%, #0F5ED6 100%)",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
          {/* Left side - Promotion */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MoneySaleIcon />
            <span className="text-secondary-50 text-xs">
              Nhập mã{" "}
              <span className="text-yellow-primary font-bold">NEWBIE</span> giảm
              ngay 10% cho lần đầu mua hàng.
            </span>
          </div>

          {/* Right side - Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <p className="shrink-0">
                <PhoneCallIcon />
              </p>
              <span className="text-secondary-50 text-xs">
                Hotline:{" "}
                <a
                  href="tel:0283760607"
                  className="text-yellow-primary font-semibold"
                >
                  0283 760 7607
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="shrink-0">
                <SmartPhoneIcon />
              </p>
              <span className="text-secondary-50 text-xs">Tải ứng dụng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
