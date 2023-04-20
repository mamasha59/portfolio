import { StaticImageData } from "next/image";

export type Project = {
    idName: string;
    techStackFull: string[];
    gitLink: string;
    projectLink: string;
    shortDescription: string;
    preview: StaticImageData;
} | undefined