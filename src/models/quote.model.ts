// Noah
export class Quote {
  id: number;
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

  constructor(
    id: number=0,
    quote: string,
    author: string,
    category?: Quote['category']
  ) {
    this.id=id;
    this.quote = quote;
    this.author = author;
    this.category = category;
  }

  static fromJson(jsonObject: any): Quote {
    jsonObject=jsonObject[0]
    return new Quote(
      jsonObject.id,
      jsonObject.quote,
      jsonObject.author,
      jsonObject.category
    );
  }
  static fromObject(object: any): Quote {
    return new Quote(
      object.id,
      object.quote,
      object.author,
      object.category
    );
  }
}
