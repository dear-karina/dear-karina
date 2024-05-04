export class Quote {
  quote: string;
  author: string;
  category?: "amazing"
    | "art"
    | "attitude"
    | "beauty"
    | "best"
    | "change"
    | "communication"
    | "cool"
    | "courage"
    | "death"
    | "dreams"
    | "education"
    | "environmental"
    | "equality"
    | "experience"
    | "failure"
    | "faith"
    | "family"
    | "famous"
    | "fear"
    | "fitness"
    | "food"
    | "forgiveness"
    | "freedom"
    | "friendship"
    | "funny"
    | "future"
    | "good"
    | "great"
    | "happiness"
    | "health"
    | "home"
    | "hope"
    | "humor"
    | "imagination"
    | "inspirational"
    | "intelligence"
    | "knowledge"
    | "leadership"
    | "learning"
    | "legal"
    | "life"
    | "love"
    | "movies"
    | "success";

  constructor(quote: string, author: string, category?: Quote['category']) {
    this.quote = quote;
    this.author = author;
    this.category = category;
  }
}
