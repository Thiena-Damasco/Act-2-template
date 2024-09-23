const print = {
    troll:(req, res) => {
        res.render('index');
    },
    about:(req, res) => {
        res.render('shop');
    },
    products:(req, res) => {
        res.render('detail');
    },
    offer:(req, res) => {
        res.render('checkout');
    },
    categories:(req, res) => {
        res.render('contact');
    }


};

module.exports = print;