import styles from "../styles/navbar.module.css"
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className={styles.container}>
        <div>Logo</div>
        <div className={styles.list}>
            <ul>
                <li><Link href="#">News&Featured</Link></li>
                <li><Link href="#">Men</Link></li>
                <li><Link href="#">Women</Link></li>
                <li><Link href="#">Kids</Link></li>
                <li><Link href="#">Sale</Link></li>
                <li><Link href="#">Gifts</Link></li>
            </ul>
        </div>
        <div>cart</div>
    </nav>
  )
}

export default Navbar