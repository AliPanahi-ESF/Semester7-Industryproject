import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import FormData from 'form-data';

const app = express();
const port = 5006; // Change the port if needed
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/upload', upload.single('image'), async (req, res) => {
  const { path, originalname } = req.file;

  const url = 'https://api.openai.com/v1/images/edits';
  const bearer = 'Bearer Add_your-Api_here'; // Use your actual OpenAI API key

  try {
    const formData = new FormData();
    formData.append('image', fs.createReadStream(path), originalname);
    formData.append('prompt', 'make this picture a superhero');
    formData.append('size', '1024x1024');
    formData.append('model', 'dall-e-2'); // Specify the model as DALL-E 2
    formData.append('n', 1); // Ensure generating one image
    formData.append('response_format', 'url'); // Ensure response format is URL

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: bearer,
      },
      body: formData
    });

    const data = await response.json();

    fs.unlinkSync(path); // Clean up the uploaded file

    if (response.ok) {
      res.json({ image: data.data[0].url });
    } else {
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Something bad happened: ' + error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
