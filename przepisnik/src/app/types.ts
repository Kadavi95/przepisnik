export type User = {
  id: number;
  nickname: string;
  password: string;
  class: string;
};

export type Recipe = {
  id: number;
  owner: string;
  name: string;
  description: string;
  imgUrl: string;
  ingriedients: Ingredients[];
};

export type Ingredients = {
  name: string;
  value: number
}
