/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import styles from "./page.module.css";
import { CustomButton } from "@/app/components/CustomButton/CustomButton";
import { Menu } from "@/app/components/Menu/Menu";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.menu}>

        </div>
      </main>
    </div>
  );
}
