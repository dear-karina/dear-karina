// Hamin

export class Photo {
  constructor(
    public id: number = 0,
    public url: string,
    public description: string,
    public author: string
  ) {}

  static fromJson(jsonObject: any): Photo {
    jsonObject= jsonObject[0];
    return new Photo(
      0,
      jsonObject.urls.regular,
      jsonObject.description,
      jsonObject.user.name
    );
  }
}
