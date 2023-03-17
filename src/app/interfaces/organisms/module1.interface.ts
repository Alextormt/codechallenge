import { ThemeInterface } from "../config/theme.interface";
import { CardMoleculeInterface } from "../molecules/cardMolecule.interface";

export interface Module1Interface {
      theme?: ThemeInterface;
      title?: string;
      cards?: CardMoleculeInterface[];   
}