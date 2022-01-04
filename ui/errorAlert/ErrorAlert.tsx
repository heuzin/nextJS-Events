import classes from './ErrorAlert.module.css';

type Props = {
    children: JSX.Element;
};

const ErrorAlert: React.FC<Props> = (props) => {
    return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;
