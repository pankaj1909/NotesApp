const fs = require('fs');
const chalkTest = require('chalk')

const getNotes = () => ('Your Notes')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
    } else {
        console.log(chalkTest.red('DuplicateNotes Found'))
    }
}

const removeNote = (title, body) => {
    const notes = loadNotes()
    if (notes.length > 0) {
        const remainingNotes = notes.filter((note) => note.title !== title)
        saveNotes(remainingNotes)
    } else {
        console.log('No notes')
    }
}

const listNote = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        console.log(chalkTest.yellow.inverse("Your Notes"))
        notes.forEach(element => {
            console.log(chalkTest.magenta.inverse(element.title))
        });
    } else {
        console.log('No notes')
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    if (notes.length > 0) {
        const foundNote = notes.find(note => note.title === title)
        if(foundNote){
            console.log(chalkTest.blue.inverse(foundNote.title))
            console.log(chalkTest.green.inverse(foundNote.body))
        }else{
            console.log(chalkTest.red.inverse('No Matching case'))
        }
    } else {
        console.log('No notes')
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote,
} 