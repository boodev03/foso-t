import ProductCard from "@/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Banner() {
  const products = [
    {
      id: 1,
      name: "Lọc dầu động cơ xe máy Honda",
      price: "299,000 đ",
      oldPrice: "350,000 đ",
      discount: "-15%",
      image: "/product/bo_loc_dau.png",
    },
    {
      id: 2,
      name: "Lọc dầu động cơ ô tô Toyota",
      price: "450,000 đ",
      oldPrice: "500,000 đ",
      discount: "-10%",
      image: "/product/bo_loc_dau.png",
    },
    {
      id: 3,
      name: "Lọc dầu thủy lực máy xúc",
      price: "850,000 đ",
      oldPrice: "1,000,000 đ",
      discount: "-15%",
      image: "/product/bo_loc_dau.png",
    },
    {
      id: 4,
      name: "Lọc dầu máy phát điện",
      price: "650,000 đ",
      oldPrice: "750,000 đ",
      discount: "-13%",
      image: "/product/bo_loc_dau.png",
    },
    {
      id: 5,
      name: "Lọc dầu máy nén khí",
      price: "550,000 đ",
      oldPrice: "650,000 đ",
      discount: "-15%",
      image: "/product/bo_loc_dau.png",
    },
    {
      id: 6,
      name: "Lọc gió động cơ xe máy Honda",
      price: "199,000 đ",
      oldPrice: "250,000 đ",
      discount: "-20%",
      image: "/product/bo_loc_khong_khi.png",
    },
    {
      id: 7,
      name: "Lọc gió động cơ ô tô Toyota",
      price: "350,000 đ",
      oldPrice: "400,000 đ",
      discount: "-12%",
      image: "/product/bo_loc_khong_khi.png",
    },
    {
      id: 8,
      name: "Lọc gió thủy lực máy xúc",
      price: "750,000 đ",
      oldPrice: "900,000 đ",
      discount: "-17%",
      image: "/product/bo_loc_khong_khi.png",
    },
    {
      id: 9,
      name: "Lọc gió máy phát điện",
      price: "550,000 đ",
      oldPrice: "650,000 đ",
      discount: "-15%",
      image: "/product/bo_loc_khong_khi.png",
    },
    {
      id: 10,
      name: "Lọc gió máy nén khí",
      price: "450,000 đ",
      oldPrice: "550,000 đ",
      discount: "-18%",
      image: "/product/bo_loc_khong_khi.png",
    },
    {
      id: 11,
      name: "Lọc dầu xe tải Hyundai",
      price: "380,000 đ",
      oldPrice: "420,000 đ",
      discount: "-10%",
      image: "/product/bo_loc_dau.png",
    },
    {
      id: 12,
      name: "Lọc gió xe nâng Toyota",
      price: "320,000 đ",
      oldPrice: "380,000 đ",
      discount: "-16%",
      image: "/product/bo_loc_khong_khi.png",
    },
  ];

  return (
    <div className="container mx-auto py-3 px-4">
      {/* Banner Image Only */}
      <div className="w-full">
        <div className="aspect-[2.88] w-full relative rounded-t-2xl overflow-hidden">
          <Image
            src="/product/banner.png"
            alt="Banner promotion with car filters"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Product Carousel Section */}
      <div className="bg-brand-600 p-12 relative">
        <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  discount={product.discount}
                  showDealTag={true}
                  showBuyButton={true}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons positioned to overlap the outer items */}
          <CarouselPrevious className="size-10 disabled:opacity-100 disabled:cursor-not-allowed absolute [&_svg]:!size-6 left-0 -translate-x-1/2 top-1/2 bg-[#CDE4FE] border-gray-300 text-gray-600 hover:bg-gray-50 z-10" />
          <CarouselNext className="size-10 disabled:opacity-100 disabled:cursor-not-allowed absolute [&_svg]:!size-6 right-0 translate-x-1/2 top-1/2 bg-[#CDE4FE] border-gray-300 text-gray-600 hover:bg-gray-50 z-10" />
        </Carousel>
      </div>
    </div>
  );
}
