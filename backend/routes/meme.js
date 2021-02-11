const router = require('express').Router();
let Meme = require('../models/meme.model');

router.route('/').get((req, res) => {
    Meme.find().sort({_id:-1}).limit(100)
      .then(memes => res.json(memes))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Meme.findById(req.params.id)
      .then(meme => res.json(meme))
      .catch(err => res.status(404).send('404 Error. Sorry can not find that'));
});
router.route('/:id').patch(async(req,res)=>{
  try{
    const meme = await Meme.findById(req.params.id)
    meme.caption=req.body.caption;
    meme.url=req.body.url;
    const a1 = await meme.save();
    res.json(a1);
  }
  catch(err){
    res.status(404).send('404 Error..Sorry can not find that')
  }
})
router.route('/:id').delete(async(req,res)=>{
  try{
    const meme = await Meme.findById(req.params.id)
    const a1 = await meme.delete()
    res.json(a1);
  }
  catch(err){
    res.send('Error');
  }
})
router.route('/').post((req, res) => {

  const newMeme = new Meme({
    name:req.body.name,
    url:req.body.url,
    caption:req.body.caption
  });

  newMeme.save()
  .then((data) => res.json(data))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;