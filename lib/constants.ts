import { Social } from "@/types/social-types";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const baseUrl = "https://circle-frontend-challenge-frontend.vercel.app";

export const socials: Social[] = [
  {
    name: "YouTube",
    icon: Youtube,
    link: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "#",
  },
  {
    name: "Facebook",
    icon: Facebook,
    link: "#",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "#",
  },
];

export const menu = [
  { title: "Home", url: "/" },
  { title: "About", url: "#" },
  { title: "Contact Us", url: "#" },
];
