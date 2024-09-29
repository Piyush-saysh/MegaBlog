
// database -> https://appwrite.io/docs/references/cloud/client-web/databases


// query -> https://appwrite.io/docs/products/databases/queries#query-class

import conf from '../conf/conf.js'

import { Client, Account, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases ;


    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client);

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("createPost");
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("updatePost");
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("deletePost");
            return false;
        }
    }

    async getPost(slug){
        try{return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
        )}
        catch(error){
            console.log("getPost: ---- ", error);
        }
    }

    async getPosts(queries = [Query.equal('status', "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )

        } catch (error) {
            console.log("getPosts");
        }
    }

}


const dataservice = new Service();
export default dataservice;