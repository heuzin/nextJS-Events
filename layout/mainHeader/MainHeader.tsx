import Link from 'next/link';
import styles from './MainHeader.module.css';

const MainHeader = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">NextEvents</Link>
        </div>
        <nav className={styles.navigation}>
            <ul>
                <Link href="/events">Browse All Events</Link>
            </ul>
        </nav>
    </header>
);

export default MainHeader;
