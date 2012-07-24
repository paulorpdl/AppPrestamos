//Express and Node.js Hello World

/*
 * 
 * This function returns the classic "Hello World" message on the client and the console.
 *  
 * Esta funcion retorna  el clasico mensaje "Hello World" (Hola mundo) al cliente y a la consola.
*/

exports.hello = function(request,response){
	
	//This line defines the Http Header Response
	//Esta linea define el encabezado de la respuesta HTTP
	response.writeHead(200,{'Content-type':'text/plain'});
	
	//Send the message to the console
	//Envia el mensaje a la consola
	//console.log('Hello World\n to %s', response);
	console.log("Hello World to %s",request.connection.remoteAddress);
	
	
	//Send the message to the client
	//Envia el mensaje al cliente
	response.end('Hello World\n');
	
};

//De aquí en adelante, la programación del Servicio


var Loan = require('../models/loan.js');

exports.loans_create = function(request,response){
	console.log('CREATING LOAN');
	new Loan(request.body).save();
	response.writeHead(200);
	response.end("OK");
};

exports.loans_read = function(request,response){
	console.log('READING LOAN');
	Loan.findOne({_id:request.params.id}, function(error,loan){
		response.statusCode = 200;
		response.setHeader('Content-Type','application/json');
		response.send(loan);
	});
};

exports.loans_update = function(request,response){
	console.log('UPDATING LOAN');
	//Update lines
};

exports.loans_delete = function(request,response){
	console.log('DELETING LOAN');
	//Delete lines
};

exports.loans = function(request,response){
	console.log('LISTING LOANS');
	Loan.find(function(err,loans){
		response.statusCode = 200;
		response.setHeader('Content-Type','application/json');
		response.send(loans);
	});
};
