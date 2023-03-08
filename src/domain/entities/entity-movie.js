module.exports = (db) => {
    const movieSchema = new db.Schema(
        {
            title: String,
            poster: String,
        },
        {
            timestamps: {
                createdAt: 'created_at',
                updatedAt: 'updated_at',
            },
        }
    );
    return db.model('Movies', movieSchema);
};