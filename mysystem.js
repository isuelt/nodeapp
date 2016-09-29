var os = require('os');

var msg = 'Here is some info on your system';

var sysarray  = new Array('type: '+os.type(),
						  'Node Version: '+process.version,
						  'Platform: '+os.platform(),
						  'Hostname: '+os.hostname(),
						  'Total Memory: '+os.totalmem(),
						  'Free Memory: '+os.freemem(),
						  'Uptime: '+os.uptime()						  
						 );
console.log(msg);

var arraylen = sysarray.length;

i = 0;
while(i < arraylen){
	console.log(sysarray[i]);
	i++
}