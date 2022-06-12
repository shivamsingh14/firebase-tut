// import * as functions from "firebase-functions";


// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase! TS3");
// });


import * as functions from 'firebase-functions'
import * as express from 'express'

const app = express()
app.get('/shivam', (req, res) => res.status(200).send('Hey there!'))
exports.app = functions.https.onRequest(app)