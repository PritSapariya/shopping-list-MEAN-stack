var express = require('express');
var router = express.Router();
var Item = require('../model/shoppingItem.js');

router.get('/items', (req, res, next) => {
    Item.find(function(err, items){
        if(err){
            res.json(err);
        }
        else{
            res.json(items);
        }
    })
});

router.post('/item', (req, res, next) => {
    
    let newShoppingItem = new Item({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought
    });

    newShoppingItem.save((err, item) => {
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Item has been added to DB'});
        }
    });

});

router.put('/item/:id', (req, res) => {

    item.findOneAndUpdate({_id: res.params.id}, {
        $set: {
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemBought: req.body.itemBought
        }
    },
    function(err, results){
        if(err){
            res.json(err);
        }
        else{
            res.json(results);
        }
    });
});

router.delete('/item/:id', (req, res) => {
    
    item.remove({_id: res.params.id}, {
        $set: {
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemBought: req.body.itemBought
        }
    },
    function(err, results){
        if(err){
            res.json(err);
        }
        else{
            res.json(results);
        }
    });
});


module.exports = router;