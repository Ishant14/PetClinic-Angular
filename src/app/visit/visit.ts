import { Pet } from "../pets/pets";

export interface Visit {
    id: number;
    date: string;
    description: string;
    pet: Pet;
  
  }