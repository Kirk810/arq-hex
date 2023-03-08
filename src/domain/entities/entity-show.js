module.exports = (db) => {
    const showSchema = new db.Schema(
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
    return db.model('Shows', showSchema);
};