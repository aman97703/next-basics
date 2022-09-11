import * as fs from "fs"
// import {} from "../blogdata/learn-js.json"

export default async function handler(req, res) {
    let data = await fs.promises.readdir(`./pages/blogdata`)
    const allBlogs = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const content = await fs.promises.readFile(`./pages/blogdata/${element}`,'utf-8')
        allBlogs.push(JSON.parse(content))
    }

    res.status(200).json(allBlogs)
    // fs.promises.readdir(`./pages/blogdata`,(err, data)=>{
    //     const allBlogs = [];
    //     if(err)
    //     {
    //         return res.status(500).json({
    //             error:err
    //         })
    //     }
    //     data.forEach((item)=>{
    //         fs.readFile(`./pages/blogdata/${item}`,'utf-8',(err, content)=>{
    //             console.log(content)
    //             allBlogs.push(content)
    //         })
    //     })
    //     return res.status(200).json(allBlogs)
    // })
}