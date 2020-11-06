const toto:string="toto";

const myFunction = (): string => toto;

type wind = {
    direction : number,
    speed : number,
    gust? : number
}

const windFromDifna : wind = {
    direction : 22,
    speed : 12,
}

interface iWind {
    direction : number,
    speed : number,
    gust? : number
}

const iWindFromDifna: iWind = {
    direction : 11,
    speed : 33,
    gust : 12
}


