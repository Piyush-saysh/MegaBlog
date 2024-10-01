import React from "react";
import storeService from "../appwrite/stor"
import { Link } from "react-router-dom";


export default function PostCard({$id, title, featuredImage}){

    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-posts rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={storeService.getFilePreview(featuredImage)} alt={title} className="w-full h-48 object-cover rounded-xl " />                
                    </div>
                    <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}