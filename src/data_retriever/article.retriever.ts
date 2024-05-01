import Article from "../model/article.model";
import { Topic } from "../constant/topic.enum";

export const getArticleByIndex = async (index: number, topic: Topic) => {
  const count = await Article.countDocuments();

  // Log the count
  console.log("Number of records in the database:", count);
  const filteredArticle = await Article.findOne({ index: index });
  console.log(filteredArticle);
  return filteredArticle;
};
