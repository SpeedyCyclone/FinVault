import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.flex}>
        <div className={styles.banner}>
          <Image
            src="/banner.png"
            alt=""
            height={350}
            width={600}
            className={styles.image}
            priority="true"
          ></Image>
          <h1 className={styles.heading}>NutriBoom</h1>
          <p className={styles.para}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            ipsam perferendis neque! Excepturi est hic error nam deserunt
            provident natus dicta ab? Distinctio beatae inventore magni, itaque
            adipisci perferendis fugit. Inventore, in dolorem! Tenetur
            molestias, quidem temporibus maxime explicabo eum sunt excepturi
            quam rem exercitationem assumenda repellendus in, quae maiores
            aliquam neque.
          </p>
        </div>
      </div>
    </>
  );
}
