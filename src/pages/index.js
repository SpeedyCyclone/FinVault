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
      <div className={styles.flex1}>
        <div className={styles.goalsdiv}>
          <h1 className={styles.goals}>Our Goals</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in
            blanditiis unde modi praesentium sequi corrupti excepturi sed
            accusantium tempore eaque inventore non fugit, vitae nisi quibusdam
            aliquam hic necessitatibus! Molestiae quo consequuntur quos maiores
            dolores aspernatur ducimus at eos autem voluptatibus ipsa tenetur
            debitis vel fuga quae beatae ullam esse, quis doloremque, dolorum
            necessitatibus minus atque minima? Deserunt, iusto?
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.goalsdiv}>
          <h1 className={styles.goals}>Our Origin</h1>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ex
            doloremque ipsum natus laboriosam eos temporibus numquam, placeat
            quis! Sapiente mollitia magni quasi architecto doloribus cupiditate
            consequatur assumenda, quia quos. Quisquam corporis saepe optio
            mollitia reprehenderit similique minus delectus eum iste, accusamus
            quasi praesentium animi porro nemo perspiciatis tempore consequatur
            eius neque, quis illum magnam, qui itaque? Veniam, sapiente
            voluptate!
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
