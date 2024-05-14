import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice';
import { toggleOverviewTrue } from '../store/overviewSlice';
import AltMobiles from './OverViewProduct';
import LaptopOverview from './LaptopOverview';

const Laptops = () => {
    const dispatch = useDispatch();
    const lappy = useSelector((state) => state.overview.product);


    const laptops = [
        {
            "id": 1,
            "type": "gaming",
            "brand": "ASUS",
            "model": "ROG Zephyrus G14",
            "processor": "AMD Ryzen 9 5900HS",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3060",
                "tgp": "80W"
            },
            "ram": {
                "size": "16GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "14\"",
                "resolution": "2560x1440",
                "type": "QHD"
            },
            "price": 1499.99,
            "quantity": 1,
            "battery": {
                "capacity": "76Wh",
                "charging_wattage": "180W"
            },
            "weight": "3.5 lbs",
            "wifi": "Wi-Fi 6",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://dlcdnwebimgs.asus.com/gain/601388C7-6C16-4B1F-90A4-3B051E81A363"
        },
        {
            "id": 2,
            "type": "professional",
            "brand": "HP",
            "model": "HP Spectre x360",
            "processor": "Intel Core i7-1165G7",
            "graphics_card": {
                "model": "Integrated Intel Iris Xe"
            },
            "ram": {
                "size": "16GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "13.3\"",
                "resolution": "3840x2160",
                "type": "4K OLED"
            },
            "price": 1799.99,
            "quantity": 1,
            "battery": {
                "capacity": "72Wh",
                "charging_wattage": "65W"
            },
            "weight": "2.87 lbs",
            "wifi": "Wi-Fi 6",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": true,
            "img_url": "https://cdn.cs.1worldsync.com/syndication/feeds/hp/inline-content/M8/5/D/5/3/2/5D5321A67E6C32CC8BF635C33B7E816A9D0B3F19_w_400_hero.png"
        },
        {
            "id": 3,
            "type": "gaming",
            "brand": "Acer",
            "model": "Predator Helios 300",
            "processor": "Intel Core i7-11800H",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3070",
                "tgp": "100W"
            },
            "ram": {
                "size": "32GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "15.6\"",
                "resolution": "1920x1080",
                "type": "Full HD"
            },
            "price": 1799.99,
            "quantity": 1,
            "battery": {
                "capacity": "57.5Wh",
                "charging_wattage": "180W"
            },
            "weight": "5.07 lbs",
            "wifi": "Wi-Fi 6",
            "bluetooth": "Bluetooth 5.1",
            "microsoft_office": false,
            "img_url": "https://5.imimg.com/data5/SELLER/Default/2021/3/NW/HF/CG/120561579/acer-predator-helios-300-gaming-laptop-500x500.png"
        },
        {
            "id": 4,
            "type": "professional",
            "brand": "Lenovo",
            "model": "ThinkPad X1 Carbon Gen 9",
            "processor": "Intel Core i5-1135G7",
            "graphics_card": {
                "model": "Integrated Intel Iris Xe"
            },
            "ram": {
                "size": "16GB",
                "type": "LPDDR4X"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "14\"",
                "resolution": "1920x1200",
                "type": "FHD+"
            },
            "price": 1599.00,
            "quantity": 1,
            "battery": {
                "capacity": "54Wh",
                "charging_wattage": "65W"
            },
            "weight": "2.49 lbs",
            "wifi": "Wi-Fi 6",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://p1-ofp.static.pub/fes/cms/2022/03/17/pw5jy11vn8u0jbi3rdu3aq1ij4bl15411237.png"
        },
        {
            "id": 5,
            "type": "gaming",
            "brand": "MSI",
            "model": "GE76 Raider",
            "processor": "Intel Core i9-11980HK",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3080",
                "tgp": "165W"
            },
            "ram": {
                "size": "32GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "17.3\"",
                "resolution": "1920x1080",
                "type": "Full HD"
            },
            "price": 2799.99,
            "quantity": 1,
            "battery": {
                "capacity": "99.9Wh",
                "charging_wattage": "280W"
            },
            "weight": "6.39 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://5.imimg.com/data5/SELLER/Default/2022/8/HA/WL/EL/148093360/msi-raider-ge76-12u-laptop-500x500.png"
        },
        {
            "id": 6,
            "type": "professional",
            "brand": "Dell",
            "model": "Latitude 9420",
            "processor": "Intel Core i7-1185G7",
            "graphics_card": {
                "model": "Integrated Intel Iris Xe"
            },
            "ram": {
                "size": "16GB",
                "type": "LPDDR4X"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "14\"",
                "resolution": "1920x1200",
                "type": "FHD+"
            },
            "price": 1799.00,
            "quantity": 1,
            "battery": {
                "capacity": "63Wh",
                "charging_wattage": "65W"
            },
            "weight": "3.15 lbs",
            "wifi": "Wi-Fi 6",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": true,
            "img_url": "https://foreteconline.com/magento/uploads/2022/09/dell-latitude-9420.png"
        },
        {
            "id": 7,
            "type": "gaming",
            "brand": "Razer",
            "model": "Razer Blade 15",
            "processor": "Intel Core i7-11800H",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3060",
                "tgp": "95W"
            },
            "ram": {
                "size": "16GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "15.6\"",
                "resolution": "1920x1080",
                "type": "Full HD"
            },
            "price": 1799.99,
            "quantity": 1,
            "battery": {
                "capacity": "65Wh",
                "charging_wattage": "230W"
            },
            "weight": "4.56 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://assets.razerzone.com/eeimages/support/products/1517/1517_blade15_mid2019.png"
        },
        {
            "id": 8,
            "type": "professional",
            "brand": "Apple",
            "model": "MacBook Air",
            "processor": "Apple M1",
            "graphics_card": {
                "model": "Integrated Apple M1"
            },
            "ram": {
                "size": "16GB",
                "type": "LPDDR4X"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "13.3\"",
                "resolution": "2560x1600",
                "type": "Retina"
            },
            "price": 1499.00,
            "quantity": 1,
            "battery": {
                "capacity": "49.9Wh",
                "charging_wattage": "30W"
            },
            "weight": "2.8 lbs",
            "wifi": "Wi-Fi 6",
            "bluetooth": "Bluetooth 5.0",
            "microsoft_office": false,
            "img_url": "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP825/macbookair.png"
        },
        {
            "id": 9,
            "type": "gaming",
            "brand": "Alienware",
            "model": "Alienware x15",
            "processor": "Intel Core i7-11800H",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3070",
                "tgp": "115W"
            },
            "ram": {
                "size": "32GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "15.6\"",
                "resolution": "2560x1440",
                "type": "QHD"
            },
            "price": 2299.99,
            "quantity": 1,
            "battery": {
                "capacity": "87Wh",
                "charging_wattage": "240W"
            },
            "weight": "5.34 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-x15-r2/media-gallery/laptop-alienware-x15-r2-nonlit-touchpad-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full"
        },
        {
            "id": 10,
            "type": "professional",
            "brand": "Microsoft",
            "model": "Surface Laptop Studio",
            "processor": "Intel Core i7-11800H",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3050 Ti",
                "tgp": "45W"
            },
            "ram": {
                "size": "32GB",
                "type": "LPDDR4X"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "14.4\"",
                "resolution": "2400x1600",
                "type": "PixelSense"
            },
            "price": 2399.00,
            "quantity": 1,
            "battery": {
                "capacity": "56Wh",
                "charging_wattage": "102W"
            },
            "weight": "3.62 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": true,
            "img_url": "https://blogs.nvidia.com/wp-content/uploads/2023/09/itns-week75-navia-left-1280w.png"
        },
        {
            "id": 11,
            "type": "gaming",
            "brand":

                "Gigabyte",
            "model": "AERO 15 OLED",
            "processor": "Intel Core i7-11800H",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3080",
                "tgp": "105W"
            },
            "ram": {
                "size": "32GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "15.6\"",
                "resolution": "3840x2160",
                "type": "4K OLED"
            },
            "price": 2599.00,
            "quantity": 1,
            "battery": {
                "capacity": "99Wh",
                "charging_wattage": "230W"
            },
            "weight": "4.41 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://static.gigabyte.com/StaticFile/Image/Global/40f70fadd94bb749718d6a48183baa4c/Product/24325/Png"
        },
        {
            "id": 12,
            "type": "professional",
            "brand": "Samsung",
            "model": "Galaxy Book Pro 360",
            "processor": "Intel Core i7-1165G7",
            "graphics_card": {
                "model": "Integrated Intel Iris Xe"
            },
            "ram": {
                "size": "16GB",
                "type": "LPDDR4X"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "13.3\"",
                "resolution": "1920x1080",
                "type": "AMOLED"
            },
            "price": 1499.99,
            "quantity": 1,
            "battery": {
                "capacity": "63Wh",
                "charging_wattage": "65W"
            },
            "weight": "2.3 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": true,
            "img_url": "https://o2uk--c.eu18.content.force.com/servlet/servlet.ImageServer?id=0151n000003t0hj&oid=00D0Y000000YQQB&lastMod=1636391023000"
        },
        {
            "id": 13,
            "type": "gaming",
            "brand": "Lenovo",
            "model": "Legion 7",
            "processor": "AMD Ryzen 9 5900HX",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3080",
                "tgp": "165W"
            },
            "ram": {
                "size": "32GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "15.6\"",
                "resolution": "2560x1440",
                "type": "QHD"
            },
            "price": 2199.99,
            "quantity": 1,
            "battery": {
                "capacity": "80Wh",
                "charging_wattage": "300W"
            },
            "weight": "5.52 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://p3-ofp.static.pub/fes/cms/2022/09/27/atanfpbsmyjuoof73bw1resnh551bm547437.png"
        },
        {
            "id": 14,
            "type": "gaming",
            "brand": "MSI",
            "model": "GS66 Stealth",
            "processor": "Intel Core i7-10870H",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3070",
                "tgp": "95W"
            },
            "ram": {
                "size": "16GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "15.6\"",
                "resolution": "1920x1080",
                "type": "Full HD"
            },
            "price": 1899.99,
            "quantity": 1,
            "battery": {
                "capacity": "99.9Wh",
                "charging_wattage": "230W"
            },
            "weight": "4.63 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://asset.msi.com/resize/image/global/product/product_1617925159c1e21e0d32c65f9358e8bbf3b2ba218f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        },
        {
            "id": 15,
            "type": "professional",
            "brand": "HP",
            "model": "HP Elite Dragonfly",
            "processor": "Intel Core i7-1165G7",
            "graphics_card": {
                "model": "Integrated Intel Iris Xe"
            },
            "ram": {
                "size": "16GB",
                "type": "LPDDR4X"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "13.3\"",
                "resolution": "1920x1080",
                "type": "FHD"
            },
            "price": 1899.99,
            "quantity": 1,
            "battery": {
                "capacity": "56.2Wh",
                "charging_wattage": "65W"
            },
            "weight": "2.2 lbs",
            "wifi": "Wi-Fi 6",
            "bluetooth": "Bluetooth 5.0",
            "microsoft_office": true,
            "img_url": "https://cdn.hpshop.co.za/media/catalog/product/h/p/hp_elite_dragonfly_nightfall_black_-_webcam.jpg"
        },
        {
            "id": 16,
            "type": "gaming",
            "brand": "ASUS",
            "model": "ROG Strix Scar 15",
            "processor": "AMD Ryzen 9 5900HX",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3080",
                "tgp": "165W"
            },
            "ram": {
                "size": "32GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "15.6\"",
                "resolution": "2560x1440",
                "type": "QHD"
            },
            "price": 2799.99,
            "quantity": 1,
            "battery": {
                "capacity": "90Wh",
                "charging_wattage": "300W"
            },
            "weight": "5.6 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://image-us.samsung.com/SamsungUS/home/computing/windows-laptops/pdp/notebook-7-Force/NP760XBE-X01US/gallery/NP760XBE-X01US-1-2.jpg?$product-details-jpg$"
        },
        {
            "id": 17,
            "type": "professional",
            "brand": "Dell",
            "model": "XPS 13",
            "processor": "Intel Core i7-1165G7",
            "graphics_card": {
                "model": "Integrated Intel Iris Xe"
            },
            "ram": {
                "size": "16GB",
                "type": "LPDDR4X"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "13.4\"",
                "resolution": "3840x2400",
                "type": "4K UHD+"
            },
            "price": 1999.00,
            "quantity": 1,
            "battery": {
                "capacity": "52Wh",
                "charging_wattage": "45W"
            },
            "weight": "2.64 lbs",
            "wifi": "Wi-Fi 6",
            "bluetooth": "Bluetooth 5.1",
            "microsoft_office": true,
            "img_url": "https://pbs.twimg.com/media/E0ZZr9JX0AM6w_g.jpg"
        },
        {
            "id": 18,
            "type": "gaming",
            "brand": "Acer",
            "model": "Acer Nitro 5",
            "processor": "AMD Ryzen 7 5800H",
            "graphics_card": {
                "model": "NVIDIA GeForce RTX 3060",
                "tgp": "85W"
            },
            "ram": {
                "size": "16GB",
                "type": "DDR4"
            },
            "storage": {
                "size": "1TB",
                "type": "SSD"
            },
            "display": {
                "size": "15.6\"",
                "resolution": "1920x1080",
                "type": "Full HD"
            },
            "price": 1199.99,
            "quantity": 1,
            "battery": {
                "capacity": "57.5Wh",
                "charging_wattage": "180W"
            },
            "weight": "5.07 lbs",
            "wifi": "Wi-Fi 6",
            "bluetooth": "Bluetooth 5.1",
            "microsoft_office": false,
            "img_url": "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/images/20210322/Nitro-5-AMD-Gallery_13_20210322.png"
        },
        {
            "id": 19,
            "type": "professional",
            "brand": "Microsoft",
            "model": "Surface Pro 8",
            "processor": "Intel Core i7-1185G7",
            "graphics_card": {
                "model": "Integrated Intel Iris Xe"
            },
            "ram": {
                "size": "16GB",
                "type": "LPDDR4X"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "13\"",
                "resolution": "2880x1920",
                "type": "PixelSense"
            },
            "price": 1799.99,
            "quantity": 1,
            "battery": {
                "capacity": "56Wh",
                "charging_wattage": "102W"
            },
            "weight": "1.96 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.1",
            "microsoft_office": true,
            "img_url": "https://compass-ssl.surface.com/assets/68/d1/68d1cb16-f953-43ae-b722-7a8c5b116f28.png?n=Surface_Pro_8_Gallery_Image_Portrait_3.png"
        },
        {
            "id": 20,
            "type": "gaming",
            "brand": "Razer",
            "model": "Razer Blade Stealth 13",
            "processor": "Intel Core i7-11800H",
            "graphics_card": {
                "model": "NVIDIA GeForce GTX 1650 Ti",
                "tgp": "35W"
            },
            "ram": {
                "size": "16GB",
                "type": "LPDDR4X"
            },
            "storage": {
                "size": "512GB",
                "type": "SSD"
            },
            "display": {
                "size": "13.3\"",
                "resolution": "1920x1080",
                "type": "Full HD"
            },
            "price": 1599.99,
            "quantity": 1,
            "battery": {
                "capacity": "53.1Wh",
                "charging_wattage": "100W"
            },
            "weight": "3.26 lbs",
            "wifi": "Wi-Fi 6E",
            "bluetooth": "Bluetooth 5.2",
            "microsoft_office": false,
            "img_url": "https://images-na.ssl-images-amazon.com/images/I/61tU%2BCmKdNS._AC_SL1200_.jpg"
        }
    ]





    return (
        <>

            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <h2 className="text-4xl font-bold pb-4 tracking-tight text-gray-900">Laptops For All Your Needs</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {laptops.map((product) => {
                            const formattedPrice = product.price.toLocaleString('en-US', { maximumFractionDigits: 2 });
                            // console.log(formattedPrice) 

                            return (
                                <div onClick={() => dispatch(toggleOverviewTrue(product))} key={product.id} className="group cursor-pointer">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={product.img_url}
                                            alt={product.imageAlt}
                                            className="h-full  w-full object-contain object-center group-hover:scale-110 cursor-pointer duration-100"
                                        />
                                    </div>
                                    {/* <h3 className="mt-4 text-lg font-medium text-gray-900">{product.ram.size} {product.ram.type} </h3>     */}
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">{product.model}</h3>
                                    <p className="mt-1 text-lg text-red-700 font-medium text-gray-900">${formattedPrice}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {!lappy ? "" : <LaptopOverview />}

        </>
    )
}

export default Laptops
