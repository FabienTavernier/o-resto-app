export type Restaurant = {
  id: number;
  name: string;
  rating: number;
  ratingCount: number;
  description: string;
  cuisines: Cuisine[];
  city: City;
};

export type Cuisine = {
  label: string;
};

export type City = {
  name: string;
  postal_code: string;
};
