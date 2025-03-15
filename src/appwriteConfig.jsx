import { Client, Account, Storage } from "appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "67cf394e002c813be4b9",
};

// Initialize Appwrite Client
export const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

//initialize storage sevice
export const storage = new Storage(client);
// Initialize Account Service
export const account = new Account(client);
