import {
  tel1,
  tel2,
  tel3,
  tel4,
  tel5,
  tel6,
  tel7,
  tel8,
  tel9,
  tel10,
  tel11,
  tel12,
  tel13,
  tel14,
  tel15,
} from "../images";

const products = [
  {
    id: 1,
    name: "Samsung S22",
    img: tel1,
    previousCost: 3999,
    cost: 3699,
    rate: 5,
    inCart: false,
    quantityInCart: 1,
    display: "6.6 (1080 x 2340, Touchscreen, Infinity-O, Dynamic AMOLED 2X)",
    internalStorage: "256 GB",
    ram: "8 GB",
    camera: "Back: 50 + 12 + 10 Mpix, Front: 10 Mpix",
    communication: "5G, Wi-Fi 6 (802.11 ax), Bluetooth 5.2, NFC",
    operatingSystem: "Android 12",
  },
  {
    id: 2,
    name: "Redmi Note 11",
    img: tel2,
    cost: 899,
    rate: 4,
    inCart: false,
    quantityInCart: 1,
    display: "6.43 (1080 x 2400, Touchscreen, AMOLED)",
    internalStorage: "64 GB",
    ram: "4 GB",
    camera: "Back: 50 + 8 + 2 + 2 Mpix, Front: 13 Mpix",
    communication: "LTE, Wi-Fi 5 (802.11ac), Bluetooth 5.0, NFC",
    operatingSystem: "Android 11",
  },
  {
    id: 3,
    name: "Huawei Nova 9",
    img: tel3,
    previousCost: 1999,
    cost: 1699,
    rate: 5,
    inCart: false,
    quantityInCart: 1,
    display: "6.57, 2340 x 1080px, OLED",
    internalStorage: "128 GB",
    ram: "8 GB",
    camera: "Back 50 Mpx + 8 Mpx + 2 x 2 Mpx, Front 32 Mpx",
    communication: "Wi-Fi, NFC, Bluetooth 5.2, USB typ C",
    operatingSystem: "Android HMS",
  },
  {
    id: 4,
    name: "Oppo A16",
    img: tel4,
    previousCost: 799,
    cost: 599,
    rate: 3,
    inCart: false,
    quantityInCart: 1,
    display: "6.52, 1600 x 720px, IPS",
    internalStorage: "32 GB",
    ram: "3 GB",
    camera: "Back 13 Mpx + 2 x 2 Mpx, Front 8 Mpx",
    communication: "Wi-Fi, Bluetooth 5.0, USB C",
    operatingSystem: "Android 11",
  },
  {
    id: 5,
    name: "iPhone 13 Pro",
    img: tel5,
    cost: 5179,
    rate: 5,
    inCart: false,
    quantityInCart: 1,
    display: "6.7 (1284 x 2778, Touchscreen, OLED, Super Retina XDR)",
    internalStorage: "128 GB",
    ram: "6 GB",
    camera: "Back: 12 + 12 + 12 Mpix, Front: 12 Mpix",
    communication: "5G, Wi-Fi 6 (802.11 ax), Bluetooth 5.0, NFC",
    operatingSystem: "iOS 15",
  },
  {
    id: 6,
    name: "Vivo Y33s",
    img: tel6,
    previousCost: 1199,
    cost: 949,
    rate: 2,
    inCart: false,
    quantityInCart: 1,
    display: "6.58 (1080 x 2408, Touchscreen)",
    internalStorage: "128 GB",
    ram: "8 GB",
    camera: "Back: 50 + 2 + 2 Mpix, Front: 16 Mpix",
    communication: "LTE, Wi-Fi 5 (802.11ac), Bluetooth 5.0, NFC",
    operatingSystem: "Android 11, Funtouch OS 11.1",
  },
  {
    id: 7,
    name: "Samsung Galaxy S20",
    img: tel7,
    previousCost: 2859,
    cost: 1999,
    rate: 4,
    inCart: false,
    quantityInCart: 1,
    display: "6.5 (1080 x 2400, Touchscreen, Super AMOLED)",
    internalStorage: "128 GB",
    ram: "6 GB",
    camera: "Back: 12 + 12 + 8 Mpix, Front: 32 Mpix",
    communication: "5G, Wi-Fi 6 (802.11 ax), Bluetooth 5.1, NFC",
    operatingSystem: "Android 10",
  },
  {
    id: 8,
    name: "Samsung Galaxy A33",
    img: tel8,
    previousCost: 1749,
    cost: 1549,
    rate: 3,
    inCart: false,
    quantityInCart: 1,
    display: "6.4 (1080 x 2400, Touchscreen, Super AMOLED, Infinity-U)",
    internalStorage: "128 GB",
    ram: "6 GB",
    camera: "Back: 48 + 8 + 5 + 2 Mpix, Front: 13 Mpix",
    communication: "5G, Wi-Fi 5 (802.11ac), Bluetooth 5.1, NFC",
    operatingSystem: "Android 12",
  },
  {
    id: 9,
    name: "iPhone 11",
    img: tel9,
    cost: 2589,
    rate: 5,
    inCart: false,
    quantityInCart: 1,
    display: "6.1 (828 x 1792, Touchscreen, IPS, Liquid Retina HD)",
    internalStorage: "64 GB",
    ram: "4 GB",
    camera: "Back: 12 + 12 Mpix, Front: 12 Mpix",
    communication: "LTE, Wi-Fi 6 (802.11 ax), Bluetooth 5.0, NFC",
    operatingSystem: "iOS 13",
  },
  {
    id: 10,
    name: "iPhone 13",
    img: tel10,
    previousCost: 4199,
    cost: 4099,
    rate: 4,
    inCart: false,
    quantityInCart: 1,
    display: "6.1 (1170 x 2532, Touchscreen, OLED, Super Retina XDR)",
    internalStorage: "128 GB",
    ram: "4 GB",
    camera: "Back: 12 + 12 Mpix, Front: 12 Mpix",
    communication: "5G, Wi-Fi 6 (802.11 ax), Bluetooth 5.0, NFC",
    operatingSystem: "iOS 15",
  },
  {
    id: 11,
    name: "Samsung Galaxy A52",
    img: tel11,
    cost: 1399,
    rate: 2,
    inCart: false,
    quantityInCart: 1,
    display: "6.5 (1080 x 2400, Touchscreen, Super AMOLED, Infinity-O)",
    internalStorage: "128 GB",
    ram: "6 GB",
    camera: "Back: 64 + 12 + 5 + 5 Mpix, Front: 32 Mpix",
    communication: "5G, Wi-Fi 6 (802.11 ax), Bluetooth 5.2, NFC",
    operatingSystem: "Android 11",
  },
  {
    id: 12,
    name: "Realme 8i",
    img: tel12,
    previousCost: 899,
    cost: 799,
    rate: 4,
    inCart: false,
    quantityInCart: 1,
    display: "6.6 (1080 x 2412, Touchscreen, IPS)",
    internalStorage: "128 GB",
    ram: "4 GB",
    camera: "Back: 50 + 2 + 2 Mpix, Front: 16 Mpix",
    communication: "LTE, Wi-Fi 5 (802.11ac), Bluetooth 5.1, NFC",
    operatingSystem: "Android 11",
  },
  {
    id: 13,
    name: "Oppo A74",
    img: tel13,
    previousCost: 999,
    cost: 859,
    rate: 3,
    inCart: false,
    quantityInCart: 1,
    display: "6.43 (1080 x 2400, Touchscreen, AMOLED)",
    internalStorage: "128 GB",
    ram: "4 GB",
    camera: "Back: 48 + 2 + 2 Mpix, Front: 16 Mpix",
    communication: "LTE, Wi-Fi 5 (802.11ac), Bluetooth 5.0, NFC",
    operatingSystem: "Android 11, ColorOS 11.1",
  },
  {
    id: 14,
    name: "Oppo Renu5 Lite",
    img: tel14,
    cost: 1089,
    rate: 5,
    inCart: false,
    quantityInCart: 1,
    display: "6.43, 2400 x 1080px, AMOLED",
    internalStorage: "128 GB",
    ram: "8 GB",
    camera: "Back 48 Mpx + 8 Mpx + 2 x 2 Mpx, Front 32 Mpx",
    communication: "Wi-Fi, NFC, Bluetooth 5.1, USB C",
    operatingSystem: "Android 11",
  },
  {
    id: 15,
    name: "iPhone 12 mini",
    img: tel15,
    previousCost: 3359,
    cost: 3229,
    rate: 5,
    inCart: false,
    quantityInCart: 1,
    display: "5.4 (1080 x 2340, Touchscreen, OLED, Super Retina XDR)",
    internalStorage: "64 GB",
    ram: "4 GB",
    camera: "Back: 12 + 12 Mpix, Front: 12 Mpix",
    communication: "5G, Wi-Fi 6 (802.11 ax), Bluetooth 5.0, NFC",
    operatingSystem: "iOS 14",
  },
];

export default products;