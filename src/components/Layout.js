import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
const Layout = ({ children }) => {
    return (
        <div>
            <div className={styles.propsoch}>
                <Image src={require("../../public/Images/logo.png")} width={111} height={25} />
            </div>
            <Navbar />
            <div className={styles.Layoutcontainer}>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;
