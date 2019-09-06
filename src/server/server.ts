const express = require("express");
const app = express();
const http = require("http");
const PORT: number = 3000;

const requestHandler = (request: any, response: any) => {
	console.log(request.url);
	response.end(`Hello new node server`);
}

const server = http.createServer(requestHandler);

server.listen(PORT, (err: any) => {
	if (err) {
		return console.log("something bad happened", err)
	}

	console.log(`something is listening on ${PORT}`)
})