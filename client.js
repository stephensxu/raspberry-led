var gpio = require('rpi-gpio');

var pin = 3;
var timeToBeOn = 2000;

gpio.setup(pin, gpio.DIR_OUT, write);

function write() {
  on(pin, timeToBeOn);
}

function on(pinNumber, time) {
  gpio.write(pinNumber, true, function(err) {
    if (err) throw err;
    console.log('Written on to pin');
  });

  setTimeout(function(){ off(pinNumber) }, time);
}

function off(pinNumber) {
  gpio.write(pinNumber, false, function(err) {
    if (err) throw err;
    console.log("Written false to pin");
  });
}
