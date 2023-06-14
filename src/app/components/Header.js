import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
const page = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href="/">
            <Image
              src="/logo.png"
              width={150}
              height={40}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default page;
