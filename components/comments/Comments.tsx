import { useEffect, useState } from 'react';

import classes from './Comments.module.css';
import CommentList from '../commnetList/CommentList';
import NewComment from '../newComment/NewComment';
import { IComments } from './IComments';

type IProps = {
    id: string;
    email: string;
    name: string;
    text: string;
};

type comments = {
    email: string;
    name: string;
    text: string;
};

export interface INewComments {
    onAddComment: ({ email, name, text }: comments) => void;
}

const Comments: React.FC<IComments> = (props) => {
    const { eventId } = props;

    const [comments, setComments] = useState<IProps[]>([]);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        if (showComments) {
            fetch(`/api/comments/${eventId}`)
                .then((response) => response.json())
                .then((data) => {
                    setComments(data.comments);
                });
        }
    }, [showComments]);

    const toggleCommentsHandler = () => {
        setShowComments((prevStatus) => !prevStatus);
    };

    const addCommentHandler = (commentData: comments) => {
        fetch(`/api/comments/${eventId}`, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList items={comments} />}
        </section>
    );
};

export default Comments;
