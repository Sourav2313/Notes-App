// const chalk = require('chalk')
// const yargs = require('yargs')
// const notes = require('./notes.js')

// // Customize yargs version
// yargs.version('1.1.0')

// // Create add command
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv) {
//         notes.addNote(argv.title, argv.body)
//     }
// })

// // Create remove command
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv) {
//         notes.removeNote(argv.title)
//     }
// })

// // Create list command
// yargs.command({
//     command: 'list',
//     describe: 'List your notes',
//     handler() {
//         notes.listNotes()
//     }
// })

// // Create read command
// yargs.command({
//     command: 'read',
//     describe: 'Read a note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv) {
//         notes.readNote(argv.title)
//     }
// })

// yargs.parse()



const chalk = require('chalk')
const { string } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandoption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOptions: true,
            type: 'String'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
    title:{
        describe: 'Note Title',
        demandoption: true,
        type: 'string'
    }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function () {
        console.log('Listing the note')
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Read your notes',
    handler: function () {
        console.log('Reading a note')
    }
})


console.log(yargs.argv)

// const command = process.argv[2]

// console.log(process.argv)
// // adding note
// if (command === 'add'){
//     console.log('Adding Note')
// }
// // removing note
// else if (command === 'remove') {
//     console.log('Removing note')
// }



// Printing color
// const msg = getNotes()
// console.log(msg)

// const greenMsg = chalk.green('Success')
// console.log(greenMsg)

