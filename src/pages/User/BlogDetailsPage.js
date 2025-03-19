import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostBySlug } from "../../features/posts/postsSlice";
import CategoryPostList from "../../components/User/Post/CategoryPostList";

const BASE_URL = "http://localhost:44301/";

const BlogDetailsPage = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { slugPost, status } = useSelector((state) => state.posts);

    useEffect(() => {
        if (slug) {
            dispatch(fetchPostBySlug(slug));
        }
    }, [slug, dispatch]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "failed") {
        return <p>Failed to fetch post. Please try again later.</p>;
    }

    if (!slugPost || !slugPost[0]) {
        return <p>No post found with the provided slug.</p>;
    }

    console.log(slugPost);

    const post = slugPost[0]?.posts; // Extract the fetched post details

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
                                <h3 className="mb-5 heading">6 Comments</h3>
                                <ul className="comment-list">
                                    <li className="comment">
                                        <div className="vcard">
                                            <img src="images/person_2.jpg" alt="Image placeholder" />
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas
                                                earum impedit necessitatibus, nihil?
                                            </p>
                                            <p>
                                                <a href="#" className="reply rounded">
                                                    Reply
                                                </a>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="comment">
                                        <div className="vcard">
                                            <img src="images/person_1.jpg" alt="Image placeholder" />
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas
                                                earum impedit necessitatibus, nihil?
                                            </p>
                                            <p>
                                                <a href="#" className="reply rounded">
                                                    Reply
                                                </a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="comment-form-wrap pt-5">
                                    <h3 className="mb-5">Leave a comment</h3>
                                    <form action="#" className="p-5 bg-light">
                                        <div className="form-group">
                                            <label for="name">Name *</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Email *</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label for="website">Website</label>
                                            <input type="url" className="form-control" id="website" />
                                        </div>

                                        <div className="form-group">
                                            <label for="message">Message</label>
                                            <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Post Comment" className="btn btn-primary" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4 sidebar">
                            <div className="sidebar-box">
                                <h3 className="heading">Categories</h3>
                                <ul className="categories">
                                    <li>
                                        <a href="#">
                                            Food <span>(12)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Travel <span>(22)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lifestyle <span>(37)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Business <span>(42)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Adventure <span>(14)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar-box">
                                <h3 className="heading">Tags</h3>
                                <ul className="tags">
                                    <li>
                                        <a href="#">Travel</a>
                                    </li>
                                    <li>
                                        <a href="#">Adventure</a>
                                    </li>
                                    <li>
                                        <a href="#">Food</a>
                                    </li>
                                    <li>
                                        <a href="#">Lifestyle</a>
                                    </li>
                                    <li>
                                        <a href="#">Business</a>
                                    </li>
                                    <li>
                                        <a href="#">Freelancing</a>
                                    </li>
                                    <li>
                                        <a href="#">Travel</a>
                                    </li>
                                    <li>
                                        <a href="#">Adventure</a>
                                    </li>
                                    <li>
                                        <a href="#">Food</a>
                                    </li>
                                    <li>
                                        <a href="#">Lifestyle</a>
                                    </li>
                                    <li>
                                        <a href="#">Business</a>
                                    </li>
                                    <li>
                                        <a href="#">Freelancing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailsPage;
