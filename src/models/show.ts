export type Show = {
  id: number;
  url: string;
  name: string;
  genres: any[];
  rating: { average: number };
  summary?: string;
  image?: {
             medium?: string;
             original: string;
            };
};
