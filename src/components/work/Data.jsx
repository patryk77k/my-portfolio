import admin_panel from "../../assets/administrator.png";
import breakpoint from "../../assets/game-boy.png";
import weather from "../../assets/regenschirm (1).png";
import memory_game from "../../assets/memory-spiel.png";
import management_site from "../../assets/project-management.png"

export const projectsData = [
  {
    id: 1,
    image: management_site,
    title: "Management Site",
    category: "APP",
  },
  {
    id: 2,
    image: admin_panel,
    title: "Admin Panel",
    category: "APP",
    href: "https://admin-panel-rfni.onrender.com/",
  },
  // {
  //   id: 3,
  //   image: Work3,
  //   title: "Web design",
  //   category: "WEB DESIGN",
  // },
  {
    id: 4,
    image: weather,
    title: "Weather App",
    category: "APP",
    href: "https://main--dazzling-zabaione-ad81f4.netlify.app/",
  },
  // {
  //   id: 5,
  //   image: Work5,
  //   title: "Web design",
  //   category: "MERN",
  // },
  {
    id: 6,
    image: breakpoint,
    title: "Breakpoint",
    category: "APP",
    href: "https://merry-gingersnap-551c99.netlify.app/",
  },
  {
    id: 8,
    image: memory_game,
    title: "Memory Game",
    category: "APP",
    href: "https://marvelous-dragon-a08229.netlify.app/",
  },
];
export const projectsNav = [
  { name: "ALL" },
  { name: "APP" },
  { name: "WEB DESIGN" },
  { name: "MERN" },
];
