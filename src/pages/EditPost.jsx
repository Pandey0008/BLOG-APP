import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center  p-4">
      <Container>
        {post ? (
          <div className=" shadow-lg rounded-lg p-6 max-w-2xl mx-auto w-full">
            <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4">
              Edit Post
            </h1>
            <PostForm post={post} />
          </div>
        ) : (
          <p className="text-center text-gray-300">Loading...</p>
        )}
      </Container>
    </div>
  );
}

export default EditPost;
