// import Articles from "./components/articles";
import Post from "./components/post";

const Blog = () => {
    return (
        <>
        <div className="blog">
            <div className="container">
                <div className="blog-content" style={{
                    padding: "0 0.75rem",
                }}>
                    <div className="blogs_container"  style={{
                        padding: "2rem 0"
                    }}>
                        {/* <Articles /> */}
                        <Post />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Blog;