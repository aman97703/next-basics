// import { useRouter } from 'next/router'
import { useState } from 'react'
// import Axios from "axios"
import styles from "../../styles/blogpost.module.css"
import * as fs from "fs"

const Slug = (props) => {
    const [blog,] = useState(props.res)
    // const router = useRouter()
    // const { slug } = router.query
    // useEffect(() => {
    //     Axios.get(`/api/getBlog?slug=${slug}`).then((res) => {
    //         setBlog(res.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])
    return (
        <div className={styles.slug_blog}>
            {
                blog ? <>
                    <h1>Title : {blog.title}</h1>
                    <p>{blog.content}</p>
                </> : null
            }

        </div>
    )
}

// // static side rendering
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'learn-js' } },
            { params: { slug: 'learn-next' } },
            { params: { slug: 'learn-react' } },
        ],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const {slug} = context.params;
    const res = await fs.promises.readFile(`./pages/blogdata/${slug}.json`,'utf-8')
    return{
        props : {res : JSON.parse(res)}
    }
}

// // server side rendering
// export async function getServerSideProps(context){
//     const {slug} = context.query;
//     const data = Axios.get(`http://localhost:3000/api/getBlog?slug=${slug}`)
//     return{
//         props:{res:(await data).data}
//     }
// }

export default Slug