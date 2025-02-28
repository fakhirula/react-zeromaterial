import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Bars3Icon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { formatPageName } from "../../../_formats";
import PropTypes from "prop-types";
import { logout } from "../../../_services/auth";

export default function DashboardNavbar({ profile, openSidenav, setOpenSidenav }) {
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const { pathname } = useLocation();
  const [layout, page, path] = pathname.split("/").filter((el) => el !== "");

  const handleLogout = () => {
    logout();
  }

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page && formatPageName(page)}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {path && formatPageName(path)}
          </Typography>
        </div>
        <div className="flex items-center">
          <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid lg:hidden"
            onClick={() => setOpenSidenav(!openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <Link>
            <Button
              variant="text"
              color="blue-gray"
              className="hidden items-center gap-1 px-4 lg:flex normal-case"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
              { profile && profile.name }
            </Button>
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid lg:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </Link>
          <IconButton variant="text" color="red" onClick={handleLogout}>
            <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-red-900" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.propTypes = {
  openSidenav: PropTypes.isRequired,
  setOpenSidenav: PropTypes.isRequired,
};