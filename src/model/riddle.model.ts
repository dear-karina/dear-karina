// Eunho
export class Riddle {
  constructor(
    public id: number = 0,
    public title: string,
    public question: string,
    public answer: string
  ) {}

  static fromJson(jsonResponse: string): Riddle {
    const jsonObject = JSON.parse(jsonResponse)[0];
    return new Riddle(
      0,
      jsonObject.title,
      jsonObject.question,
      jsonObject.answer
    );
  }
}
