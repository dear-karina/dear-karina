import * as dotenv from "dotenv";
import { getArticleByIndex } from "./data_retriever/article.retriever";
import { Topic } from "./constant/topic.enum";
import connectToMongoDB from "./database/connectToMongoDB.database";

dotenv.config();

// You need to use an asynchronous function or .then() to handle the promise returned by getArticleByIndex
async function retrieveArticle() {
  try {
    await connectToMongoDB();

    const article = await getArticleByIndex(1, Topic.MARINE);
    console.log(article); // This will log the retrieved article
    console.log(typeof article);
  } catch (error) {
    console.error("Error retrieving article:", error);
  }
}

// Call the asynchronous function
retrieveArticle();
