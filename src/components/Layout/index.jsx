import { NavbarSection } from "../Section/Navbar";
import FooterSection from "../Section/Footer";


export function Layout({children}) {
  return (
    <>
      <NavbarSection />
        <div className="container !mx-auto">
          { children }
        </div>
      <FooterSection />
    </>
  );
}

export default Layout;