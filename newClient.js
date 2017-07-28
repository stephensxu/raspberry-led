var gpio = require('rpi-gpio');

var pin = 3;

gpio.setup(pin, gpio.DIR_OUT, write);

function write() {
  console.log("calling write() function");
  on(pin);
}

function on(pinNumber) {
  console.log("calling on function");
  gpio.write(pinNumber, true, function(err) {
    console.log("starting to write");
    if (err) throw err;
    console.log('Written on to pin');
  });

  setTimeout(function(){ off(pinNumber) }, 1200);
}

function off(pinNumber) {
  gpio.write(pinNumber, false, function(err) {
    if (err) throw err;
    console.log("Written false to pin");
  });
}
