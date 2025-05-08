import { NavLinkProps, FooterLinkProps } from "../@types";

export const NAVLINKS: NavLinkProps[] = [
  { id: 1, link: "home", label: "Home" },
  { id: 2, link: "about-us", label: "About Us" },
  { id: 3, link: "services", label: "Services" },
  { id: 4, link: "our-programs", label: "Our Programs" },
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
    { id: 1, link: "", label: "blog" },
    { id: 2, link: "", label: "FAQ" },
    { id: 3, link: "", label: "support" },
  ],
  link: "",
  label: "",
};
