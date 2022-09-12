import { Collapse, Nav } from "react-bootstrap";
import styles from "../styles/components/Sidebar.module.css";

interface Props {
  isOpen: boolean;
}

const links = [
  { l: "Inicio", p: "/" },
  { l: "Cards", p: "/cards" },
  { l: "Charts", p: "/charts" },
].map(({ l, p }) => {
  return (
    <Nav.Link className={styles.sidebarLink} href={p} key={l}>
      {l}
    </Nav.Link>
  );
});

const Sidebar = ({ isOpen }: Props) => {
  return (
    <Collapse className={styles.sidebar} in={isOpen} dimension="width">
      <Nav className="flex-column">{links}</Nav>
    </Collapse>
  );
};

export default Sidebar;
