import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 2,
  //   title: "Nosotros",
  //   path: "/about",
  //   newTab: false,
  // },
  // {
  //   id: 33,
  //   title: "Testimonios",
  //   path: "/reviews",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Contacto",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Talentos",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Front End",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Back End",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Full Stack",
        path: "/blog",
        newTab: false,
      },
      {
        id: 46,
        title: "Diseñador UX/UI ",
        path: "/signin",
        newTab: false,
      },
      
    ],
  },
];
export default menuData;
