// import { useRouter } from 'next/router';
import { server } from '../../../config';
import Link from 'next/link';

const article = ({article}) => {
//  const router = useRouter();
//  const { id } = router.query; // Getting the article ID from useRouter

  return (
    <>
      <h3>{article.id}: {article.title}</h3>
      <p>{article.body}</p>
      <hr />
      <Link href='/'>Go Back</Link>
    </>
  );
}

// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article
    }
  }
}


export const getStaticPaths = async () => {
  const res = await fetch(
    `${server}/api/articles`
  );
  const articles = await res.json();
  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({params: {id: id.toString()}}));

  return {
    paths,
    fallback: false
  }
}

export default article;
