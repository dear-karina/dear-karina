// Bamby
export type Word = {
  id: number;
  word: string;
  form: "adj" | "v" | "n" | "adv";
  meaning: string;
  origin?: string;
};
