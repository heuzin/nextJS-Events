import classes from './EventSummary.module.css';
import { IEventSummary } from './IEventSummary';

const EventSummary: React.FC<IEventSummary> = (props) => {
    const { title } = props;

    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    );
};

export default EventSummary;
