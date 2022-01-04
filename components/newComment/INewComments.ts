type comments = {
    email: string;
    name: string;
    text: string;
};

export interface INewComments {
    onAddComment: ({ email, name, text }: comments) => void;
}
