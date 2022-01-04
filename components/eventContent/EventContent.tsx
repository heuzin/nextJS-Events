import classes from './EventContent.module.css';

type Props = {
    children: JSX.Element;
};

const EventContent: React.FC<Props> = ({ children }) => {
    return <section className={classes.content}>{children}</section>;
};

export default EventContent;
