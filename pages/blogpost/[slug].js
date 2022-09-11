import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Axios from "axios"
import styles from "../../styles/blogpost.module.css"

const Slug = () => {
    const [blog, setBlog] = useState(null)
    const router = useRouter()
    const { slug } = router.query
    useEffect(() => {
        Axios.get(`/api/getBlog?slug=${slug}`).then((res) => {
            setBlog(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
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

export default Slug