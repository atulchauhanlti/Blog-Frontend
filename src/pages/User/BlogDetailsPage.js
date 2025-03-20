import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostBySlug } from "../../features/posts/postsSlice";
import PostSidebar from "../../components/User/Post/PostSidebar";

const BASE_URL = "http://localhost:44301/";

const BlogDetailsPage = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { slugPost, status } = useSelector((state) => state.posts);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [localComments, setLocalComments] = useState([]); 

    useEffect(() => {
        if (slug) {
            dispatch(fetchPostBySlug(slug));
        }
    }, [slug, dispatch]);

    useEffect(() => {
        if (slugPost && slugPost[0]) {
            setLocalComments(slugPost[0].posts?.comments || []);
        }
    }, [slugPost]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "failed") {
        return <p>Failed to fetch post. Please try again later.</p>;
    }

    if (!slugPost || !slugPost[0]) {
        return <p>No post found with the provided slug.</p>;
    }

    const post = slugPost[0]?.posts; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = { Name: name, Email: email, Content: content };
    
        try {
            const response = await fetch(`${BASE_URL}api/Posts/${post?.id}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment),
            });
    
            if (response.ok) {
                const savedComment = await response.json(); 
                
                const formattedComment = {
                    author: savedComment.Name || name, 
                    content: savedComment.Content || content, 
                    commentedAt: new Date().toISOString(),
                };
    
                setLocalComments((prevComments) => [formattedComment, ...prevComments]);
    
                setName("");
                setEmail("");
                setContent("");
            } else {
                console.error("Failed to post comment");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <>
            <div
                className="site-cover site-cover-sm same-height overlay single-page"
                style={{
                    backgroundImage: `url('${post.imageUrl ? `${BASE_URL}${post.imageUrl.replace(/\\/g, "/")}` : "default-image.jpg"}')`,
                }}
            >
                <div className="container">
                    <div className="row same-height justify-content-center">
                        <div className="col-md-6">
                            <div className="post-entry text-center">
                                <h1 className="mb-4">{post.title}</h1>
                                <div className="post-meta align-items-center text-center">
                                    <span className="d-inline-block mt-1">By {post.author || "Unknown Author"}</span>
                                    <span>&nbsp;-&nbsp; {new Date(post.publishedAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row blog-entries element-animate">
                        <div className="col-md-12 col-lg-8 main-content">
                            <div className="post-content-body">
                                <div dangerouslySetInnerHTML={{ __html: post.content || "No content available for this post." }} />
                            </div>

                            <div className="pt-5">
                                <p>
                                    Categories:{" "}
                                    {post.categories &&
                                        post.categories.map((category, index) => (
                                            <a key={index} href={`/category/${category}`} className="me-2">
                                                {category}
                                            </a>
                                        ))}
                                    Tags:{" "}
                                    {post.tags &&
                                        post.tags.map((tag, index) => (
                                            <a key={index} href={`#tag-${tag}`} className="me-2">
                                                #{tag}
                                            </a>
                                        ))}
                                </p>
                            </div>

                            <div className="pt-5 comment-wrap">
                                <h3 className="mb-5 heading">{localComments.length} Comments</h3>
                                <ul className="comment-list">
                                    {localComments.map((comment, index) => (
                                        <li className="comment" key={index}>
                                            <div className="vcard">
                                                <img src="../../assets/images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>{comment.author || comment.Name}</h3>
                                                <div className="meta">{new Date(comment.commentedAt || Date.now()).toLocaleString()}</div>
                                                <p>{comment.content || comment.Content}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="comment-form-wrap pt-5">
                                    <h3 className="mb-5">Leave a comment</h3>
                                    <form onSubmit={handleSubmit} className="p-5 bg-light">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" cols="30" rows="10" className="form-control" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Post Comment" className="btn btn-primary" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <PostSidebar />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailsPage;
