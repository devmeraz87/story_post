// import Articles from "./components/articles";
import Post from "./components/post";

const Blog = () => {
    return (
        <>
        <div className="blog">
            <div className="container">
                <div className="blog-content">
                    <div className="blogs_container">
                        <Post />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Blog;