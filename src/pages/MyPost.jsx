import react, { useEffect, useState } from "react";
import dataservice from "../appwrite/databa";
import { Container , PostCard } from '../components'
import { useSelector } from "react-redux";


export default function MyPost(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
         dataservice.getPosts([]).then((post)=>{
            if(post){
                setPosts(post.documents)
            }
         })
    },[])

    const userData = useSelector((state)=>state.auth.userData);

    return(

            <div className="w-full py-8">
                <Container>
                    <div className="flex flex-wrap">
                        {Array.isArray(posts) && posts.map((post)=>(
                            ( post && userData && post.userId === userData.$id)?(
                                <div key={post.$id}className="p-2 w-1/4">
                                    <PostCard {...post} />
                                </div>
                        ):null
                        ))}
                    </div>
                </Container>

            </div>       

    )
}