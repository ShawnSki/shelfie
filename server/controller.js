module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then((products) => {
            res.status(200).send(products)
        })
    },

    addProduct: (req, res) => {
        const { name, price, url } = req.body
        const db = req.app.get('db');
        db.create_product({ name, price, url })
            .then(dbResponse => {
                res.status(200).send(dbResponse);
            })
            .catch(error => {
                if (error) throw error;
            })
    },

    deleteProduct() {

    },

    updateProduct() {
        
    }
}
