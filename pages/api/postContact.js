// Next.js API route support: https://nextjs.org/docs/api-routes/introduction'
import * as fs from "fs";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        const data = await fs.promises.readdir('contactData');
        fs.promises.writeFile(`contactData/${data.length+1}.json`, JSON.stringify(req.body))
        res.status(200).json(req.body)
    } else {
        res.status(200).json("post req")
    }
}