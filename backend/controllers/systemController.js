//@desc Get systems
//@route GET /api/systems
//@access Public
const getSystems = (req, res) => {
   if(!req.body.text) {
         res.status(400)
         throw new Error('No text')
   }
    res.status(200).json({ message: 'Get Status' });
}

//@desc Set systems
//@route SET /api/system
//@access Private
const setSystem = (req, res) => {
   res.status(200).json({ message: 'Set Status' });
}

//@desc Update systems
//@route PUT /api/systems/:id
//@access Private
const updateSystem = (req, res) => {
    res.status(200).json({ message: `Update Status ${req.params.id}` });
}

//@desc Delete systems
//@route DELETE /api/systems/:id
//@access Private
const deleteSystem = (req, res) => {
    res.status(200).json({ message: `Delete Status ${req.params.id}` });
}



module.exports = {
      getSystems, setSystem, updateSystem, deleteSystem
}