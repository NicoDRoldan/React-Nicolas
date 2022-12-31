const listaMangas = [];

const manga1 = new Manga(1, 'Black Clover', 990);
const manga2 = new Manga(2, 'One Piece', 1200);
const manga3 = new Manga(3, 'Dragon Ball Super', 999);
const manga4 = new Manga(4,'Chainsaaw Man', 700);
const manga5 = new Manga(5, 'Hunter x Hunter', 990);

listaMangas.push(manga1, manga2, manga3, manga4, manga5);

console.log(listaMangas);

solicitarNombre()

listaOrderAsc();

realizarCompra();