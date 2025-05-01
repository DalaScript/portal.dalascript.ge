'use client'

import styles from "./page.module.css";
import { CustomButton } from "@/components/CustomButton";
import { Menu } from "@/components/Menu";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Menu />
      </main>
    </div>
  );
}
