import { PetType } from "../pettypes/pettype";
import { Owner } from "../owner/owner";
import { Visit } from "../visit/visit";

export interface Pet {
    id: number;
    name: string;
    birthDate: string;
    type: PetType;
    owner: Owner;
    visit: Visit[];
}