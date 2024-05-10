import React from 'react'
import PostProps from '../Post/Post'
import Post from '../Post/Post'
import styles from './postList.module.css'

interface PostListProps {
    posts: PostProps[]
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