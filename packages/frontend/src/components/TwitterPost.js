function TwitterPost({ post }) {
  let images;

  if (post.img_urls && !post.video_url) {
    images = post.img_urls.map((img_url) => {
      return <img src={img_url}></img>;
    });
  }

  let video;

  if (post.video_url) {
    video = (
      <video controls="" autoplay="" name="media">
        <source src={post.video_url} type="video/mp4" />
      </video>
    );
  }

  return (
    <div className="" key={post.id}>
      <h4>from twitter</h4>
      <p>
        user: <a href={post.userProfileLink}>{post.user.name}</a>
      </p>
      {video}
      <ul>{images}</ul>
      <p>{post.text}</p>
      <a href={post.url}>Link to tweet</a>
    </div>
  );
}
export default TwitterPost;
