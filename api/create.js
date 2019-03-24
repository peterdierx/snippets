// MODULES
const sqlite = require( 'sqlite3' )
const shell  = require( 'shelljs' )

// NEW DATABASE FILE
console.log( 'CREATE NEW SNIPPETS DATABASE' )
shell.touch( './database/snippets.sqlite3' )

// DATABASE
const db = new sqlite.Database( './database/snippets.sqlite3', sqlite.OPEN_READWRITE, ( error ) => {
  if ( error ) {
    return console.log( error )
  } else {
    // TABLES
    db.serialize( () => {
      console.log( 'CONNECTED to SQLite Database snippets...' )
      console.log( 'CREATE TABLE ' )
      db.run( "CREATE TABLE snippets ( id integer NOT NULL PRIMARY KEY AUTOINCREMENT, title varchar( 255 ), content Text )" )
      console.log( 'CREATE INDEX title' )
      db.run( "CREATE INDEX snippets_title_index ON snippets ( title )" )
    })
    // SNIPPETS
    db.serialize( () => {
      console.log( 'INSERT SEED RECORDS' )
      setTimeout( () => {
        shell.exec( 'sqlite3 database/snippets.sqlite3 < snippets.sql ' )
      }, 1000 )
      console.log( 'OK' )
    })
  }
})
