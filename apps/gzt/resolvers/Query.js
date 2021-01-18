
const Query = {
    contents(parent, args, { db }, info) {
        return db.contents;
    }
}

export default Query;