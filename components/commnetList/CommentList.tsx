import classes from './CommentList.module.css';

type comments = {
    _id: string;
    email: string;
    name: string;
    text: string;
};

type items = {
    items: comments[];
};

const CommentList = (props: items) => {
    const { items } = props;
    return (
        <ul className={classes.comments}>
            {items.map((item) => (
                <li key={item._id}>
                    <p>{item.text}</p>
                    <div>
                        By <address>{item.name}</address>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CommentList;
