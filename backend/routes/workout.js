const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.json({msg: "get all requests"})
})

router.get('/:id', (req, res)=>{
    res.json({msg: "get one requests"})
})

router.post('/', (req, res)=>{
    res.json({msg: "post one requests"})
})

router.delete('/:id', (req, res)=>{
    res.json({msg: "delete one requests"})
})

router.patch('/:id', (req, res)=>{
    res.json({msg: "update one requests"})
})

module.exports = router