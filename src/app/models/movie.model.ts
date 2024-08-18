export interface Movie {
  id: number;
  title: string;
  genre: string[];
  duration: string;
  grossIncome: string;
  director_id: number;
  studio_id: number;
}

export interface Actor {
  id: number;
  name: string;
  birthdate: string;
  movies: NewMovie[];
}

export interface Director {
  id: number;
  name: string;
  birthdate: string;
  movies: NewMovie[];
}


export interface NewMovie {
  id: number;
  name: string;
}
