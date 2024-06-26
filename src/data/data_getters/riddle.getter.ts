import axios from 'axios';
import { Riddle } from '../../models/riddle.model';
import { inspirationalQuotes } from '../alternatives/inspirationalQuotes.alternative.data';
import { ParamIndex } from '../constants/paramIndex.enum';
import { getCurrentIndex } from '../../ultils/interactWithCurrentIndex';
export const get_riddle=async ()=>{
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/riddles', {
          headers: {
            'X-Api-Key': process.env.RIDDLE_API_KEY
          }
        });
        return Riddle.fromJson(response.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Request failed:', error.message);
          console.error('Response status:', error.response?.status);
          console.error('Response data:', error.response?.data);
        } else {
          console.error('An unexpected error occurred:', error);
        }
        return get_from_alternatives()
      }
}

const get_from_alternatives=()=>{
  const index= getCurrentIndex(ParamIndex.RIDDLE)
    return Riddle.fromObject(inspirationalQuotes[index])
}