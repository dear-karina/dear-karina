// Bamby
export class Word {
  constructor(
    public id: number,
    public word: string,
    public form: "adj" | "v" | "n" | "adv",
    public pronunciation: string,
    public meaning: string,
    public origin?: string
  ) {}

  static fromJson(json: string): Word {
    const jsonObject = JSON.parse(json);
    return new Word(
      jsonObject.id,
      jsonObject.word,
      jsonObject.form,
      jsonObject.pronunciation,
      jsonObject.meaning,
      jsonObject.origin
    );
  }
  static fromObject(object: any): Word {
    return new Word(
      object.id,
      object.word,
      object.form,
      object.pronunciation,
      object.meaning,
      object.origin
    );
  }
}

