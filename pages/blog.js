import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Axios from "axios"

const blog = () => {
  const [blogsArr, setBlogsArr] = useState([])
  useEffect(() => {
    Axios.get('/api/blogs').then((res) => {
      setBlogsArr(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div className="blogs">
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        {
          blogsArr.map((data) => <div className={styles.blogItem} key={data.title}>
            <Link href={`/blogpost/${data.slug}`}>
              <h3>{data.title}</h3>
            </Link>
            <p>{(data.content).substr(0, 200)}...</p>
          </div>)
        }
      </main>
    </div>
  )
}

export default blog