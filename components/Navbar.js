import styles from "../styles/navbar.module.css"
import Link from "next/link"
import Cart from "../components/svgs/Cart"
import Logo from "../components/svgs/Logo"
const Navbar = () => {
  return (
    <nav className={styles.container}>
        <div className={styles.logo}>
          {/* <Logo /> */}
          Logo
        </div>
        <div className={styles.list}>
            <ul>
                <li><Link href="#">Featured</Link></li>
                <li><Link href="#">Men</Link></li>
                <li><Link href="#">Women</Link></li>
                <li><Link href="#">Kids</Link></li>
                <li><Link href="#">Sale</Link></li>
                <li><Link href="#">collections</Link></li>
                <li><Link href="#">Gifts</Link></li>
            </ul>
        </div>
        <div>
            <Cart />
        </div>
    </nav>
  )
}

export default Navbar