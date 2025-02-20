
import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-6">
      <Container>
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          All Posts
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.$id} {...post} />)
          ) : (
            <p className="text-center col-span-full text-white">
              No posts available.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
