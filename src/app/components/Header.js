import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className={styles.main_header}>
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={40}
            alt="Picture of the author"
          />
        </Link>
      </div>
    </>
  );
};

export default page;
