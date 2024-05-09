import dotenv from 'dotenv';
import { generateREADME } from './ultils/generateREADME.ultils';

dotenv.config();
console.log("Generating REAME.md...");
generateREADME()