import { articles } from '../../../data';

export default function handler({query: { id }}, res) {
  
  console.log(`Retrieving article ID ${id}`);

  const filtered = articles.find(article => article.id === id);
  console.log(typeof filtered, !!filtered, filtered)

  if (filtered) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({message: `Article ${id} not found.`});
  }
}