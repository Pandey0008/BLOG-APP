import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md  p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4 text-white">Create a New Post</h2>
        <Container>
          <PostForm />
        </Container>
      </div>
    </div>
  );
}

export default AddPost;
