import { StaticImageData } from "next/image";

export type IProject = {
    idName: string;
    techStackFull: string[];
    gitLink: string;
    projectLink: string;
    shortDescriptionRu: string;
    shortDescriptionEng: string;
    preview: StaticImageData;
} | undefined