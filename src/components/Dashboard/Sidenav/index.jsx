import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { CurrencyDollarIcon, HomeIcon, TableCellsIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const icon = {
  className: "w-5 h-5 text-inherit",
};

const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "",
        element: '',
      }
    ],
  },
  {
    title: "master data",
    layout: "dashboard",
    pages: [
      {
        icon: <TableCellsIcon {...icon} />,
        name: "users",
        path: "/users",
        element: '',
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "plants",
        path: "/plants",
        element: '',
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "payment methods",
        path: "/payment_methods",
        element: '',
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "donation types",
        path: "/donation_types",
        element: '',
      },
    ],
  },
  {
    title: "relation data",
    layout: "dashboard",
    pages: [
      {
        icon: <TableCellsIcon {...icon} />,
        name: "testimonies",
        path: "/testimonies",
        element: '',
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "campaigns",
        path: "/campaigns",
        element: '',
      },
      {
        icon: <CurrencyDollarIcon {...icon} />,
        name: "donations",
        path: "/donations",
        element: '',
      }
    ],
  },
  {
    title: "setting",
    layout: "dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: '',
      }
    ],
  },
];

export default function Sidenav({ openSidenav, setOpenSidenav }) {
  const [sidenavType, setSidenavType] = useState("white");
  const [sidenavColor, setSidenavColor] = useState("dark");


  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className={`relative`}>
        <div className="py-6 px-8 text-center">
          <Typography
            as="a"
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            ZEROMATERIAL
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(!openSidenav)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-blue-gray-500" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.propTypes = {
  openSidenav: PropTypes.isRequired,
  setOpenSidenav: PropTypes.isRequired,
};