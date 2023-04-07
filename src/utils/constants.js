import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaHome,
  FaQuestion,
  FaAlignRight,
  FaPaperPlane,
  FaPencilAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
export const links = [
  { id: 1, text: "صفحه اصلی", url: "/", icon: <FaHome /> },
  { id: 2, text: "درباره ما", url: "/about", icon: <FaPencilAlt /> },
  { id: 3, text: "ویژگی ها", url: "/features", icon: <FaAlignRight /> },
  { id: 4, text: "ارتباط با ما", url: "/contactUs", icon: <FaPaperPlane /> },
  { id: 5, text: "سوالات متداول", url: "/faq", icon: <FaQuestion /> },
];

export const MMP_Info = [
  {
    id: 1,
    socialMedia: {
      name: "TELEGRAM",
      url: "https://t.me/Muhaaamp",
      icon: <FaTelegram />,
    },
  },
  {
    id: 2,
    socialMedia: {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/muhammad_moshirpanahi/",
      icon: <FaInstagram />,
    },
  },
  {
    id: 3,
    socialMedia: {
      name: "WHATSAPP",
      url: "https://api.whatsapp.com/send?phone=+989187891922",
      icon: <FaWhatsapp />,
    },
  },
  {
    id: 4,
    socialMedia: {
      name: "EMAIL",
      url: "mailto: mohammadmp14@gmail.com",
      icon: <SiGmail />,
    },
  },
  {
    id: 5,
    socialMedia: {
      name: "PHONECALL",
      url: "tel:+98-918-789-1922",
      icon: <IoMdCall />,
    },
  },
];
export const Rooms_List = [
  {
    id: 1,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/American-Single-Family-House-2-1-1024x683.jpeg",
    price: 4.4,
    type: "  خانه‌های مستقل در حومه شهر",
    location: " بندر انزلی",
    description:
      "  درصد آمریکای‌ها در خانه‌های مستقل، خانه‌هایی کل فضای محوطه تماما متعلق به آنهاست زندگی می‌کنند. در حالی که به احتمال زیاد این نرخ در سایر کشورها به همان اندازه بالا نیست. در این الگو ساختمان یا خانه به هیچ وجه به خانه دیگری متصل نیست. ساختمان در محدوده ملک (زمین) خود قرار دارد و کاملاً مجزا از سایر خانه‌های اطراف بنا شده است. بیشتر خانه‌های به این سبک در حومه شهرهای آمریکای شمالی واقع شده‌اند. نمونه چنین خانه‌هایی در دهکده ساحلی بندر انزلی به فور یافت می‌شود. ",
  },
  {
    id: 2,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/59ef7af006f6677cce96cfd096f335e2.jpeg",
    price: 5.2,
    type: " ویلایی",
    location: "رشت",
    description:
      "اصولا ویلاهای شهرکی بر اساس یک بریف اجرایی و با توجه به مقیاس یا سیاست‌های طراح اصلی پیاده سازی می‌شوند؛ بنابراین هر شهرک با شهرکی دیگر متفاوت است. شهرک هوشمند ورینا در منطقه ازاد انزلی یکی از موفق‌ترین پروژه‌های محدوده منطقه آزاد بر همین مبناست. معمولا ساختمان‌ها در شهرک‌ها دو یا سه طبقه هستند و طراحی معماری آنها به صورت چند تیپ در محدوده شهرک تکرار می‌شوند",
  },
  {
    id: 3,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/basement-suite.jpeg",
    price: 3.5,
    type: " سویت کامل",
    location: "تهران",
    description:
      "به احتمال بسیار زیاد واحد‌های همکف یا این سوئیت‌های کوچک بعدا در یک ساختمان بازطراحی می‌شوند. با افزایش قیمت املاک و کاهش توان خرید یا اجاره ملک مسکونی برای بسیاری از افراد، ایده زندگی در بخش همکف با یک بازنگری در معماری داخلی، گزینه‌ای مطلوب برای بسیاری از افراد شده است",
  },
  {
    id: 4,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/bluemont_2-scaled-1-1024x577.jpeg",
    price: 1.2,
    type: " باراندومینیوم ",
    location: "تهران",
    description:
      "در ساده‌ترین تعریف باراندومینیوم ساختمانی بزرگ، یک دست و به صورت سازه‌ای فولادی‌ست که چندان در ایران رایج نیست. بیشتر شبیه یک انباری بزرگ است که معماری مسکونی بخش کوچکی از آن است. احتمالا توجه به تصویر باراندومینیوم درک موضوع را برای شما اسان‌تر کند",
  },
  {
    id: 5,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/ch_120396_swissalps_chaletlesetrennes_000_webhero_357_ret-1.jpeg",
    price: 1.8,
    type: " (دست ساز کیوان) آلونک چوبی    ",
    location: "  دهگلان -  علی آباد مشیر",
    description:
      "کلمه «Chalet» یادآور سازه‌هایی سنتی‌ست که در گذشته دامداران گوسفند و بز در سوئیس از آن استفاده می‌کردند. امروزه این نوع کلبه‌ای ییلاقی معمولاً در مناطق کوهستانی واقع شده است. اکنون که اسکی یک ورزش محبوب در سطح جهانی است، چلت‌ها به منزلگاهی مطلوب با دسترسی عالی برای اسکی‌بازان محسوب می‌گردد. برای ساخت چلت‌ها به لحاظ فنی از الگوی خاصی پیروی می‌شود. به طور مثال سقف شیب دار و برجستگی‌های بلند برای جابجایی توده‌های برف از الزامات طراحی این خانه‌هاست",
  },
  {
    id: 6,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/apartment-building-hs.jpeg",
    price: 2.5,
    type: " آپارتمانی ",
    location: "  اندیشه - تهران",
    description:
      "شاید نام آشناترین نوع ملک مسکونی که در ایران هم بسیار رواج پیدا کرده و ساخت و ساز آن توسعه فزاینده‌ای را تجربه کرده همین آپارتمان است. لازم به توضیح اضافه نیست اما یک نکته شاید برایتان جالب باشد. در کشورهای غربی مخصوصا امریکا تفاوتی بین کاندو یا کانکس با اپارتمان وجود دارد",
  },
  {
    id: 7,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/co-op-building-hs.jpeg",
    price: 2.3,
    type: " خانه‌ تعاونی ",
    location: "  اندیشه - تهران",
    description:
      "این واحد‌های مسکونی از نظر ظاهری و عملکرد با یک آپارتمان یا کاندو مشابهت‌هایی دارد، اما شرایط مالکیت و امور قانونی آن کاملاً متفاوت است. در Co-op، هر نهاد یا شخصی که در تعاونی خرید می‌کند مالک واحد خاصی نیست. در عوض، آنها درصدی از سهم ساختمان را در اختیار دارند",
  },
  {
    id: 8,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/bungalow-house-type.jpeg",
    price: 2.1,
    type: "  بانگالو ",
    location: "کردستان ",
    description:
      "«بانگالو» ظاهرا یک کلمه هندی‌ست که برای خانه‌های ویلایی کوچک به‌کار برده می‌شده و به نوعی از«خانه بنگالی» نشات گرفته است. سبک این خانه شاید بیشتر شبیه به یک کلبه تر و تمیز باشد. کوچک اما به دقت ساخته شده است. پنجره‌های نورگیر بسیار خوبی دارد و اگر کمی ارتفاع داشته باشد حتما ایوان خواهد داشت. ساخت این نوع خانه‌ها در ایالات متحده در اوایل قرن بیستم آغاز شد",
  },
  {
    id: 9,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/00miami-collapse-mobileMasterAt3x-1024x682.jpeg",
    price: 0.8,
    type: "  کاندو یا کانکس ",
    location: "کردستان ",
    description:
      "احتمالا در ایران این واژه یاد‌آور اتاق‌های پیش ساخته کوچکی است که در پروژه‌های عمرانی زیاد به چشم می‌خورد اما وقع قضیه اینطور نیست. کانکس یا کاندو یکی از انواع خانه در میان بسیاری از سازه‌های مسکونی که در یک ساختمان یا مجموعه‌ای از ساختمان‌ها (مجتمع) در قطعه‌ای از زمین واقع شده است",
  },
];
export const Images = [
  {
    id: 1,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/American-Single-Family-House-2-1-1024x683.jpeg",
    price: 4.4,
    type: "  خانه‌های مستقل در حومه شهر",
    location: " بندر انزلی",
    description:
      "  درصد آمریکای‌ها در خانه‌های مستقل، خانه‌هایی کل فضای محوطه تماما متعلق به آنهاست زندگی می‌کنند. در حالی که به احتمال زیاد این نرخ در سایر کشورها به همان اندازه بالا نیست. در این الگو ساختمان یا خانه به هیچ وجه به خانه دیگری متصل نیست. ساختمان در محدوده ملک (زمین) خود قرار دارد و کاملاً مجزا از سایر خانه‌های اطراف بنا شده است. بیشتر خانه‌های به این سبک در حومه شهرهای آمریکای شمالی واقع شده‌اند. نمونه چنین خانه‌هایی در دهکده ساحلی بندر انزلی به فور یافت می‌شود. ",
  },
  {
    id: 2,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/co-op-building-hs.jpeg",
    price: 5.2,
    type: " ویلایی",
    location: "رشت",
    description:
      "اصولا ویلاهای شهرکی بر اساس یک بریف اجرایی و با توجه به مقیاس یا سیاست‌های طراح اصلی پیاده سازی می‌شوند؛ بنابراین هر شهرک با شهرکی دیگر متفاوت است. شهرک هوشمند ورینا در منطقه ازاد انزلی یکی از موفق‌ترین پروژه‌های محدوده منطقه آزاد بر همین مبناست. معمولا ساختمان‌ها در شهرک‌ها دو یا سه طبقه هستند و طراحی معماری آنها به صورت چند تیپ در محدوده شهرک تکرار می‌شوند",
  },
  {
    id: 3,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/bungalow-house-type.jpeg",
    price: 2.1,
    type: "  بانگالو ",
    location: "کردستان ",
    description:
      "«بانگالو» ظاهرا یک کلمه هندی‌ست که برای خانه‌های ویلایی کوچک به‌کار برده می‌شده و به نوعی از«خانه بنگالی» نشات گرفته است. سبک این خانه شاید بیشتر شبیه به یک کلبه تر و تمیز باشد. کوچک اما به دقت ساخته شده است. پنجره‌های نورگیر بسیار خوبی دارد و اگر کمی ارتفاع داشته باشد حتما ایوان خواهد داشت. ساخت این نوع خانه‌ها در ایالات متحده در اوایل قرن بیستم آغاز شد",
  },
  {
    id: 4,
    imgUrl:
      "https://www.khaneanzali.com/wp-content/uploads/2021/09/00miami-collapse-mobileMasterAt3x-1024x682.jpeg",
    price: 0.8,
    type: "  کاندو یا کانکس ",
    location: "کردستان ",
    description:
      "احتمالا در ایران این واژه یاد‌آور اتاق‌های پیش ساخته کوچکی است که در پروژه‌های عمرانی زیاد به چشم می‌خورد اما وقع قضیه اینطور نیست. کانکس یا کاندو یکی از انواع خانه در میان بسیاری از سازه‌های مسکونی که در یک ساختمان یا مجموعه‌ای از ساختمان‌ها (مجتمع) در قطعه‌ای از زمین واقع شده است",
  },
];

export const single_product_url =
  "https://jovial-klepon-acf62c.netlify.app/api/singleProduct?id=";
export const LabelContent = [
  {
    id: 1,
    label: "موقعیت",
    labelChildren: [
      { id: 1, text: "تهران" },
      { id: 2, text: "کردستان" },
    ],
  },
  {
    id: 2,
    label: "قیمت",
    labelChildren: [
      { id: 1, text: "کمتر از 2 ملیارد" },
      { id: 2, text: "بیشتر از 2 ملیارد" },
    ],
  },
  {
    id: 3,
    label: "طبقه بندی شما",
    labelChildren: [
      { id: 1, text: "آپارتمان" },
      { id: 2, text: "سویت" },
    ],
  },
];
export const arme_url =
  "https://myhomefinder-hr.com/wp-content/uploads/2022/10/Color-logo-no-background-1.png";
