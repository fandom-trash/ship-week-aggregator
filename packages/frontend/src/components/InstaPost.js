function InstaPost({post}) {
    const text = post.edge_media_to_caption.edges[0].node.text;
    return (
        <div className="" key={post.id}>
            <img src={post.thumbnail_src}/>
            <p>{text}</p>
        </div>
    );
}
export default InstaPost;
