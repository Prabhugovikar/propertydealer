import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Navbar = () => {
    const router = useRouter();

    if (!router.pathname) {
        return null;
    }

    const isActive = (path) => router.pathname == path;

    return (
        <nav className={styles.navbar}>
            <div className={styles.iconconatiner}>
                {router.pathname === '/' ? (
                    <Image
                        src="/Images/Search-active.png"
                        alt="Search"
                        width={24}
                        height={24}
                    />
                ) : (
                    <>
                        <Image
                            src="/Images/Search.png"
                            alt="Search"
                            width={24}
                            height={24}
                        />
                    </>
                )}

                <a href="/" className={router.pathname === '/' ? styles.activepath : ''}>Explore</a>
            </div>
            <div className={styles.iconconatiner}>
                <Image
                    src="/Images/Heart.png"
                    alt="Search"
                    width={24}
                    height={24}
                />
                <a href="/profile" className={isActive("/profile") ? "active" : ""}>Wishlists</a>
            </div>
            <div className={styles.iconconatiner}>
                <Image
                    src="/Images/Location.png"
                    alt="Search"
                    width={24}
                    height={24}
                />
                <a href="/profile" className={isActive("/profile") ? "active" : ""}>Show map</a>
            </div>

            <div className={styles.iconconatiner}>
                <Image
                    src="/Images/login.png"
                    alt="Search"
                    width={24}
                    height={24}
                />
                <a href="/profile" className={isActive("/profile") ? "active" : ""}>Log in</a>
            </div>

        </nav>
    );
};

export default Navbar;