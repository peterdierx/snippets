// MODULES
const cors    = require( 'cors' )
const sqlite  = require( 'sqlite3' )
const express = require( 'express' )

// PORT
const port = 4567

// API
const api = express()

// BODY PARSER
api.use( express.json() )

// CORS
api.use( cors() )

// DATABASE & SERVER
const db = new sqlite.Database( './database/snippets.sqlite3', sqlite.OPEN_READWRITE, ( error ) => {
  if ( error ) {
    return console.log( error )
  } else {
    console.log( 'Connected to SQLite Database snippets...' )
    // SERVER
    const server = api.listen( port )
    console.log( `Server listening at http://localhost:${ port }` )
  }
})

// INDEX
api.get( '/', ( request, response ) => {
  response.send( 'Snippets API - Peter Dierx 2019' )
})

// CREATE
api.post( '/snippets/new', ( request, response ) => {
  const snippet = {
    id:      null,
    title:   request.body.title,
    content: request.body.content
  }
  db.run( "INSERT INTO snippets ( title, content ) VALUES ( ?, ? )", [ snippet.title, snippet.content ],
    function( error ) {
      if ( error ) {
        console.log( error )
      } else {
        snippet.id = this.lastID
        response.json( snippet )
      }
    }
  )
})

// READ
api.get( '/snippets', ( request, response ) => {
  db.all( "SELECT * FROM snippets ORDER BY title LIMIT 11", ( error, rows ) => {
    response.json( rows )
  })
})

// UPDATE
api.put( '/snippets', ( request, response ) => {
  const snippet = {
    id:      request.body.id,
    title:   request.body.title,
    content: request.body.content
  }
  db.run( "UPDATE snippets SET title = ?, content = ? WHERE id = ?", [ snippet.title, snippet.content, snippet.id ],
    function( error ) {
      if ( error ) {
        console.log( error )
      } else {
        response.json( snippet )
      }
    }
  )
})

// DELETE
api.delete( '/snippets/:id', ( request, response ) => {
  const id = request.params.id
  db.run( "DELETE FROM snippets WHERE id = ?", id, ( error ) => {
    if ( error ) {
      console.log( error )
    } else {
      response.status( 200 ).send()
    }
  })
})

// SEARCH
api.get( '/snippets/search/:title', ( request, response ) => {
  const title  = request.params.title
  const params = `%${ title }%`
  db.all( "SELECT * FROM snippets WHERE title LIKE ? ORDER BY title LIMIT 11", params, ( error, rows ) => {
    response.json( rows )
  })
})

// PAGE
api.get( '/snippets/page/:number', ( request, response ) => {
  const page = request.params.number * 10
  db.all( "SELECT * FROM snippets ORDER BY title LIMIT 11 OFFSET ?", page, ( error, rows ) => {
    if ( error ) {
      console.log( error )
    } else {
      response.json( rows )
    }
  })
})

// NOT FOUND
api.use( ( request, response, next ) => {
  response.status( 404 ).send( '404 - NOT FOUND' )
})
