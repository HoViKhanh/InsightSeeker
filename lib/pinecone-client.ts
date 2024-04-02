import { Pinecone } from "@pinecone-database/pinecone";

import {env} from "./config"
import { delay } from "./utils";

let pineconeInstance: Pinecone | null = null;

async function createIndex(pc: Pinecone, indexName: string) {
    try {
        await pc.createIndex({
            name: indexName,
            dimension: 1536,
            metric: 'cosine',
            spec: {
                pod: {
                environment: env.PINECONE_ENVIRONMENT,
                podType: 'starter',
                pods: 1
                }
            }
        });
      console.log(
        `Waiting for ${env.INDEX_INIT_TIMEOUT} seconds for index initialization to complete...`
      );
      await delay(env.INDEX_INIT_TIMEOUT);
      console.log("Index created !!");
    } catch (error) {
      console.error("error ", error);
      throw new Error("Index creation failed");
    }
  }

  async function initPinecone() {
    try {
        const pc = new Pinecone({
            apiKey: env.PINECONE_API_KEY
        });
      const indexName = env.PINECONE_INDEX_NAME
      
      const existingIndexes = await pc.listIndexes();
      const existingIndexesJSON = JSON.stringify(existingIndexes);
    
      console.log("Current number of index: ", existingIndexes.indexes?.length)
      console.log(existingIndexesJSON)

      if (!existingIndexes.indexes?.length) {
        createIndex(pc, indexName);
      } else {
        console.log("Your index already exists. nice !!");
      }
      return pc;
    } catch (error) {
      console.error("error", error);
      throw new Error("Failed to initialize Pinecone");
    }
  }

  export async function getPinecone() {
    if (!pineconeInstance) {
      pineconeInstance = await initPinecone();
    }
  
    return pineconeInstance;
  }
  
