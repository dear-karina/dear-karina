// Yejun

export class Fact{
  constructor(public id: number, public title:string, public description: string, public keywords: string[]){}
  static fromJson(jsonResponse: string): Fact {
    const jsonObject = JSON.parse(jsonResponse);
    return new Fact(
      0,
      jsonObject.title,
      jsonObject.description,
      jsonObject.keywords
    );
  }
  static fromObject(object: any): Fact {
    return new Fact(
      0,
      object.title,
      object.description,
      object.keywords,
    );
  }
};
