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
                src="/logo.svg"
                alt=""
                height={350}
                width={600}
                className={styles.image}
                priority="true"
            ></Image>

            <p className={styles.text}>
                Welcome to <span>NutriBoom</span>, where we empower you to flourish and undergo a
                holistic transformation, encompassing your physical, mental, and
                spiritual well-being. Our journey has been extraordinary, fueled by the
                unwavering dedication and vision of our founders, <span>Mr. and Mrs.
                    Stovelman.</span>
            </p>
            <p className={styles.text}>
                At NutriBoom, we embrace the belief that the path to growth and
                development lies in adopting a holistic approach. This philosophy
                permeates our values, work environment, and, most importantly, our
                products.
            </p>
            <p className={styles.text}>
                NutriBoom products are meticulously crafted and <span>highly enriched with a
                    harmonious blend of vitamins, minerals, and other essential nutrients.</span>
                Our transformative offerings are designed to <span>reduce stress, alleviate
                    anxiety, and foster overall well-being</span>, supporting you on your journey
                to a more balanced and fulfilled life.
            </p>
        </>
    );
}
