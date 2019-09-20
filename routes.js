const controller = require('./controller')
const path = require('path')


module.exports = function(app){
  app.get('/api/pet', controller.index)
  app.post('/api/pet', controller.create)
  app.get('/api/pet/findOne/:id', controller.findById)
  app.put('/api/pet/updatePet/:id', controller.updatePet)
  app.delete('/api/pet/:id', controller.delete)
  app.put('/api/pet/:id', controller.updateSkill)
  app.put('/api/pet/likeUP/:id',controller.likeUP)


  app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}