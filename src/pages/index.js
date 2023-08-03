import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>NutriBoom</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.flex}>
                <div className={styles.banner}>
                    <video
                        src="/video.mp4"
                        className={styles.image}
                        height={350}
                        width={600}
                        autoPlay
                        muted
                    ></video>

                    <h1 className={styles.heading}>NutriBoom</h1>
                    <p className={styles.para}>
                        At NutriBoom, we believe in transformation, not just in the body but
                        in the spirit. Founded by David and Debbie Stovelman, our journey
                        has been one of resilience and rebirth. After overcoming adversity,
                        we emerge stronger and wiser, ready to bring positive change to
                        lives. We strive to reshape the world of wellness.
                    </p>
                </div>
            </div>
            <div className={styles.flex1}>
                <div className={styles.goalsdiv}>
                    <h1 className={styles.goals}>Our Goals</h1>
                    <p className={styles.text}>
                        NutriBooms goal is to empower holistic wellness, promoting positive
                        transformations through mindful nourishment. We foster a supportive
                        community, encourage innovation, and prioritize sustainable
                        practices to inspire personal growth and well-being. Join us on a
                        transformative journey towards a balanced and fulfilled life.
                    </p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.goalsdiv}>
                    <h1 className={styles.goals}>Our Origin</h1>
                    <p className={styles.text}>
                        NutriBoom, founded by the pioneering couple Mr. and Mrs. Stovelman,
                        is rooted in tenacity and passion. It empowers holistic wellness,
                        reflecting their transformative journey. A symbol of hope, NutriBoom
                        unites a thriving community on a path to a happier and enlightened
                        future. Embrace the magic of NutriBooms genesis as we embark on a
                        transformative well-being journey together.
                    </p>
                </div>
            </div>
            <h1 className={styles.team}>Our Team</h1>
            <div className={styles.flex2}>
                <div className={styles.card}>
                    <Image
                        src="/dummy.png"
                        alt=""
                        className={styles.img}
                        height={100}
                        width={100}
                    />
                    <h1 className={styles.name}>David Stovelman</h1>
                    <p className={styles.role}>Founder</p>
                </div>
                <div className={styles.card}>
                    <Image
                        src="/dummy.png"
                        alt=""
                        className={styles.img}
                        height={100}
                        width={100}
                    />
                    <h1 className={styles.name}>Debbie Stovelman</h1>
                    <p className={styles.role}>Founder</p>
                </div>
            </div>
        </>
    );
}
