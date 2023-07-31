import styles from "../styles/Products.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.heading}>Our Products</h1>
      <Image
        src="/product2.png"
        alt=""
        height={350}
        width={600}
        className={styles.image}
      ></Image>
      <h1 className={styles.heading}>
        To view and order more products, download our app now!
      </h1>
    </>
  );
}
