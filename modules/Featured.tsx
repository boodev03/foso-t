import { DeliveryIcon } from "@/components/icons/DeliveryIcon";
import { MoneyIcon } from "@/components/icons/MoneyIcon";
import { PackageIcon } from "@/components/icons/PackageIcon";
import { SupportIcon } from "@/components/icons/SupportIcon";

export default function Featured() {
  const features = [
    {
      icon: MoneyIcon,
      title: "Miễn phí vận chuyển",
      description: "Với hoá đơn từ 1 triệu",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: SupportIcon,
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: DeliveryIcon,
      title: "Giao hàng nhanh 2h",
      description: "Trong vòng bán kính 10km nội thành TP HCM",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: PackageIcon,
      title: "30 ngày đổi trả",
      description:
        "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <div className="py-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 hover:shadow-[0_8px_16px_#0375F329] transition-shadow duration-200"
            >
              {/* Icon Container */}
              <p className="shrink-0">
                <IconComponent />
              </p>

              {/* Text Content */}
              <div className="flex-1 min-w-0 space-y-2">
                <h3 className="font-bold text-base text-primary leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
