const router = require('express').Router()

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai-food.jpg'
},{
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg'
}]
router.get('/', (req, res) => {
    
    res.render('places/index',{places})
})

router.post('/', (req, res) =>{
    console.log(req.body)
    places.push(req.body)
    res.redirect('/places')
})

router.get('/new',(req,res)=>{
    res.render('places/new')
})


module.exports = router
