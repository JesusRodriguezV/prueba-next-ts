import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Nav, Navbar as NavbarBootstrap, NavDropdown } from "react-bootstrap";

interface Props {
  toggle: () => void;
}

const signOut = () => {
  console.log("log out");
};

const Navbar = ({ toggle }: Props) => {
  const router = useRouter();

  const [lang, setLang] = useState("");
  const [locales, setLocales] = useState<string[]>([]);

  useEffect(() => {
    setLang(router?.locale || "");
    setLocales(router?.locales || []);
  }, [router]);


  return (
    <NavbarBootstrap bg="light" sticky="top">
      <Button variant="light" onClick={toggle}>
        <span className="navbar-toggler-icon"></span>
      </Button>
      <NavbarBootstrap.Brand href="#">Navbar</NavbarBootstrap.Brand>
      <NavbarBootstrap.Toggle />
      <NavbarBootstrap.Collapse>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavDropdown title={lang} id="nav-dropdown">
            {
              locales.map((locale, index) => (
                <Link key={index} href={router.pathname} locale={locale}>
                  <a className="dropdown-item">
                    {locale}
                  </a>
                </Link>

              ))
            }
          </NavDropdown>
          <Nav.Link onClick={signOut}>Cerrar sesión</Nav.Link>
        </Nav>
      </NavbarBootstrap.Collapse>
    </NavbarBootstrap>
  );
};

export default Navbar;
