import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

export const links = [
  { id: 1, text: "خانه", url: "/" },
  { id: 2, text: "درباره ما", url: "/about" },
  { id: 3, text: "ویژگی ها", url: "/features" },
  { id: 4, text: "ارتباط با ما", url: "/features" },
  { id: 5, text: "سوالات متداول", url: "/features" },
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
];
