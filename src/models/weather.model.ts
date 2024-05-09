export class Weather{
    constructor(public location:string, public temperature:number, public condition:string, public icon_url:string ){}

    static fromJson(jsonObject: any): Weather {
        return new Weather(
          `${jsonObject.name} - ${jsonObject.country}`,
          jsonObject.current.temp_c,
          jsonObject.current.condition.text,
          `https:${jsonObject.current.condition.icon}`,
        );
      }
}