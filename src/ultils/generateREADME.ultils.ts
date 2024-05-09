import { get_fact } from "../data/data_getters/fact.getter"
import { get_photos } from "../data/data_getters/photo.getter"
import { get_quote } from "../data/data_getters/quote.getter"
import { get_riddle } from "../data/data_getters/riddle.getter"
import { get_weather } from "../data/data_getters/weather.getter"
import { get_word } from "../data/data_getters/word.getter"
import { Weather } from "../models/weather.model"
import { getCurrentTime } from "./getCurrentTime.ultils"
import { transfer_fact, transfer_quote, transfer_word, transfer_riddle, transfer_photo } from "./transferToMDSyntax.ultils"
import { write_to_file } from "./writeFile.ultils"

export const generateREADME = async () => {
    const fact = get_fact();
    const quote = await get_quote();
    const word = get_word();
    const riddle = await get_riddle();
    const photo = await get_photos(1);
    const currentTime = getCurrentTime();
    const weather: Weather | null = await get_weather() || null;
    const weather_md= weather? `<img src="${weather.icon_url}" alt="weather" height="22px" width="22px" />`: "🌀"
    const mdStart =`<h2 align="center">
    💙💜💗❤️🖤<br>
Play Reeve - Play Reality
</h2>
<h3 align="center">
    Song Of The Day 🌌💿<br><br>
<div align="center">
        <img src="lib/images/way4luv.gif"S style="border-radius: 2px;">
    </div>
    <br>

<div align="center">

![Static Badge](https://img.shields.io/badge/%EB%82%A8%EC%98%88%EC%A4%80-Nam_Yejun-blue?style=flat&label=%EB%82%A8%EC%98%88%EC%A4%80&labelColor=black) &nbsp;
![Static Badge](https://img.shields.io/badge/%ED%95%9C%EB%85%B8%EC%95%84-Han_Noah-purple?style=flat&label=%EB%82%A8%EC%98%88%EC%A4%80&labelColor=black) &nbsp;
![Static Badge](https://img.shields.io/badge/%EC%B1%84%EB%B4%89%EA%B5%AC-Chae_Bonggu-pink?style=flat&labelColor=black) &nbsp;
![Static Badge](https://img.shields.io/badge/%EB%8F%84%EC%9D%80%ED%98%B8-Do_Eunho-red?style=flat&labelColor=black) &nbsp;
![Static Badge](https://img.shields.io/badge/%EC%9C%A0%ED%95%98%EB%AF%BC-Yu_Hamin-black?style=flat&labelColor=black) &nbsp;

</div>
<h3 align="center">
     Today's Update ${weather_md}<br>
`
    const md = `
##### 🐬 Every day, on behalf of Yejunie, I deliver a story about the marine.\n${transfer_fact(fact)}\n
##### 🦙 Every day, on behalf of our Noah, I share an interesting quote.\n${transfer_quote(quote)}\n
##### 🦌 Every day, on behalf of dear Bamby-nie, I share a beautiful word with meaning.\n${transfer_word(word)}\n
##### 🐺 Every day, on behalf of Silver-ho, I offer a riddle.\n${transfer_riddle(riddle)}\n\n
##### 🐈‍⬛ OKAYY!! Lastly, on behalf of Haminie, I share a photo you may like to see.\n${transfer_photo(photo[0])}\n
`;

const mdEnd = `---
#### Techs and Tools used to create this file

<p align="center">
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/markdown.svg" alt="markdown" height="22px" width="22px" />
  &nbsp;&nbsp;
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/githubactions.svg" alt="githubactions" height="22px" width="22px" />
  &nbsp;&nbsp;
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/canva.svg" alt="canva" height="22px" width="22px" />
  &nbsp;&nbsp;
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/typescript.svg" alt="typescript" height="22px" width="22px" />
</p>

#### APIs used

**_Quote:_** [API Ninja - Quotes](https://api-ninjas.com/api/quotes)<br>
**_Riddle:_** [API Ninja - Riddles](https://api-ninjas.com/api/riddles)<br>
**_Photo:_** [Unsplash](https://unsplash.com/developers)<br>
**_Weather:_** [OpenWeather](https://openweathermap.org)

---

##### This file is updated every day. Last time at: ${currentTime} GMT + 7 🐢💚

---
`;


    await write_to_file(`${mdStart}${md}${mdEnd}`, 'test.md');
}
