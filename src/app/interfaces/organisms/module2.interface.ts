
import { ImageAtomInterface } from "../atoms/imageAtom.interface";
import { ThemeInterface } from "../config/theme.interface";
import { InformativeListMoleculeInterface } from "../molecules/informativeListMolecule.interface";


export interface Module2Interface {
      theme?: ThemeInterface;
      informativeList?: InformativeListMoleculeInterface;
      multibannerImages?:  ImageAtomInterface[]
}