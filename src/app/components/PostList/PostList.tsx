import React from 'react'
import { User, PostProps } from '../Post/Post'
import Post from '../Post/Post'
import styles from './postList.module.css'

interface PostListProps {
    posts: PostProps[];
    users: User[];
}

const PostList: React.FC<PostListProps> = ({posts, users}) => {
    return (
        <div className={styles.postList}>
            {
                posts.map((post, i) => {
                        return (
                            <div className={styles.postContainer} key={`post-${i}`}>
                                <Post {...post} users={users}/>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default PostList