const Pet= require('./models')
module.exports = {

  index: function(req,res){
      Pet.find().sort('-type')
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  create: function(req,res){
    Pet.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  findById: function(req,res){
    Pet.findOne({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  updatePet: function(req,res){
    Pet.findByIdAndUpdate({_id:req.params.id},req.body,{runValidators:true})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  delete: function(req,res){
    Pet.findByIdAndRemove({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  updateSkill: function(req,res){
    Pet.findOneAndUpdate({_id:req.params.id},{$push:{skills:req.body}},{runValidators:true})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  likeUP: function(req,res){
    Pet.findOneAndUpdate({_id:req.params.id},{$inc:{likes:1}})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  }
}  