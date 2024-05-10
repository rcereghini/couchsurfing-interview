import Image from "next/image";
import styles from "./page.module.css";
import Post from "@/app/components/Post/Post";
import PostList from "./components/PostList/PostList";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main>
      <div>
        <div className={styles.profileBackgroundGradient}>
          <Image
            src="/man.webp"
            alt="A picture of the user"
            width="180"
            height="180"
            className={styles.avatar}
          />
        </div>
        <div className={styles.editProfileContainer}>
          <button>Edit Profile</button>
        </div>
        <div className={styles.userInfo}>
          <p>{`${data.user.name}`}</p>
          <p>{`@${data.user.userName}`}</p>
          <p>{data.user.bio}</p>
          <div className={styles.counts}>
            <p>{`Following: ${data.user.following.length}`}</p>
            <p>{`Followers: ${data.user.followers.length}`}</p>
          </div>
        </div>
      </div>
      <h2 className={styles.myFeed}>My Feed</h2>
      <div className={styles.postListContainer}>
        <PostList posts={data.posts} users={data.users} />
      </div>
    </main>
  );
}
