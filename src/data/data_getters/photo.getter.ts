import axios from 'axios';
import { Photo } from '../../models/photo.model';
import { plavePhotos } from '../alternatives/plavePhotos.alternative.data';
export const get_photo=async (count: number=1)=>{
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.PHOTO_API_KEY}&orientation=landscape&count=${count}`);
        return Photo.fromJson(response.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Request failed:', error.message);
          console.error('Response status:', error.response?.status);
          console.error('Response data:', error.response?.data);
        } else {
          console.error('An unexpected error occurred:', error);
        }
        return get_from_alternatives(0)
      }
}

const get_from_alternatives=(count:number)=>{
    return Photo.fromObjects(plavePhotos.slice(0,count))
}