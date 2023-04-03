const asyncHandler = require('express-async-handler');

const System = require('../models/systemModel');

//@desc Get systems
//@route GET /api/systems
//@access Public
const getSystems = asyncHandler( async (req, res) => {
   const systems = await System.find();
   
    res.status(200).json(systems);
});

//@desc Set systems
//@route SET /api/system
//@access Private
const setSystem = asyncHandler( async (req, res) => {
   if(!req.body.name || !req.body.status || !req.body.from || !req.body.to) {
      res.status(400);
      throw new Error('Please fill in all fields');
   }
   const system = await System.create({
      name: req.body.name,
      status: req.body.status,
      from: req.body.from,
      to: req.body.to,
      message: req.body.message,
   });
   
   res.status(200).json(system);
});

//@desc Update systems
//@route PUT /api/systems/:id
//@access Private
const updateSystem = asyncHandler( async (req, res) => {
   const system = await System.findById(req.params.id);
   if(!system) {
      res.status(400)
      throw new Error('System not found')
   }

   const updatedSystem = await System.findByIdAndUpdate(req.params.id, req.body, {new: true} );

    res.status(200).json(updatedSystem);
});

//@desc Delete systems
//@route DELETE /api/systems/:id
//@access Private
const deleteSystem = asyncHandler( async (req, res) => {
   const system = await System.findById(req.params.id);
   if(!system) {
      res.status(400)
      throw new Error('System not found')
   }

   await system.remove();

    res.status(200).json({ id: req.params.id });
});



module.exports = {
      getSystems, setSystem, updateSystem, deleteSystem
}