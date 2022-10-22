export function categorizeBooks(books = []) {
    let retObj = {}
    books.forEach(book => {
        const {title , authors, id, shelf, imageLinks
        } = book
        if(retObj[shelf]) {
            retObj[shelf].data.push({title , authors, id, shelf, imageLinks})
        } else {
            retObj[shelf] = {
                shelf,
                data : [{title , authors, id, shelf, imageLinks}]
            }
        }
    });
    return retObj
}