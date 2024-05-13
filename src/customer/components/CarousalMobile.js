import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { add } from "../../store/cartSlice";
import { toggleOverviewTrue } from "../../store/overviewSlice";
import AltMobiles from "./OverViewProduct";


// const mobiles = []


  const smartphones= [
    {
      id:1,
      brand: "Apple",
      model: "iPhone 13 Pro",
      quantity:1,
      release_year: 2021,
      display_size: "6.1 inches",
      resolution: "1170 x 2532 ",
      img_url:'https://buyblynk.com/cdn/shop/products/IP-13-Pro-Max-Front-1-Silver_large.png?v=1681133014',
      specs: {
        processor: "Apple A15 Bionic",
        ram: "6 GB",
        storage: "128 GB",
        battery_capacity: "3095 mAh"
      },
      price: 999
    },
    {
      id:2,
      quantity:1,
      "brand": "Samsung",
      "model": "Galaxy S21 Ultra",
      "release_year": 2021,
      "display_size": "6.8 inches",
      "resolution": "1440 x 3200 ",
      img_url:'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_133207418/fee_786_587_png',
      "specs": {
        "processor": "Snapdragon 888",
        "ram": "12 GB, 16 GB",
        "storage": "128 GB, 256 GB, 512 GB",
        "battery_capacity": "5000 mAh"
      },
      "price": 1199
    },
    {
      id:3,
      quantity:1,
      "brand": "Google",
      "model": "Pixel 6 Pro",
      "release_year": 2021,
      "display_size": "6.7 inches",
      "resolution": "1440 x 3120 ",
      img_url:'https://cdn.revendo.com/media/5a/a6/e3/1666628140/google-pixel-6-pro-sorta-sunny-guenstig-gebraucht-kaufen.png.png',
      "specs": {
        "processor": "Google Tensor G1",
        "ram": "12 GB",
        "storage": "128 GB, 256 GB, 512 GB",
        "battery_capacity": "5003 mAh"
      },
      "price": 899
    },
    {
      id:4,
      quantity:1,
      "brand": "OnePlus",
      "model": "OnePlus 9 Pro",
      "release_year": 2021,
      "display_size": "6.7 inches",
      "resolution": "1440 x 3216 ",
      img_url:'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Morning%20mist-gallery.png',
      "specs": {
        "processor": "Snapdragon 888",
        "ram": "8 GB, 12 GB",
        "storage": "128 GB, 256 GB",
        "battery_capacity": "4500 mAh"
      },
      "price": 1069
    },
    {
      id:5,
      quantity:1,
      "brand": "Xiaomi",
      "model": "Mi 11 Ultra",
      "release_year": 2021,
      "display_size": "6.81 inches",
      "resolution": "1440 x 3200 ",
      img_url:'https://images.anandtech.com/doci/16582/front-back.png',
      "specs": {
        "processor": "Snapdragon 888",
        "ram": "8 GB, 12 GB",
        "storage": "256 GB, 512 GB",
        "battery_capacity": "5000 mAh"
      },
      "price": 999
    },
    {
      id:6,
      quantity:1,
      "brand": "Huawei",
      "model": "Huawei P50 Pro",
      "release_year": 2021,
      "display_size": "6.6 inches",
      "resolution": "1228 x 2700 ",
      img_url:'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones-20230509/view-all-phones/all-p50-pro.png',
      "specs": {
        "processor": "Kirin 9000",
        "ram": "8 GB",
        "storage": "256 GB, 512 GB",
        "battery_capacity": "4360 mAh"
      },
      "price": 1199
    },
    {
      id:7,
      quantity:1,
      "brand": "Samsung",
      "model": "Galaxy Z Fold 3",
      "release_year": 2021,
      "display_size": "7.6 inches",
      "resolution": "1768 x 2208 ",
      img_url:'https://media.croma.com/image/upload/v1708673339/Croma%20Assets/Communication/Mobiles/Images/242289_0_x8x50c.png',
      "specs": {
        "processor": "Snapdragon 888",
        "ram": "12 GB",
        "storage": "256 GB",
        "battery_capacity": "4400 mAh"
      },
      "price": 1799
    },
    {
      id:8,
      quantity:1,
      "brand": "Apple",
      "model": "iPhone 13",
      "release_year": 2021,
      "display_size": "6.1 inches",
      "resolution": "1170 x 2532 ",
      img_url:'https://media.croma.com/image/upload/v1708671264/Croma%20Assets/Communication/Mobiles/Images/243465_0_tvikdw.png',
      "specs": {
        "processor": "Apple A15 Bionic",
        "ram": "4 GB",
        "storage": "128 GB",
        "battery_capacity": "2942 mAh"
      },
      "price": 799
    },
    {
      id:9,
      quantity:1,
      "brand": "Xiaomi",
      "model": "Xiaomi 12",
      "release_year": 2022,
      "display_size": "6.81 inches",
      "resolution": "1440 x 3200 ",
      img_url:'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1647849448.31929017!400x400!85.png',
      "specs": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "8 GB",
        "storage": "128 GB",
        "battery_capacity": "5000 mAh"
      },
      "price": 799
    },
    {
      id:10,
      quantity:1,
      "brand": "OnePlus",
      "model": "OnePlus 10 Pro",
      "release_year": 2022,
      "display_size": "6.7 inches",
      "resolution": "1440 x 3216 ",
      img_url:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680399705/Croma%20Assets/Communication/Mobiles/Images/250717_cstptn.png?tr=w-600',
      "specs": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12 GB",
        "storage": "256 GB",
        "battery_capacity": "4500 mAh"
      },
      "price": 999
    },
    {
      id:11,
      quantity:1,
      "brand": "Google",
      "model": "Pixel 7 Pro",
      "release_year": 2022,
      "display_size": "6.7 inches",
      "resolution": "1440 x 3120 ",
      img_url:'https://www.cellularsales.com/wp-content/uploads/2023/01/pixel-7-pro-hazel.png',
      "specs": {
        "processor": "Google Tensor 2",
        "ram": "12 GB",
        "storage": "256 GB",
        "battery_capacity": "5000 mAh"
      },
      "price": 999
    },
    {
      id:12,
      quantity:1,
      "brand": "Huawei",
      "model": "Huawei Mate 50 Pro",
      "release_year": 2022,
      "display_size": "6.6 inches",
      "resolution": "1440 x 3120 ",
      img_url:'https://img01.huaweifile.com/eu/uk/huawei/pms/uomcdn/GBHW/pms/202210/gbom/6941487275366/428_428_832935FB01AAF7ABD92F0AA81F6444FDmp.png',
      "specs": {
        "processor": "Kirin 9000E",
        "ram": "8 GB",
        "storage": "256 GB",
        "battery_capacity": "4600 mAh"
      },
      "price": 1099
    },
    {
      id:13,
      quantity:1,
      "brand": "Motorola",
      "model": "Motorola Edge 30 Pro",
      "release_year": 2022,
      "display_size": "6.7 inches",
      "resolution": "1080 x 2340 ",
      img_url:'https://motorolain.vtexassets.com/arquivos/ids/157684-800-auto?width=800&height=auto&aspect=true',
      "specs": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12 GB",
        "storage": "512 GB",
        "battery_capacity": "5000 mAh"
      },
      "price": 1099
    },
    {
      id:14,
      quantity:1,
      "brand": "Sony",
      "model": "Xperia 5 IV",
      "release_year": 2022,
      "display_size": "6.1 inches",
      "resolution": "1080 x 2520 ",
      img_url:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/X5M4_Black.png',
      "specs": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "8 GB",
        "storage": "256 GB",
        "battery_capacity": "4500 mAh"
      },
      "price": 899
    },
    {
      id:15,
      quantity:1,
      "brand": "Realme",
      "model": "Realme GT 2 Pro",
      "release_year": 2022,
      "display_size": "6.7 inches",
      "resolution": "1440 x 3200 ",
      img_url:'https://image01.realme.net/general/20220321/1647863604291.png.webp',
      "specs": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12 GB",
        "storage": "256 GB",
        "battery_capacity": "5000 mAh"
      },
      "price": 899
    },
    {
      id:16,
      quantity:1,
      "brand": "OPPO",
      "model": "OPPO Find X4 Pro",
      "release_year": 2022,
      "display_size": "6.7 inches",
      "resolution": "1440 x 3216 ",
      img_url:'https://www.pubgphone.com/upload/Oppo_Find_X4_5G.webp',
      "specs": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12 GB",
        "storage": "512 GB",
        "battery_capacity": "5000 mAh"
      },
      "price": 1199
    },
    {
      id:17,
      quantity:1,
      "brand": "Vivo",
      "model": "Vivo X80 Pro",
      "release_year": 2022,
      "display_size": "6.78 inches",
      "resolution": "1440 x 3200 ",
      img_url:'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1651807558189/e7db3841bf6db0ac7a6f58948e8ab515.png',
      "specs": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12 GB",
        "storage": "512 GB",
        "battery_capacity": "4500 mAh"
      },
      "price": 1099
    },
    {
      id:18,
      quantity:1,
      "brand": "Nokia",
      "model": "Nokia 9.3 PureView",
      "release_year": 2022,
      "display_size": "6.7 inches",
      "resolution": "1440 x 3200 ",
      img_url:'https://1.bp.blogspot.com/-UyNsh4T0zBM/XpVOSgM9ZOI/AAAAAAAAKyg/DLI8k8VjytIzjU0Zbq240EMF_9wWmb8dACLcBGAsYHQ/s1600/Nokia-9-PureView.png',
      "specs": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "8 GB",
        "storage": "256 GB",
        "battery_capacity": "4500 mAh"
      },
      "price": 899
    },
    {
      id:19,
      quantity:1,
      "brand": "BlackBerry",
      "model": "BlackBerry KEY3",
      "release_year": 2022,
      "display_size": "6.0 inches",
      "resolution": "1080 x 2340 ",
      img_url:'https://media2.gsm55.com/media/device/4213/4213.png',
      "specs": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "6 GB",
        "storage": "128 GB",
        "battery_capacity": "4000 mAh"
      },
      "price": 699
    },
    {
      id:20,
      quantity:1,
      "brand": "Tecno",
      "model": "Tecno Phantom X",
      "release_year": 2022,
      "display_size": "6.7 inches",
      "resolution": "1080 x 2460 ",
      img_url:'https://static.tecnoeshop.jo/uploads/thumbs/82/82e7bd14377540918cc08d940ee71e38.png',
      "specs": {
        "processor": "Mediatek Helio G90T",
        "ram": "8 GB",
        "storage": "128 GB",
        "battery_capacity": "4500 mAh"
      },
      "price": 499
    }
  ]


const CarousalMobile = () => {

    const dispatch = useDispatch();


 

  return (
    <>
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900">Top Selling mobiles</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {smartphones.map((product) => (
          <div  onClick={()=>dispatch(toggleOverviewTrue(product))} key={product.id} className="group  pointer-cursor relative">
            <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
              <img
                src={product.img_url}
                alt={product.imageAlt}
                className="h-full w-full object-contain group-hover:scale-110 duration-100 object-center lg:h-full lg:w-full"
              />
              
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.brand} {product.model}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-700">Processor- {product.specs.processor}</p>
                <p className="mt-1 text-sm text-gray-700">Display- {product.display_size } &#40;{product.resolution} px&#41;</p>
                <p className="mt-1 text-sm text-gray-700">RAM- {product.specs.ram}</p>
                <p className="mt-1 text-sm text-gray-700">Storage- {product.specs.storage}</p>
                <p className="mt-1 text-sm text-gray-700">Battery- {product.specs.battery_capacity}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
            
                  </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <AltMobiles/>
  </>
  );
};

export default CarousalMobile;
