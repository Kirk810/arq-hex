const conn = require('../repositories/mongo.repository')

exports.getAll = async () => {
    try {
        return await conn.db.connMongo.Movie.find();
    } catch (error) {
        console.log(' err ordm-movie.getAll = ', error);
        return await { err: { code: 123, message: error } };
    }
};

exports.Create = async (Title, Poster) => {
    try {
        const data = await new conn.db.connMongo.Movie({
            title: Title,
            poster: Poster,
        });
        data.save();
        return true;
    } catch (error) {
        console.log(' err odm-movie.Create = ', error);
        return await { err: { code: 123, message: error } };
    }
};