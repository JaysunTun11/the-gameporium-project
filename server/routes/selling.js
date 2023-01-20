const router = require("express").Router();
const pool = require("../db");
const authorization = require('../middleware/authorization')

router.post("/postListing", authorization, async(req, res) => {
    try {
        const { name, location, productName, tags, price} = req.body
        const prevListings = await pool.query("SELECT * FROM listings WHERE user_name=$1 AND product_name=$2",
        [name, productName])

        if (prevListings.rows.length !== 0) {
            return res.status(401).send("You already made a product listing for this product")
        }

        const newListing = await pool.query("INSERT INTO listings (user_name, listing_location, product_name, product_tags, product_price) values ($1, $2, $3, $4, $5) RETURNING *",
        [name, location, productName, tags, price]);
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router