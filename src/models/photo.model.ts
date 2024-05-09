// Hamin

export class Photo {
  constructor(
    public id: number = 0,
    public url: string,
    public description: string,
    public author: string
  ) {}

  static fromJson(jsonArray: any[]): Photo[] {
    return jsonArray.map((jsonObject, index) => {
      return new Photo(
        index,
        jsonObject.urls.regular,
        jsonObject.description? jsonObject.description: jsonObject.alt_description,
        jsonObject.user.name
      );
    });
  }
  static fromObjects(objectArray: any[]): Photo[] {
    return objectArray.map((object, index) => {
      return new Photo(
        index,
        object.urls.regular,
        object.description,
        object.user.name
      );
    });
  }
  
}
