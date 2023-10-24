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
    href: "https://managementsite-c1e80.web.app/",
    href_git: "https://github.com/patryk77k/ManagementSite"
  },
  {
    id: 2,
    image: admin_panel,
    title: "Admin Panel",
    category: "APP",
    href: "https://admin-panel-rfni.onrender.com/",
    href_git: "https://github.com/patryk77k/admin-panel"
    
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
    href_git: "https://github.com/patryk77k/weather-app"
  },
  // {
  //   id: 5,
  //   image: Work5,
  //   title: "Web design",
  //   category: "MERN",
  // },
  
  {
    id: 6,
    image: memory_game,
    title: "Memory Game",
    category: "APP",
    href: "https://memory-game-bs2i.onrender.com",
    href_git: "https://github.com/patryk77k/memory-game-react"
  },
  {
    id: 8,
    image: breakpoint,
    title: "Breakpoint",
    category: "APP",
    href: "https://merry-gingersnap-551c99.netlify.app/",
    href_git: "https://github.com/patryk77k/breakpoint_game"
  },
];
export const projectsNav = [
  { name: "ALL" },
  { name: "APP" },
  { name: "WEB DESIGN" },
  { name: "MERN" },
];
