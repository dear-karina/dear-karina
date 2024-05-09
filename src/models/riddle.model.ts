// Eunho
export class Riddle {
  constructor(
    public id: number = 0,
    public title: string,
    public question: string,
    public answer: string
  ) {}

  static fromJson(jsonObject: any): Riddle {
    jsonObject= jsonObject[0];
    return new Riddle(
      0,
      jsonObject.title,
      jsonObject.question,
      jsonObject.answer
    );
  }
  static fromObject(object: any): Riddle {
    return new Riddle(
      0,
      object.title,
      object.question,
      object.answer
    );
  }
}
