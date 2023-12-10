// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
  } from "@iconscout/react-unicons";


  import img1 from "../Data/images/img1.png";
  import img2 from "../Data/images/img2.png";
  import img3 from "../Data/images/img3.png";


  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Inicio",
    },
    {
      icon: UilClipboardAlt,
      heading: "Cursos",
    },
    {
      icon: UilUsersAlt,
      heading: "Actualizaciones",
    },
    {
      icon: UilPackage,
      heading: 'Productos'
    },
    {
      icon: UilChart,
      heading: 'Análisis'
    },
  ];

export const CardsData = [
    {
      title: "Sales",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },

      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
    ],
  },

  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
]

//   import {UilEstate} from '@iconscout/react-unicons';

export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "Ha iniciado con el curso de javascript desde cero.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "Ha comenzado en el segundo nivel del curso de React + Vite.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "Ha finalizado curso de Phyton.",
    time: "2 hours ago",
  },
];