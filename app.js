const notes = require('./notes.js')
const yargs = require('yargs')

yargs.version('1.1.0')

//create add comand
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of add',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove comand
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of add',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title, argv.body)
    }
})

//create list comand
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function (argv) {
        notes.listNote(argv.title, argv.body)
    }
})

//create read comand
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
