
import React, { useEffect, useState } from 'react'
import dataservice from '../appwrite/databa'
import { Container , PostCard } from '../components'
export default function AllPost(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        dataservice.getPosts([]).then((posts) => {

            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
    console.log(typeof posts);

   
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                {Array.isArray(posts) && posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard {...post} />
                    </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}