import React, { useState } from 'react';
import blogs from '../../api/blogs'
import BlogSingle from "../BlogSingle";


const BlogSection = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }
    return (

        <section className={`wpo-blog-section section-padding ${props.ptClass}`} id='blog'>
            <div className="container">
                <div className="row">
                    <div className={`wpo-section-title ${props.stitle}`}>
                        <h2>Latest Articles</h2>
                        <p>Here is my latest Blog. Where you will find my creativity
                            and my working talents.</p>
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.slice(0,2).map((blog, bl) => (
                            <div className="col col-lg-6 col-md-6 col-12" key={bl}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="wpo-blog-content">
                                        <ul>
                                            <li>By <a href="blog-single.html">{blog.author}</a></li>
                                            <li>{blog.create_at}</li>
                                        </ul>
                                        <h2 onClick={() => handleClickOpen(blog)}>{blog.title}</h2>
                                        <button className="more" onClick={() => handleClickOpen(blog)}>Read More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <BlogSingle open={open} onClose={handleClose} title={state.title} bImg={state.screens} create_at={state.create_at} author={state.author} comment={state.comment} />
        </section>
    );
}

export default BlogSection;