import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
// import axios from "axios"
import * as fs from "fs"


const blog = (props) => {
  const [blogsArr, setBlogsArr] = useState([])
  useEffect(() => {
    setBlogsArr(props.res)
  }, [props])
  
  return (
    <div className="blogs">
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        { blogsArr.map((data) => <div className={styles.blogItem} key={data.title}>
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

// static side rendering

export async function getStaticProps() {
  let data = await fs.promises.readdir(`./pages/blogdata`)
  const allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const content = await fs.promises.readFile(`./pages/blogdata/${element}`, 'utf-8')
    allBlogs.push(JSON.parse(content))
  }
  return {
    props: { res: allBlogs }
  }
}

// server side rendering
// export async function getServerSideProps(context){
//   let data = await axios.get('http://localhost:3000/api/blogs')  
//   // let res = await data.json()
//   return {
//     props : {res: data.data}
//   }
// }

export default blog