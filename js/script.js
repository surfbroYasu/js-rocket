var car = {
    make:  'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: true,
    numberOfWheels: 4,
    seats: [
        'seat1',
        'seat2',
        'seat3',
        'seat4'
    ],
    turnedOn: function () {
        this.isTurnedOn = true;
    },
    fly: function () {
        alert('fly');
    },
    switchCar: function(isOn) {
        console.log('turn car '+isOn)
          ;
        if (isOn == true){
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    }
  };

  var sayMyName = function(name){
    alert('Myname is: '+ name);
}

  console.log('hello there firend!');