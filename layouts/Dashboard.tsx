import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/layouts/Dashboard.module.css";

interface Props {
  children: React.ReactNode;
}

const Dashboard = ({ children }: Props) => {
  const LOCAL_STORAGE_KEY = "isSidebarOpen";
  const [isOpen, setIsOpen] = useState(false);

  const persistedState =
    typeof window === "undefined"
      ? false
      : localStorage.getItem(LOCAL_STORAGE_KEY) === "true";

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(isOpen));
  }, [isOpen]);

  // Rehydrate with persisted data
  useEffect(() => {
    setIsOpen(persistedState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => setIsOpen((value) => !value);

  return (
    <div className={styles.wrapper}>
      <Sidebar isOpen={isOpen}></Sidebar>
      <div
        className={`${styles.contentWrapper} ${isOpen ? styles.openSidebar : ""
          }`}
      >
        <Navbar toggle={toggle}></Navbar>
        <Breadcrumb></Breadcrumb>
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
