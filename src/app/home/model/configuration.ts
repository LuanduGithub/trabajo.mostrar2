export class ConfigurationFull {
    success: boolean;
    msg: Configuration;
}
export class Configuration {
    id: number;
    logo: string;
    text: string;
    subtitulo: string;
    color1: string;
    color2: string;
    color3: string;
    fuente: string;
    facebook: string;
    instagram: string;
    web: string;
    whatsapp: string;
}


export class GetLocales {
    success: boolean;
    locales: Local[];
}
export class Local {
    id: number;
    logo: string;
    titulo: string;
    subtitulo: string;
}
