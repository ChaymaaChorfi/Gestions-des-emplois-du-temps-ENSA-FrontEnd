import { Profs } from "./profs.models";

export interface NonDesponibilitie {
    id:        number;
    jour:      string;
    enseignant: Profs;
    periode:   string;
}