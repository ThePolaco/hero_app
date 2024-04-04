export interface Hero {
    id: number;
    name: string;
    slug: string;
    powerstats: PowerStatus;
    appearance: Apparience;
    biography: Biography;
    work: Work;
    connections: Connections;
    images: Images;
}

export interface HeroAction {
    heroId: number;
    action: string;
}

export interface HeroForm{
    existingHero: boolean;
    heroId: number | null;
    name: string;
    fullName: string;
    alterEgos: string;
    publisher: string;
    alignment: string;
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    gender: string;
    race: string;
    height: string;
    eyeColor: string;
    hairColor: string;
    imgUrl: string;

}

interface PowerStatus {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}

interface Apparience {
    gender: string;
    race: string;
    height: Array<string>;
    weight: Array<string>;
    eyeColor: string;
    hairColor: string;
}

interface Biography {
    fullName: string;
    alterEgos: string;
    aliases: Array<string>;
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
}

interface Work {
    occupation: string;
    base: string;
}

interface Connections {
    groupAffiliation: string;
    relatives: string;
}

interface Images {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}

