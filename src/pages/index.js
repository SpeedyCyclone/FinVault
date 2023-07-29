import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt=""
        height={400}
        width={600}
        className={styles.bannerimg}
        priority="true"
      ></Image>
    </>
  );
}
