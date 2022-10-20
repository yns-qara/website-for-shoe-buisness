import styles from "../styles/Hero.module.css"
import Image from "next/image"
const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>welcome to the shoe brand website</h1>
                <div className={styles.buttons}>
                    <button>shop now</button>
                    <button>discover more</button>
                </div>
            </div>
            <div className={styles.right}>
                <Image src="/PngItem_2128990.png" width="700" height="300" alt="hero image" />
            </div>
        </div>
    )
}


export default Hero