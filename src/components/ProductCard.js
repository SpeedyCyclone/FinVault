import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ item }) {
    return (
        <div className={styles.container}>

            <Image
                src={item.image}
                alt={item.name}
                height={250}
                width={250}
                className={styles.img}
            />

            <div className={styles.bottom}>
                <div className={styles.left}>
                    <p className={styles.type}>{item.name}</p>
                    <p className={styles.varient}>{item.type}</p>
                </div>
                <p className={styles.price}>{item.price}</p>
            </div>
        </div>
    )
}
