import Image from "next/image";
import styles from "./page.module.css";
import { CustomButton } from "@/components/CustomButton";

export default function Home() {

  const welcomeMessage = "გამარჯობა როგორ ხარ!";
  const courses = ['React', 'UI/UX', 'Wordpress'];


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>
          {welcomeMessage}
        </p>
        {
          courses.map(course => <div>{course}</div>)
        }
        <CustomButton />
      </main>
    </div>
  );
}
