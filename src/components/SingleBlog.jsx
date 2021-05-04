import React from "react";
import './../css/App.css';

const SingleBlog = ({ blog }) => {
    const { title, photo, link, hosting } = blog;
    return (
        <div className="single-blog my-3 d-flex flex-column justify-content justify-content-around">
        <div className="blog-img-container overflow-hidden">
            <img className=" blog-img" src={photo} alt="blog-img" />
        </div>
        <h5 ClassName="">{title}</h5>
        <a href={link} target="_blank"  rel="noopener noreferrer">
            <button className="main-button">Read at {hosting}</button>
        </a>
        </div>
    );
};

export default SingleBlog;
