import Link from 'next/link';
import { IButton } from './Ibutton';
import styles from './Button.module.css';

const Button: React.FC<IButton> = (props) =>
    props.link ? (
        <Link href={props.link}>
            <a className={styles.btn}>{props.children}</a>
        </Link>
    ) : (
        <button className={styles.btn}>{props.children}</button>
    );

export default Button;
