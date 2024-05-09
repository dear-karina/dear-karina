import axios from 'axios';
import { Quote } from "../../models/quote.model";
import { inspirationalQuotes } from '../alternatives/inspirationalQuotes.alternative.data';
import { ParamIndex } from '../constants/paramIndex.enum';
import { getCurrentIndex } from '../../ultils/interactWithCurrentIndex';
export const get_quote=async (category: string="inspirational")=>{
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=' + category, {
          headers: {
            'X-Api-Key': process.env.QUOTE_API_KEY
          }
        });
        return Quote.fromJson(response.data)
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
  const index= getCurrentIndex(ParamIndex.QUOTE)
    return Quote.fromObject(inspirationalQuotes[index])
}