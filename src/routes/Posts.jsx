import React from "react";

const Posts = ({ posts, togglePublished }) => {
  return (
    <div>
      <h2 className="text-left">Posts</h2>
      <ul className="list-group list-unstyled">
        <div className="row">
          {posts.map((post) => (
            <li className="col-md-4 mb-4" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Title: {post.title}</h5>
                  <p className="card-title">Author: {post.author}</p>
                  <p className="card-text">
                    Published: {post.published ? "true" : "false"}
                  </p>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => togglePublished(post.id)}
                  >
                    Toggle
                  </button>
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Posts;



