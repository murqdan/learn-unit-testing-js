const express = require('express');
const { getItems, addItem, getItem } = require('./models.js');

const router = express.Router();

router.get('/items', async (req, res) => {
    res.json({
        items: await getItems()
    });
});

router.post('/items', async (req, res) => {
    try {
        const id = await addItem(req.body);
        res.status(200).json({
            item: await getItem(id)
        });
    } catch(err) {
        console.error(err);
    }

});

module.exports = router;