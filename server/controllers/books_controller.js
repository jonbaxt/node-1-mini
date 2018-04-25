let books = [];
let id = 0;

module.exports = {
    read: ( req, res ) => {  //GET
        res.status(200).send( books ); //Code 200 in NPM sends back OK if it accesses correctly
    },
    create: ( req, res ) => {   //POST
        const { title, author } = req.body; //Get the body body of the req
        let book = {
            id: id,
            title: title,
            author: author
        }
        
        books.push( book );
        id++;
        res.status(200).send( books );
    },
    update: ( req, res ) => { //PUT
        let index = null
        books.forEach( (book, i) => {
            if(book.id === Number(req.params.id)) index = i;
        })
        books[index] = {
            id: books[ index ].id,
            title: req.body.title || books[ index ].title,
            author: req.body.author || books[ index ].author
        };
        res.status(200).send( books );
    },
    delete: ( req, res ) => {
        let index = null
        books.forEach( (book , i) => {
            if(book.id === Number(req.params.id)) index = i;
        }) 
        books.splice(index, 1);
        res.status(200).send( books );
    }
};

