//Array met drie objecten
let books = [{
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        alreadyRead: false
    },
    {
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        alreadyRead: true
    },
    {
        title: 'De verschrikkelijke schoolmeester.',
        author: 'Dolf Verroen',
        alreadyRead: true
    }
];

// Stap 1: loop door een Array, de array bevat 3 objecten.
//Opties: .map, .foreach, for-loop
books.forEach(book => {
    // Console log het 'boektitel door boekauteur'
    console.log(`${book.title} door ${book.author}`);
});

// Stap 2: loop door een Array, de array bevat 3 objecten.

books.forEach(book => {
    // Ga na als de alreadyRead van het object book een true teruggeeft
    if (book.alreadyRead) {
        //Indien alreadyRead true: console.log 'Je las reeds het boek ... ' 
        console.log(`Je las reeds het boek ${book.title} door ${book.author}`);
    }else{
        //Indien alreadyRead false: console.log 'Je moet het boek ...  nog lezen'
        console.log(`Je moet het boek ${book.title} door ${book.author} no lezen`);
    }
});
