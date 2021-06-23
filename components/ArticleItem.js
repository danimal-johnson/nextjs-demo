import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({article}) => {
  return (
    <div className={articleStyles.card}>
      <h2>{article.id}</h2>
      <p>{article.title}</p>
    </div>
  )
}

export default ArticleItem;
