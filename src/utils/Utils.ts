import { Edificio, EdificioProduzione } from "redux/reducers/edificiSlice";

export const EDIFICI : Edificio[] =[{
    title:"Piccolo Mercato",
    costo:1,
    rank:1,
    espansione:"base",
    desc:"Se il proprietario di un Piccolo Mercato vende un barile di merce durante la fase del commercio, riceve una moneta in più dalla banca. Esempio: il giocatore vende un barile di mais e riceve 1 moneta.",
    shortDesc:"+1 Moneta quando si vende"
},{
    title:"Canale",
    costo:1,
    rank:1,
    espansione:"edifici",
    desc:"Se il proprietario di un Canale con una Grande Piantagione di Frutta produce almeno un barile di frutta, ne riceve un barile in più. Lo stesso vale per il Grande Zuccherificio che fornirà un barile di zucchero in più. Nota: il Canale non può essere sfruttato con la Piccola Piantagione di Frutta e con il Piccolo Zuccherificio",
    shortDesc:"+1 barile di merce con la Grande Piantagione di Frutta/il Grande Zuccherificio"
},{
    title:"Capanna di Costruzione",
    costo:2,
    rank:1,
    espansione:"base",
    desc:"Al proprio turno durante la fase di piantagione, il proprietario di una Capanna di Costruzione può prendere una Cava anziché una delle tessere Piantagione scoperte. Nota: se è l'Agricoltore a possedere una Capanna di Costruzione, potrà tuttavia prendere soltanto una Cava. ",
    shortDesc:"Cava anziché Piantagione"
},{
    title:"Hacienda",
    costo:2,
    rank:1,
    espansione:"base",
    desc:"Al proprio turno, prima di prendere una delle tessere Piantagione scoperte, il proprietario di una Hacienda può prelevare anche una tessera Piantagione in cima a una delle pile coperte e posizionarla su uno dei suoi spazi Territorio liberi. Nota: se un giocatore prende una delle tessere coperte, dovrà per forza posizionarla sulla propria Isola. Se possiede anche una Capanna di Costruzione, non può prendere una Cava al posto della tessera coperta. ",
    shortDesc:"+1 Piantagione quando si pianta"
},{
    title:"Magazzino di Legname",
    costo:2,
    rank:1,
    espansione:"edifici",
    desc:"Al proprio turno durante la fase di piantagione, il proprietario di un Magazzino di Legname può posizionare la nuova tessera Piantagione a cui ha diritto con il retro rivolto verso l'alto (= Foresta) su uno spazio Territorio libero, dove rimarrà fino alla fine della partita. Le Cave non possono essere utilizzate come Foreste. Se costruisce un Edificio, paga 1 moneta in meno per ogni due Foreste presenti sulla sua Isola (indipendentemente dal fatto che il suo Magazzino del Legname sia occupato o meno). Questo risparmio può essere combinato con le Cave e non è soggetto a limitazioni in termini di file. Attenzione: le Foreste non vengono occupate con i Lavoratori.",
    shortDesc:"Foresta invece di Piantagione; 2 Foreste = 1 moneta quando si costruisce"
},{
    title:"Mercato Nero",
    costo:2,
    rank:1,
    espansione:"edifici",
    desc:"Quando il proprietario di un Mercato Nero costruisce un Edificio, può \"pagare\" (restituire nella rispettiva riserva) un Lavoratore, un barile di merce e un punto vittoria, risparmiando 1 moneta sui costi di costruzione. Attenzione: un giocatore può usare il Mercato Nero solo se non ha abbastanza soldi per comprare l'Edificio; quindi, dopo aver costruito, un giocatore non può avere denaro avanzato. Nota: se un giocatore restituisce un Lavoratore o un punto vittoria dopo che sono state già raggiunte le condizioni per la fine della partita il gioco termina comunque! Un giocatore non può restituire il Lavoratore che occupa il Mercato Nero. ",
    shortDesc:"-1 moneta per ogni PV, merce e Lavoratore quando si costruisce (max 1 per tipo)"
},{
    title:"Piccolo Magazzino",
    costo:3,
    rank:1,
    espansione:"base",
    desc:"Come già descritto alla sezione \"Il Capitano\", alla fine della fase di spedizione i giocatori devono disporre di spazi di deposito per le merci non spedite, altrimenti devono restituirle alla riserva. Alla fine di una fase di spedizione, il proprietario di un Piccolo Magazzino può conservare, in aggiunta al barile che normalmente gli è concesso tenere, qualsiasi numero di barili di un ulteriore tipo di merce. Nota: nel depositarle nei Magazzini, le merci non vengono effettivamente posizionate al loro interno, ma rimangono sul ritratto. Depositare le merci non esenta dall'obbligo di spedirle, ma soltanto dal doverle rimettere nella riserva dopo la spedizione. ",
    shortDesc:"Conservare +1 tipo di merce"
},{
    title:"Deposito",
    costo:3,
    rank:1,
    espansione:"edifici",
    desc:"Alla fine della fase di spedizione, il proprietario di un Deposito può conservare, oltre al singolo barile di merce residuo, fino a tre barili aggiuntivi di un qualsiasi tipo di merce. ",
    shortDesc:"Conservare +3 barili di merci"
},{
    title:"Ospedale",
    costo:4,
    rank:2,
    espansione:"base",
    desc:"Quando il proprietario di un Ospedale prende una tessera Isola (Piantagione o Cava) durante la fase di piantagione, potrà subito prelevare anche un Lavoratore dalla riserva e posizionarlo sulla tessera Isola appena giocata. Nota: se in qualità di proprietario di una Hacienda, il giocatore prende anche una tessera coperta, per questa non riceve alcun Lavoratore. Se nella riserva non c'è più nessun Lavoratore (possibile verso la fine del gioco), può prenderne uno dalla Sala di Reclutamento. Se anche qui non ne è presente nessuno, rimarrà a mani vuote.",
    shortDesc:"+1 Lavoratore nella Piantagione"
},{
    title:"Albergo",
    costo:4,
    rank:2,
    espansione:"edifici",
    desc:"Durante la fase di reclutamento, il proprietario di un Albergo può collocarci fino a due Lavoratori. Può poi spostare a piacere i suoi ospiti all'inizio, durante o alla fine di qualsiasi fase, dove rimarranno e avranno immediatamente efficacia (almeno fino alla fase di reclutamento successiva). Esempio: alla fine della fase di spedizione, il giocatore sposta un ospite nel suo Deposito e lo utilizza subito per conservare merci in eccedenza. In un turno successivo, il giocatore assume come ruolo il Mercante e all'inizio della fase sposta il secondo ospite nella Biblioteca in modo da raddoppiare il vantaggio da Mercante. ",
    shortDesc:"Spostare fino a 2 Lavoratori"
},{
    title:"Grande Mercato",
    costo:5,
    rank:2,
    espansione:"base",
    desc:"Se il proprietario di un Grande Mercato vende un barile di merce durante la fase del commercio, riceve due monete in più dalla banca. Nota: se un giocatore possiede un Piccolo Mercato e un Grande Mercato, quando vende riceve 3 monete in più. ",
    shortDesc:"+2 monete con la vendita"
},{
    title:"Ufficio",
    costo:5,
    rank:2,
    espansione:"base",
    desc:"Se il proprietario di un Ufficio vende una merce durante la fase del commercio, può scegliere di vendere una merce dello stesso tipo di quelle già presenti nella Casa di Commercio. Se la Casa di Commercio è già piena, non è possibile Sfruttare l'Ufficio. Esempio: nella Casa di Commercio è già presente un barile di tabacco. È il turno del proprietario di un Ufficio che vende un ulteriore barile di tabacco. Successivamente è il turno del proprietario di un altro Ufficio che, a sua volta, può vendere il tabacco alla Casa di Commercio.",
    shortDesc:"Vendere merci uguali"
},{
    title:"Stazione Commerciale",
    costo:5,
    rank:2,
    espansione:"edifici",
    desc:"Al proprio turno durante la fase del commercio, il proprietario di una Stazione Commerciale può scegliere se vendere un barile di merce alla Casa di Commercio come di consueto secondo il regolamento oppure vendere al prezzo regolare 1 barile di merce qualsiasi con la sua Stazione Commerciale rimettendo quel barile direttamente nella riserva. Attenzione: non è possibile utilizzare il Mercato con la Stazione Commerciale, ma è possibile sfruttare il vantaggio del Mercante.",
    shortDesc:" 1 Casa di Commercio personale"
},{
    title:"Chiesa",
    costo:5,
    rank:2,
    espansione:"edifici",
    desc:"Il proprietario di una Chiesa riceve 1 punto vittoria quando costruisce un Edificio dalla seconda o dalla terza fila e 2 punti vittoria quando costruisce un Edificio dalla quarta fila. Nota: il giocatore non riceve punti vittoria per la costruzione della Chiesa stessa. ",
    shortDesc:"0/1/1/2 PV quando si costruisce"
},{
    title:"Grande Magazzino",
    costo:6,
    rank:2,
    espansione:"base",
    desc:"Alla fine di una fase di spedizione, il proprietario di un Grande Magazzino può conservare, in aggiunta al barile di merce che normalmente gli è concesso tenere, qualsiasi numero di barili di due ulteriori tipi di merce. Nota: se un giocatore possiede un Piccolo Magazzino e un Grande Magazzino, può conservare un qualsiasi numero di merci fino a 3 tipi e un barile di merce di un quarto tipo. ",
    shortDesc:"Conservare +3 tipo di merce, +1 barile di un tipo"
},{
    title:"Piccolo Molo",
    costo:6,
    rank:2,
    espansione:"edifici",
    desc:"Il Piccolo Molo si utilizza secondo le stesse condizioni del Molo (grande), con le due seguenti differenze: con il Piccolo Molo il giocatore può caricare anche tipi diversi di merce durante la spedizione, ma riceve solo 1 punto vittoria per ogni due barili caricati. Inoltre, a differenza del Molo, il giocatore non deve caricare tutti i suoi barili. Nota: se un giocatore possiede anche un Molo (grande), può utilizzare entrambi nell'ordine che preferisce. ",
    shortDesc:" 1 nave da carico personale (½ PV)"
},{
    title:"Fabbrica",
    costo:7,
    rank:3,
    espansione:"base",
    desc:"Se il proprietario di una Fabbrica produce più di un tipo di merce durante la fase di produzione, guadagnerà denaro dalla banca. Per due tipi di merce guadagna 1 moneta, per tre tipi di merce guadagna 2 monete, per quattro tipi di merce 3 monete e per tutti e cinque i tipi guadagna 5 monete. In questo caso, il numero di barili prodotti è irrilevante. Esempio: il proprietario di una Fabbrica possiede 3 piantagioni di mais, 3 di canna da zucchero e 1 di tabacco e gli Edifici di produzione corrispondenti. Nella fase di produzione in corso, tuttavia, può produrre solo 2 barili di zucchero e 1 di tabacco, in quanto nella riserva non è più disponibile il mais e sono rimasti solo due barili di zucchero. Riceverà quindi 1 moneta dalla banca per aver prodotto due tipi di merce. ",
    shortDesc:"+0/1/2/3/5 monete quando si produce"
},{
    title:"Faro",
    costo:7,
    rank:3,
    espansione:"edifici",
    desc:"Il Faro si utilizza in modo simile al Porto, ma fa guadagnare denaro invece di punti vittoria. Se il proprietario del Faro è anche il Capitano, riceverà quindi un'ulteriore moneta. Nota: per ottenere monete in più con le spedizioni non occorre essere il Capitano. Viceversa, non occorre effettuare spedizioni per ottenere la moneta in più in qualità di Capitano. ",
    shortDesc:"+ monete quando si spedisce"
},{
    title:"Scuola",
    costo:8,
    rank:3,
    espansione:"base",
    desc:"Quando il proprietario di una Scuola costruisce un Edificio durante la fase di costruzione, potrà subito prelevare anche un Lavoratore dalla riserva e posizionarlo sull'Edificio appena costruito. Nota: se costruisce un Edificio con più di un semicerchio, riceverà comunque solo un Lavoratore. Se nella riserva non c'è più nessun Lavoratore (possibile verso la fine del gioco), può prenderne uno dalla Sala di Reclutamento. Se anche qui non ne è presente nessuno, rimarrà a mani vuote. ",
    shortDesc:"+1 Lavoratore quando si costruisce"
},{
    title:"Porto",
    costo:8,
    rank:3,
    espansione:"base",
    desc:"Ogni volta che il proprietario di un Porto carica una merce durante la fase di spedizione, ottiene un punto vittoria aggiuntivo. Esempio: il proprietario di un Porto (e di un Molo) può caricare solo 3 dei suoi 5 barili di tabacco sulla \"nave da tabacco\", poiché è ormai piena: per questo riceve 3 + 1 PV. Al giro successivo di spedizioni carica due barili di zucchero sulla nave corrispondente: 2 + 1 PV. A un giro di spedizioni successivo sfrutta il Molo e rimette i due barili di tabacco rimanenti nella riserva: ottiene nuovamente 2 + 1 PV. In questo modo, in un'unica fase di spedizione, ha ottenuto 3 PV supplementari grazie al Porto. ",
    shortDesc:"+ PV con le spedizioni"
},{
    title:"Distilleria",
    costo:8,
    rank:3,
    espansione:"edifici",
    desc:"Il proprietario riceve una moneta in meno del numero totale di barili che ha appena prodotto del suo tipo \"migliore\" (ossia quello che gli ha generato il maggior numero di barili, eventualmente includendo il barile aggiuntivo dovuto al vantaggio dell'Artigiano). Attenzione: la produzione di mais non ha valore nel caso della Distilleria! ",
    shortDesc:"+ monete quando si produce"
},{
    title:"Biblioteca",
    costo:8,
    rank:3,
    espansione:"edifici",
    desc:"Il proprietario di una Biblioteca raddoppia il vantaggio del proprio ruolo. Se sceglie l'Agricoltore, può prendere una Piantagione o una Cava all’inizio del proprio turno. Dopo che tutti gli altri hanno giocato il proprio turno, il giocatore può scegliere una Piantagione tra quelle rimanenti, ma non può prendere una seconda Cava. Se sceglie l’Artigiano può prendere due barili di tipi diversi di merce. Nota: se nella fase di piantagione il proprietario di una Biblioteca usa un Ospedale, ottiene un Lavoratore solo per la prima tessera; se usa una Capanna di Costruzione può prendere anche una Cava come seconda tessera. ",
    shortDesc:"Vantaggio doppio"
},{
    title:"Molo",
    costo:9,
    rank:3,
    espansione:"base",
    desc:"Quando arriva il turno di un giocatore durante la fase di spedizione, questo dovrà caricare le merci alle stesse condizioni descritte per \"Il Capitano\". Ma se possiede un Molo, può usarlo al proprio turno come segue: invece che su una delle tre navi da carico, può mettere tutti i suoi barili di un qualsiasi tipo di merce nella riserva ricevendo lo stesso numero di punti vittoria. (Ha quindi costruito e utilizzato una nave personale - immaginaria - con capacità illimitata). Quando è di nuovo il suo turno nella fase di spedizione in corso, dovrà caricare come di consueto un altro tipo di merce su una nave, se è (ancora) in grado di farlo, e così via. Il Molo, come tutti gli altri Edifici beige, può essere usato solo una volta per ogni fase dal suo proprietario, che può però scegliere in quale momento. La \"nave sul Molo\" personale, a differenza delle tre navi da carico, può contenere anche un tipo di merce che si trova già su una delle navi o che anche il proprietario dell'altro Molo ha spedito. ",
    shortDesc:"1 nave da carico personale"
},{
    title:"Casa delle Unioni",
    costo:9,
    rank:3,
    espansione:"edifici",
    desc:"Non appena il proprietario di una Casa delle Unioni svolge il suo primo turno nella fase di spedizione, riceve per prima cosa 1 punto vittoria ogni 2 barili dello stesso tipo di merce sul proprio ritratto. In seguito, procede secondo le consuete regole di spedizione. Esempio: il giocatore ha 3 mais, 2 frutti e 1 caffè: ottiene 2 PV",
    shortDesc:"+ PV prima della spedizione"
},{
    title:"Palazzo del Governatore",
    costo:10,
    rank:4,
    espansione:"base",
    desc:"Alla fine della partita, il proprietario del Palazzo del Governatore occupato riceve 1 PV aggiuntivo per ciascuno dei suoi Edifici beige (occupati o non occupati) (compreso il Palazzo del Governatore). Esempio: alla fine della partita, un giocatore possiede i seguenti Edifici beige: l'Hacienda, la Capanna di Costruzione, il Grande Magazzino, il Porto, la Residenza e il Palazzo del Governatore (occupato): guadagna 7 PV aggiuntivi.",
    shortDesc:"+1 PV per ogni Edificio beige personale"
},{
    title:"Casa delle Dogane",
    costo:10,
    rank:4,
    espansione:"base",
    desc:"Alla fine della partita, il proprietario della Casa delle Dogane occupata riceve 1 PV aggiuntivo per ogni 4 punti vittoria ottenuti. Il giocatore non conta i punti vittoria dei propri Edifici, ma solo i gettoni dei punti vittoria. Esempio: alla fine della partita, il proprietario della Casa delle Dogane ha un totale di 23 punti vittoria sotto forma di gettoni da 1 e da 5: guadagna quindi 5 PV aggiuntivi. ",
    shortDesc:"+1 PV per ogni 4 PV (solo gettoni!) "
},{
    title:"Fortezza",
    costo:10,
    rank:4,
    espansione:"base",
    desc:"Alla fine della partita, il proprietario della Fortezza occupata riceve 1 PV aggiuntivo per ogni tre Lavoratori sulla sua plancia di gioco. Esempio: alla fine della partita, il proprietario della Fortezza ha un totale di 20 Lavoratori sulle sue Piantagioni, Cave, Edifici e sul proprio ritratto: guadagna quindi 6 PV aggiuntivi.",
    shortDesc:"+1 PV per ogni 3 Lavoratori"
},{
    title:"Caserma dei pompieri",
    costo:10,
    rank:4,
    espansione:"base",
    desc:"Il proprietario della Caserma dei pompieri occupata ottiene alla fine della partita 1 PV per ogni suo Edificio di produzione piccolo (occupato e non), ossia la Piccola Piantagione di Frutta e il Piccolo Zuccherificio, nonché 2 PV per ogni Edificio di produzione grande (occupato e non), ossia la Grande Piantagione di Frutta, il Grande Zuccherificio, il Magazzino del tabacco, la Torrefazione. Esempio: il proprietario della Caserma dei pompieri possiede alla fine della partita il Piccolo e il Grande Zuccherificio, la Piccola Piantagione di Frutta e la Torrefazione: ottiene 6 PV aggiuntivi.",
    shortDesc:"+1/+2 PV per ogni Edificio di produzione piccolo/grande"
},{
    title:"Residenza",
    costo:10,
    rank:4,
    espansione:"base",
    desc:"Il proprietario di una Residenza occupata riceve alla fine della partita punti vittoria aggiuntivi per le Piantagioni e le Cave (occupate e non) che possiede nei suoi spazi Territorio. Per un massimo di nove Territori occupati riceve 4 PV, per dieci Territori riceve 5 PV, per undici Territori riceve 6 PV e per tutti i dodici Territori riceve 7 PV. Esempio: il proprietario della Residenza ha Piantagioni o Cave su 10 dei suoi 12 spazi Territorio: ottiene 5 PV aggiuntivi.",
    shortDesc:"+4/5/6/7 PV per 1-9/10/11/12 tessere Isola collocate"
},{
    title:"Cattedrale",
    costo:10,
    rank:4,
    espansione:"edifici",
    desc:"Alla fine della partita, il proprietario della Cattedrale occupata riceve punti vittoria aggiuntivi ogni 3 tessere Isola uguali. Con la prima \"tripletta\" ottiene 1 PV, con la seconda altri 2 PV, con la terza altri 3 PV e con la quarta altri 4 PV. Il giocatore ottiene quindi 0, 1, 3, 6 o 10 punti vittoria aggiuntivi per la Cattedrale. Esempio: il proprietario della Cattedrale possiede alla fine della partita le seguenti tessere Isola: 6 Foreste, 3 Cave, 2 Mais, 1 Caffè. Ottiene 6 PV aggiuntivi. ",
    shortDesc:"+1/3/6/10 PV per tripletta di tessere Isola"
},{
    title:"Statua",
    costo:10,
    rank:4,
    espansione:"edifici",
    desc:"Non serve piazzare nessun Lavoratore sulla Statua. Alla fine della partita, la Statua vale 8 punti vittoria.",
    shortDesc:"8PV"
}]

export const EDIFICI_NOBILI : Edificio[]=[{
    title:"Ufficio Territoriale",
    costo:2,
    rank:1,
    espansione:"nobili",
    desc:"Al proprio turno durante la fase del commercio, il proprietario di un Ufficio Territoriale può pagare 1 moneta per comprare la Piantagione in cima a una delle pile coperte e posizionarla sulla propria Isola (se l'Ufficio Territoriale è occupato da un Lavoratore) oppure mettere una qualsiasi delle sue Piantagioni nella pila degli scarti e guadagnare 1 moneta (se l'Ufficio Territoriale è occupato da un Borghese). Nota: se il proprietario di un Ufficio Territoriale possiede anche un Magazzino del Legname, può scegliere di giocare la Piantagione anche come una Foresta. Se la Piantagione scartata è occupata da un Lavoratore o un Borghese, questo verrà collocato sul ritratto (così come nel caso dell'Ente Parco). ",
    shortDesc:"Vendere (lavoratore) o comprare (nobile) 1 Piantagione nella fase di commercio"
},{
    title:"Cappella",
    costo:3,
    rank:1,
    espansione:"nobili",
    desc:"In ogni fase di produzione, il proprietario di una Cappella riceve 1 moneta (se è occupata da un Lavoratore) o 1 punto vittoria (se è occupata da un Borghese). ",
    shortDesc:"+1 moneta (lavoratore) o +1 PV (nobile) quando si produce"
},{
    title:"Ente Parco",
    costo:4,
    rank:2,
    espansione:"nobili",
    desc:"Alla fine di ogni fase di piantagione, il proprietario di un Ente Parco occupato da un Lavoratore può rimettere nella pila degli scarti una delle sue Piantagioni (o una Foresta). Se il suo Ente Parco è occupato da un Borghese e se alla fine di una fase di piantagione possiede (ovviamente!) il maggior numero di spazi Territorio vuoti, riceve 2 punti vittoria. ",
    shortDesc:"-1 Piantagione (lavoratore) o Isola più vuota: +2 PV (nobile)"
},{
    title:"Ufficio di Zona",
    costo:5,
    rank:2,
    espansione:"nobili",
    desc:"Il proprietario di un Ufficio di Zona occupato da un Lavoratore risparmia 1 moneta nella costruzione di un Edificio piccolo (prima-terza fila). Oppure, se occupato da un Borghese, risparmia 2 monete nella costruzione di un Edificio grande (quarta fila). Attenzione: questo non vale al contrario, così come per i tre Edifici sopra citati! Non vi è diritto allo sconto se si costruisce un Edificio grande e un Ufficio di Zona è occupato con un Lavoratore, né se si costruisce un Edificio piccolo e un Ufficio di Zona è occupato da un Borghese. ",
    shortDesc:"-1 (lavoratore) o -2 (nobile) monete quando si costruisce"
},{
    title:"Ufficio di Fornitura",
    costo:6,
    rank:2,
    espansione:"nobili",
    desc:"Quando il proprietario di un Ufficio di Fornitura svolge il suo primo turno durante la fase di spedizione, può rimettere un barile di merce nella riserva (prima di procedere alla prima spedizione) per ogni Borghese presente sulla sua Isola e ottenere così 1 PV. Nota: se l'Edificio è occupato da un Lavoratore o da un Borghese non ha alcun valore. Questo vale anche per i tre Edifici di seguito! Attenzione: i barili di merci restituiti devono essere tutti dello stesso tipo! I barili di merci restituiti non danno diritto a nessun altro bonus. ",
    shortDesc:"+1 PV per ogni barile di merce reso per ciascun Borghese"
},{
    title:"Villa",
    costo:7,
    rank:3,
    espansione:"nobili",
    desc:"Al proprio turno durante la fase di reclutamento, il proprietario di una Villa riceve 1 Borghese aggiuntivo direttamente dalla riserva (e non dalla Sala di reclutamento). Se non ci sono più Borghesi nella riserva, può prendere in alternativa un Lavoratore (se ancora disponibili). ",
    shortDesc:"+1 Borghese dalla riserva"
},{
    title:"Sartoria",
    costo:8,
    rank:3,
    espansione:"nobili",
    desc:"A ogni fase di produzione, il proprietario di una Sartoria ottiene 1 moneta per ogni Borghese sulla sua plancia Isola. Nota: la Sartoria (barra rossa) vale come Edificio di produzione grande (v. \"Caserma dei pompieri\").",
    shortDesc:"+1 moneta per ogni Borghese"
},{
    title:"Piazza della Città",
    costo:10,
    rank:4,
    espansione:"nobili",
    desc:"Alla fine della partita, il proprietario della Piazza della città occupata ottiene 1 punto vittoria aggiuntivo per ogni Borghese sulla sua plancia Isola (ottiene quindi in totale 2 punti vittoria per ogni Borghese, a prescindere se si trovino su un Edificio, una Piantagione o sul ritratto). ",
    shortDesc:"+1 PV per ogni Borghese"
},]

export const EDIFICI_PRODUZIONE : EdificioProduzione[]=[{
    title:"Piccola Piantagione di Frutta",
    costo:1,
    rank:1,
    piantagione:"frutta",
    espansione:"base",
    desc:"",
    shortDesc:""
},{
    title:"Piccolo Zuccherificio",
    costo:2,
    rank:1,
    piantagione:"zucchero",
    espansione:"base",
    desc:"",
    shortDesc:""
},{
    title:"Grande Piantagione di Frutta",
    costo:3,
    rank:2,
    piantagione:"frutta",
    espansione:"base",
    desc:"",
    shortDesc:""
},{
    title:"Grande Zuccherificio",
    costo:4,
    rank:2,
    piantagione:"zucchero",
    espansione:"base",
    desc:"",
    shortDesc:""
},{
    title:"Magazzino del Tabacco",
    costo:5,
    rank:3,
    piantagione:"tabacco",
    espansione:"base",
    desc:"",
    shortDesc:""
},{
    title:"Torrefazione",
    costo:6,
    rank:3,
    piantagione:"caffè",
    espansione:"base",
    desc:"",
    shortDesc:""
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

export const RANKS=Array.from({length: 4}, (_, i) => i + 1)
export const COSTI=Array.from({length: 3}, (_, i) => i + 1)

// https://www.ravensburger.org/spielanleitungen/ecm/Spielanleitungen/27349%20anl%20%202362054.pdf?ossl=pds_text_Spielanleitung

// --- TODO ---
/* 
    risolvere problema zero in input
    risolvere problema routing
*/