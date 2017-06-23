import express from 'express'

const router = express.Router()

router.post('/create', (req, res) => {
    const payload = req.body
    
    // do something ...

    res.json({result: 'I am result'})    
});

export default router
