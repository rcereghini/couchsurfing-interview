import { promises as fs } from 'fs';
import data from '../../app/data.json';
import Post from "../../app/components/Post/Post"

const PostPage = ({id}) => {
    const {posts, users} = data;

    const selectedPost = posts.find((post) => post.id === id)
    
    return (
        <main>
            <Post {...selectedPost} users={users} isDetailedView/>
        </main>
    )
}

export async function getStaticPaths() {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    const parsedData = JSON.parse(file);

    const paths = parsedData.posts.map(({id}) => {
        return { params: { id } }
    })

    return {
        paths,
        fallback: false
    }
  }

export async function getStaticProps({ params }) {
    return {props: {id: params.id}}
}

  export default PostPage;