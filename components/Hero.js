import styles from "../styles/Hero.module.css"
import Image from "next/image"
const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>welcome to the shoe brand website</h1>
                <div className={styles.buttons}>
                    <button>shop now</button>
                    <button>shop now</button>
                </div>
            </div>
            <div className={styles.right}>
                <Image src="/nikeShoes.png" width="900" height="600" alt="hero image" />
            </div>
        </div>
    )
}


export default Hero