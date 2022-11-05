export type PostType = {
    id: string,
    title: string,
    content: string,
    timeStamp: { seconds: number, nanoseconds:  number},
    author: string,
};
