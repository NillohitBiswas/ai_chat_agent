import { DataAPIClient } from "@datastax/astra-db-ts"
import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer"

import { GoogleGenerativeAI } from "@google/generative-ai"

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"

import "dotenv/config"

const { 
    ASTRA_DB_NAMESPACE,
     ASTRA_DB_COLLECTION,
      ASTRA_DB_API_ENDPOINT,
       ASTRA_DB_APPLICATION_TOKEN,
        GENAI_API_KEY 
} = process.env

const genAI = new GoogleGenerativeAI("GENAI_API_KEY")

const AIagent =[
    'https://shreejisteelcorp.com/',
    'https://onsiteteams.com/steel-rates-today-in-india-tmt-steel-price-today/'

]

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN)
const db = client.db(ASTRA_DB_API_ENDPOINT, { namespace: ASTRA_DB_NAMESPACE })

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 512,
    chunkOverlap: 100
})

const createCollection = async ()