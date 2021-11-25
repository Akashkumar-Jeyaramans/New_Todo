const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
    synonym : String,
    isComplete : Boolean,
    isDelete : Boolean
})

const Word = mongoose.model('word',WordSchema)

module.exports = Word