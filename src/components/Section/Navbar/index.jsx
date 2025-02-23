import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const nestedMenuItems = [
  {
    title: "Bisnis",
  },
  {
    title: "Individu",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <Link to={`tujuan/${title.toLowerCase()}`} key={key}>
      <MenuItem>{title.charAt(0).toUpperCase() + title.slice(1)}</MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="medium" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Carbon
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <Link to="/rumus">
              <MenuItem>Rumus</MenuItem>
            </Link>
            <Link to="/hitung">
              <MenuItem>Hitung</MenuItem>
            </Link>
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Tujuan
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <MenuItem>Rumus</MenuItem>
          <MenuItem>Hitung</MenuItem>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Tujuan
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Link to="/solusi">
        <Typography variant="medium" color="blue-gray" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2">Solusi</ListItem>
        </Typography>
      </Link>
      <Link to="/kampanye">
        <Typography variant="medium" color="blue-gray" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2">Kampanye</ListItem>
        </Typography>
      </Link>
      <NavListMenu />
      <Link to="/forum">
        <Typography variant="medium" color="blue-gray" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2">Forum</ListItem>
        </Typography>
      </Link>
      <Link to="/tentang">
        <Typography variant="medium" color="blue-gray" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2">Tentang</ListItem>
        </Typography>
      </Link>
    </List>
  );
}

export function NavbarSection() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      shadow={false}
      blurred={false}
      fullWidth={true}
      className="container mx-auto pb-4 pt-6 px-16 border-b"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography
            variant="h4"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            zeromaterial.
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Link to="/login">
            <Button size="md">Bergabung</Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link to="/login">
            <Button size="md">Bergabung</Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}