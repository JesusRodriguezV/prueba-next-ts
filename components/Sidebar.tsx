import Link from "next/link";
import { Collapse, Nav } from "react-bootstrap";
import styles from "../styles/components/Sidebar.module.css";

interface Props {
  isOpen: boolean;
}

const links = [
  { l: "Inicio", p: "/" },
  { l: "Cards", p: "/cards" },
  { l: "Charts", p: "/charts" },
  { l: "Intl", p: "/intl" },
  { l: "Intl.DateTimeFormat", p: "/date" },
  { l: "Intl.NumberFormat", p: "/number" },
  { l: "Intl.Collator", p: "/collator" },
].map(({ l, p }) => {
  return (
    <Nav.Item className={styles.sidebarLink} key={l}>
      <Link href={p} >
        <a className="nav-link">{l}</a>
      </Link>
    </Nav.Item>
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
