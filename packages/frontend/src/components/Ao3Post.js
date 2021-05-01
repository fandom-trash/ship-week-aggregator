function Ao3Post({ post }) {
  const BASE_URL = "http://archiveofourown.org/";
  return (
    <div className="" key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <a href={`${BASE_URL}${post.link}`}>Link to story</a>
    </div>
  );
}
export default Ao3Post;
