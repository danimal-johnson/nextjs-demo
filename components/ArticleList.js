import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map(art => <ArticleItem key={art.id} article={art} />)}
    </div>
  )
}

export default ArticleList;
