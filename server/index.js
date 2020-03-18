import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();

app.use(cors({
    origin: 'http://localhost:8090',
    credentials: true
}));

const fileContents = fs.readFileSync('./server/fiveLetterWords.json', 'utf-8');
const words = JSON.parse(fileContents);
const { fiveLetterWords } = words;

app.get('/', (req, res) => {
    // select a random word
    const word = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]
    // return it as the response
    res.send(word)
})
  
app.listen(3030, () => {
    //console.log('Word server listening on port 3030!')
});
  
export default app;