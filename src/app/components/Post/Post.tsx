import React from "react";
import styles from "./post.module.css";
import Link from "next/link";

export interface User {
  id: string;
  name: string;
  userName: string;
}

export interface PostProps {
  poster: string;
  posterUserName: string;
  message: string;
  users: User[];
  id: string;
  views: number;
  isDetailedView: boolean;
}

const MAX_MESSAGE_CHARACTER_LENGTH = 250;

const truncateMessage = (message: string) => {
  return (message.length > MAX_MESSAGE_CHARACTER_LENGTH) ? `${message.substring(0, MAX_MESSAGE_CHARACTER_LENGTH)}...` : message;
}

const Post: React.FC<PostProps> = (props) => {
  const { poster, posterUserName, message, id, users, views, isDetailedView } = props;

  const postAuthor = users.find((user) => poster === user.id) || {id: "", name: "", userName: ""}

  return (
    <div className={styles.post}>
      <div className={styles.avatarContainer}></div>
      <div className={styles.postDetails}>
        <p className={styles.postHeader}>
          {postAuthor.name}<span className={styles.userName}>{` @${postAuthor.userName}`}</span>
        </p>
        <p className={styles.postCopy}>{isDetailedView ? message : truncateMessage(message)}</p>
          {
            isDetailedView && (
              <p>{`This post has been viewed ${views} times.`}</p>
            )
          }
        <div className={styles.viewMoreContainer}>
        {
          isDetailedView ? (
              <Link href={`/`}>Go Back</Link>
            ) : (
              <Link href={`/post/${id}`}>View More</Link>
             )
            }
            </div>
      </div>
    </div>
  );
};

export default Post;
