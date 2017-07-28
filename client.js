var gpio = require('rpi-gpio');

var pin = 3;

gpio.setup(3, gpio.DIR_OUT, on);

function on() {
  gpio.write(3, true, function(err) {
    if (err) throw err;
    console.log('Written on to pin');
  });

  setTimeout(function(){ off() }, 1200);
}

function off() {
  gpio.write(3, false, function(err) {
    if (err) throw err;
    console.log("Written false to pin");
  });
}
