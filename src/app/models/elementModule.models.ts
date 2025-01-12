import { Module } from "./modules.models";
import { Profs } from "./profs.models";
import { Salle } from "./salles.models";

export interface ElementDeModule {
    id:            number;
    volumeHoraire: number;
    libelle:       string;
    module:        Module ;
    enseignant:    Profs;
    jour:            string;
    periode:     string;
    salle:           Salle;
}