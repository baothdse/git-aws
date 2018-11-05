const Product = require('./models/product');

module.exports = (app) => {
    let limit = 8;

    app.get('/mobile', (req, res) => {
        Product.find({"type" : "mobile"})
            .limit(limit)
            .exec((err, mobiles) => {
                if (err) res.send(err);
                res.json(mobiles)
            })
    })
}