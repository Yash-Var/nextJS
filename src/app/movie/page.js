import Link from "next/link";

import styles from "@/app/styles/common.module.css";
import Moviecards from "../components/Moviecards";
const page = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9521fc6dfbmshd5fcf258a7f3b04p17e658jsn0d2e22962c3c",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  // console.log(main_data);
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <Moviecards key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
