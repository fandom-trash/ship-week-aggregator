function TumblrPost({ post }) {
  const has_photos = post.type === "photo";
  let photos;

  if (has_photos) {
    photos = post.photos.map((photo) => {
      return <img src={photo.original_size.url}></img>;
    });
  }

  return (
    <div className="" key={post.id}>
      <p>{post.blog_name}</p>
      <img src={post.thumbnail_src} />
      <ul>{photos}</ul>
      <p>{post.summary}</p>
      <a href={post.post_url}>Link to post</a>
    </div>
  );
}
export default TumblrPost;
