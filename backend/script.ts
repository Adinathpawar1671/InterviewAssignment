import { prisma } from './lib/prsima';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded()


app.use(express.json());
app.use(cors());

app.post("/api/post", async (req, res) => {

  const { title, description, image, slug } = req.body;

  try {
    const createPost = await prisma.post.create({
        data: {
            title: title,
            description: description,
            image: image, 
            slug: slug,
        }
    });
    res.status(201).json({ success: true, data: createPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Database insertion failed' });
  }
});

app.get("/api/post/:slug", async (req, res) => {
  const { slug } = req.params; 

  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: slug, 
      },
    });


    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.status(200).json({ success: true, data: post });

  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ success: false, error: "Database query failed" });
  }
});
app.listen(5000, () => console.log('Server running on port 5000'))

