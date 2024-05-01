import mongoose from "mongoose";
import { Topic } from "../constant/topic.enum";
const referenceSchema = new mongoose.Schema({
  title: String,
  url: String,
});

const imageSchema = new mongoose.Schema({
  url: String,
  caption: String,
});

const sectionSchema = new mongoose.Schema({
  heading: String,
  content: String,
  images: imageSchema,
});

const articleSchema = new mongoose.Schema({
  title: String,
  references: [referenceSchema],
  summary: String,
  section: [sectionSchema], // Change sections to section
  index: Number,
  topic: String,
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
