
import request from 'supertest'
import express from 'express'
import bodyParser from 'body-parser'

import ajaxMiddleware from './router'

const app = express();
 
 // bodyParser is importent
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(ajaxMiddleware)

test('POST: /create', (done) => {
    const payload = {}

    request(app)
    .post('/create')
    .send(payload)
    .expect(200)
    .end(function(err, res) {

        console.log('res.body: ', res.body)

        if (err) throw err;
            
        done()

    });

})