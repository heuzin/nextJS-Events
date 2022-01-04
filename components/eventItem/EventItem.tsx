import Image from 'next/image';
import Button from '../../ui/button/Button';
import DateIcon from '../../icons/date-icon';
import AddressIcon from '../../icons/address-icon';
import ArrowRightIcon from '../../icons/arrow-right-icon';
import { IItem } from '../../models/item';
import styles from './EventItem.module.css';

const EventItem: React.FC<IItem> = (props) => {
    const { title, image, date, location, id } = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formatedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return (
        <li className={styles.item}>
            <Image src={`/${image}`} alt={title} width={250} height={160} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{readableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{formatedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
