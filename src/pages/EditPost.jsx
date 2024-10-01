
import React, { useEffect, useState } from 'react'
import dataservice from '../appwrite/databa'
import { Container , PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom';
export default function EditPost(){
    const [post, setPost] = useState([]);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            dataservice.getPost(slug).then((post) => {
                if(post){
                    setPost(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug, navigate]);

     

   
    return post? (
       <div className="py-8">
         <Container>
            <PostForm post={post} />
        </Container>
       </div>
    ): null;
}