import styles from "../styles/About.module.css";
import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Image
        src="/banner.png"
        alt=""
        height={350}
        width={600}
        className={styles.image}
        priority="true"
      ></Image>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.text}>
        Welcome to NutriBoom, where we empower you to flourish and undergo a
        holistic transformation, encompassing your physical, mental, and
        spiritual well-being. Our journey has been extraordinary, fueled by the
        unwavering dedication and vision of our founders, Mr. and Mrs.
        Stovelman.
      </p>
      <p className={styles.text}>
        At NutriBoom, we embrace the belief that the path to growth and
        development lies in adopting a holistic approach. This philosophy
        permeates our values, work environment, and, most importantly, our
        products.
      </p>
      <p className={styles.text}>
        NutriBoom products are meticulously crafted and highly enriched with a
        harmonious blend of vitamins, minerals, and other essential nutrients.
        Our transformative offerings are designed to reduce stress, alleviate
        anxiety, and foster overall well-being, supporting you on your journey
        to a more balanced and fulfilled life.
      </p>
    </>
  );
}
