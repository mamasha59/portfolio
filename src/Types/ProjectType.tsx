import { StaticImageData } from "next/image";

export type IProjects = {
    projectsShort:IProjectShort[];
    projectsFull: IProject[];
}

export type IProject = {
    idName: string;
    techStackFull: string[];
    gitLink: string;
    projectLink: string;
    shortDescriptionRu: string;
    shortDescriptionEng: string;
    preview: StaticImageData;
} | undefined

export type IProjectShort = {
    titleRu:string;
    titleEng: string;
    techStackShort:string[];
} 