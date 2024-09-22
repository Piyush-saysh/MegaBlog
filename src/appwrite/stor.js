// storage -> https://appwrite.io/docs/references/cloud/client-web/storage



import conf from '../conf/conf.js'

import { Client, Account, ID, Databases, Storage, Query } from "appwrite";


export class StorService{
    client = new Client();
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

        this.bucket = new Storage(this.client)
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("uploadFile");
            return false
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("deleteFile");
            return false;
        }

    }
    getFilePreview(){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
    

}

const storeService = StorService();
export default storeService;