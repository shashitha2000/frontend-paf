import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments, FaUserCircle } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import SideBar from "../../SideBar/Sidebar";
import Status from "../PostStatus/Status";
import "../post.css";

function PostDetails() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/post");
      const postsWithLikes = response.data.map((post) => ({
        ...post,
        likeCount: 0,
      }));
      setPosts(postsWithLikes);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleLikeClick = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likeCount: post.likeCount + 1 } : post
      )
    );
  };

  const handleDeleteClick = (postId) => {
    axios.delete(`http://localhost:8080/post/${postId}`)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
      })
      .catch(error => {
        console.error("Error deleting post:", error);
      });
  };

  const handleUpdateClick = (postId) => {
    // Implement logic to navigate to the update post page or modal
    // You can use react-router-dom or a modal library for this
  };

  return (
    <div>
      <SideBar />
      <div className="child_page">
        <br /> <br /> <br /> <br />
        
        <Status />
        <div className="card_box_post">
          <div className="new_card_add">
            <p className="crep">Create New Post</p>
            <div className="mind_div">
              <p>what's on your mind?</p>
            </div>
            <button
              className="addpot_btn"
              onClick={() => (window.location.href = "/post")}
            >
              Create New Post
            </button>
          </div>
        </div>
        <div></div>
        <div className="card_box_post">
          <div className="mrg">
            {posts.map((post) => (
              <div key={post.id}>
                <div className="main_cart_section">
                  <div>
                    <FaUserCircle className="user_icon" />
                  </div>
                  <div>
                    <p className="name_post_owner">{post.name}</p>
                    <p className="gmil_post_owner">{post.gmail}</p>
                  </div>
                </div>
                <p className="title_post">{post.title}</p>
                <p className="descriptin_post"> {post.description}</p>
                {post.photos.map((photo, index) => (
                  <img
                    className="img_post_photo"
                    key={index}
                    src={`http://localhost:8080/uploads/${photo}`}
                    alt={`img ${index + 1}`}
                    onError={(e) => console.error("Error loading image:", e)}
                  />
                ))}
                <div className="post_action">
  <div className="totolike">
    <AiOutlineLike
      className="like-btn"
      onClick={() => handleLikeClick(post.id)}
    />
    <span>{post.likeCount}</span>
  </div>
  <div>
    <FaRegComments className="btneset" />
  </div>
  <div>
    <IoIosShareAlt className="btneset" />
  </div>
  <div className="action-buttons">
    <button className="delete-btn" onClick={() => handleDeleteClick(post.id)}>Delete</button>
    <button className="update-btn" onClick={() => handleUpdateClick(post.id)}>Update</button>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
