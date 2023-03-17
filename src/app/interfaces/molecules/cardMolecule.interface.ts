import { IconSvgAtomInterface } from "../atoms/iconSvgAtom.interface";
import { ImageAtomInterface } from "../atoms/imageAtom.interface";

export interface CardMoleculeInterface {
      icon?: IconSvgAtomInterface;
      title?: string;
      extraTitle?: string;
      extraImage?: ImageAtomInterface;
      list?: string[];         
}