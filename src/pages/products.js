import styles from "../styles/Products.module.css";
import Image from "next/image";
import Head from "next/head";
import ProductCard from "../components/ProductCard";
import { products as productList } from "../constant";

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.heading}>Our Products</h1>

      <div className={styles.grid}>
        {productList.map((item, index) => {
          return <ProductCard item={item} ind={index} key={index} />;
        })}
      </div>

      <Image
        src="/QRCode.svg"
        alt=""
        height={250}
        width={250}
        className={styles.image}
        priority="true"
      />
      <h1 className={styles.bottomTxt}>
        To view and order the products, download the app now!
      </h1>
    </>
  );
}
