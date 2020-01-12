const express = require('express');

const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const { protect, authorize } = require('../middlewares/auth');

router.post('/', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (err, stripeResponse) => {
        if (err) {
            res.status(500).send({error: err})
        } else{
            res.status(200).send({success: stripeResponse})
        }
    })
});


module.exports = router;

