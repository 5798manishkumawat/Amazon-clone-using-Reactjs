const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51HnjkcByjod7323GszGScH7A23Mp3Xjkbn5rKEFOrMemMW1bYbG1f67XBppnaWx0NGQaKsDJQRn9o8LnkCKs4KOa00brc4k2H0"
);

// App config

const app = express();

//Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//API routes

app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payment/create", async (request, response) => {
	const total = request.query.total;
	console.log("Payment Request Received");
	const paymentIntent = await stripe.paymentIntent.create({
		amount: total,
		currency: "usd",
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});
//Listen command

exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-using-reactjs/us-central1/api
