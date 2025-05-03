/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {

    return (
        <header className={styles.container}>
            <Link href="/">Main Page</Link>
            <Link href="/aboutus">About Us</Link>
            <Link href="/mentors">Mentors's Page</Link>
            <Link href="/mentors/nika">Nika's Page</Link>
            <Link href="/mentors/dala">Dala's Page</Link>
            <Link href="/contactus">Contact Us</Link>
        </header>
    )
}