import { NavLinkProps, FooterLinkProps } from "../@types";

export const NAVLINKS: NavLinkProps[] = [
  { id: 1, link: "home", label: "Home" },
  { id: 2, link: "about-us", label: "About Us" },
  { id: 3, link: "services", label: "Services" },
  { id: 4, link: "our-programs", label: "Our Programs" },
  // { id: 5, link: "cart", label: "cart" },
  { id: 5, link: "contact-us", label: "Contact Us" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  company: [
    { id: 1, link: "", label: "about us" },
    { id: 2, link: " tel:", label: "our mission" },
    { id: 3, link: "", label: "career" },
    { id: 4, link: "", label: "contact" },
  ],
  services: [
    { id: 1, link: "", label: "advocacy" },
    { id: 2, link: "", label: "education" },
    { id: 3, link: "", label: "care" },
  ],
  resources: [
    { id: 1, link: "", label: "consultation" },
    { id: 2, link: "", label: "book appointment" },
    { id: 3, link: "", label: "check up" },
    { id: 4, link: "", label: "blog" },
  ],
//   connect: [
//     {
//       id: 1,
//       link: "tel:862-373-0693 ; 410-994-6931",
//       label: " helpline: 862-373-0693 ; 410-994-6931",
//     },
//     { id: 2, link: "", label: "partnership" },
//     {
//       id: 3,
//       link: "mailto:treasurehealthservicesllc@gmail.com",
//       label: "treasurehealthservicesllc@gmail.com",
//     },
//     { id: 4, link: "", label: "volunteer" },
//   ],
  link: "",
  label: "",
  // QuickLinks: undefined
};
