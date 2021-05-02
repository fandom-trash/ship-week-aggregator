function InstaPost({ post }) {
  const text = post.edge_media_to_caption.edges[0].node.text;
  return (
    <div className="" key={post.id}>
      <h4>from insta</h4>
      <img src={window.location.origin + "/proxy/" + post.thumbnail_src} />
      <p>{text}</p>
    </div>
  );
}
export default InstaPost;
