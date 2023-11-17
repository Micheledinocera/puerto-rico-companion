import { Edificio, EdificioProduzione } from "redux/reducers/edificiSlice";

export const EDIFICI : Edificio[] =[{
    title:"Piccolo Mercato",
    costo:1,
    rank:1
},{
    title:"Canale",
    costo:1,
    rank:1
},{
    title:"Capanna di Costruzione",
    costo:2,
    rank:1
},{
    title:"Hacienda",
    costo:2,
    rank:1
},{
    title:"Magazzino di Legname",
    costo:2,
    rank:1
},{
    title:"Mercato Nero",
    costo:2,
    rank:1
},{
    title:"Piccolo Magazzino",
    costo:3,
    rank:1
},{
    title:"Deposito",
    costo:3,
    rank:1
},{
    title:"Ospedale",
    costo:4,
    rank:2
},{
    title:"Albergo",
    costo:4,
    rank:2
},{
    title:"Grande Mercato",
    costo:5,
    rank:2
},{
    title:"Ufficio",
    costo:5,
    rank:2
},{
    title:"Stazione Commerciale",
    costo:5,
    rank:2
},{
    title:"Chiesa",
    costo:5,
    rank:2
},{
    title:"Grande Magazzino",
    costo:6,
    rank:2
},{
    title:"Piccolo Molo",
    costo:6,
    rank:2
},{
    title:"Fabbrica",
    costo:7,
    rank:3
},{
    title:"Faro",
    costo:7,
    rank:3
},{
    title:"Scuola",
    costo:8,
    rank:3
},{
    title:"Porto",
    costo:8,
    rank:3
},{
    title:"Distilleria",
    costo:8,
    rank:3
},{
    title:"Biblioteca",
    costo:8,
    rank:3
},{
    title:"Molo",
    costo:9,
    rank:3
},{
    title:"Casa delle Unioni",
    costo:9,
    rank:3
},{
    title:"Palazzo del Governatore",
    costo:10,
    rank:4
},{
    title:"Casa delle Dogane",
    costo:10,
    rank:4
},{
    title:"Fortezza",
    costo:10,
    rank:4
},{
    title:"Caserma dei pompieri",
    costo:10,
    rank:4
},{
    title:"Residenza",
    costo:10,
    rank:4
},{
    title:"Cattedrale",
    costo:10,
    rank:4
},{
    title:"Statua",
    costo:10,
    rank:4
}]

export const EDIFICI_PRODUZIONE : EdificioProduzione[]=[{
    title:"Piccola Piantagione di Frutta",
    costo:1,
    rank:1,
    piantagione:"frutta"
},{
    title:"Piccolo Zuccherificio",
    costo:2,
    rank:1,
    piantagione:"zucchero"
},{
    title:"Grande Piantagione di Frutta",
    costo:3,
    rank:2,
    piantagione:"frutta"
},{
    title:"Grande Zuccherificio",
    costo:4,
    rank:2,
    piantagione:"zucchero"
},{
    title:"Magazzino del Tabacco",
    costo:5,
    rank:3,
    piantagione:"tabacco"
},{
    title:"Torrefazione",
    costo:6,
    rank:3,
    piantagione:"caffè"
}]

export const PIANTAGIONI=[
    "mais","frutta","tabacco","zucchero","caffè"
]

export const fromEdificioToEdificioProduzione=(edificio:Edificio)=>{
    return {
        ...edificio,
        piantagione:""
    } as EdificioProduzione
}

// https://www.ravensburger.org/spielanleitungen/ecm/Spielanleitungen/27349%20anl%20%202362054.pdf?ossl=pds_text_Spielanleitung