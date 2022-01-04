import EventItem from '../eventItem/EventItem';
import { IEventList } from './IEventList';
import styles from './EventList.module.css';

const EventList: React.FC<IEventList> = (props) => {
    const { items } = props;

    return (
        <ul className={styles.list}>
            {items.map((event: any) => (
                <EventItem key={event.id} {...event} />
            ))}
        </ul>
    );
};

export default EventList;
