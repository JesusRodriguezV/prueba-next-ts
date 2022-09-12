import { Button, Nav, Navbar as NavbarBootstrap } from "react-bootstrap";

interface Props {
  toggle: () => void;
}

const signOut = () => {
  console.log("log out");
};

const Navbar = ({ toggle }: Props) => {
  return (
    <NavbarBootstrap bg="light" sticky="top">
      <Button variant="light" onClick={toggle}>
        <span className="navbar-toggler-icon"></span>
      </Button>
      <NavbarBootstrap.Brand href="#">Navbar</NavbarBootstrap.Brand>
      <NavbarBootstrap.Toggle />
      <NavbarBootstrap.Collapse>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link onClick={signOut}>Cerrar sesión</Nav.Link>
        </Nav>
      </NavbarBootstrap.Collapse>
    </NavbarBootstrap>
  );
};

export default Navbar;
