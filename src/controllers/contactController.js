const asyncHandler = require('express-async-handler');
// this middleware automatically does the try catch block to catch the error whenever an  error is encountered.


// @description Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler( async(req, res) => {
    res.send({ message: "get contact" })
})

// @description Create new contacts
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async(req, res) => {
    console.log(req.body);
    const { name, email, phone} = req.body;
    if(!name || !email || !phone){
        throw new Error ("All fields must be provided");
    }
    res.json({ message: "Create contact" })
})

// @description Get new contacts
// @route GET /api/contacts/:id
// @access public

const getContact =asyncHandler( async(req, res) => {
    res.send({ message: `Get contact for ${req.params.id}` })
})

// @description Update new contacts
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler( async(req, res) => {
    res.send({ message: `Update all routes for ${req.params.id}` })
})

// @description Update new contacts
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async(req, res) => {
    res.send({ message: `Delete all routes for ${req.params.id}` })
})


module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};