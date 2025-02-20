import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-6">
            <Container>
                {/* Image Section */}
                <div className="w-full flex justify-center mb-4 relative border rounded-lg overflow-hidden">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                    
                    {isAuthor && (
                        <div className="absolute right-4 top-4 flex flex-col sm:flex-row gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="w-full sm:w-auto">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost} className="w-full sm:w-auto">
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Title Section */}
                <div className="w-full mb-4 px-4">
                    <h1 className="text-lg sm:text-2xl font-bold text-white">{post.title}</h1>
                </div>

                {/* Content Section */}
                <div className="px-4 sm:px-6">
                    <div className="prose prose-lg max-w-full">{parse(post.content)}</div>
                </div>
            </Container>
        </div>
    ) : null;
}
