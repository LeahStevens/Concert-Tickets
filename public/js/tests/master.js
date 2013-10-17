'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
  initialize(null, true);
}

function teardownTest(){
}

test('Select Correct Section', function(){
  expect(2);


  $('#vip').val('VIP Section');
  deepEqual($('#vip').val(),'VIP Section','VIP Section should be the result');
  $('#CreateSeats').trigger('click');

  $('#gen-adm').val('General Admission');
  deepEqual($('#gen-adm').val(),'General Admission','General Admission should be the result');
  $('#CreateSeats').trigger('click');
});

test('Correct Number of Seats', function(){
  expect(1);
  $('#seatNumber').val('35');
  deepEqual($('#seatNumber').val(),'35','The number of seats should be 35');
  $('#CreateSeats').trigger('click');
});

test('Correct Price of Section Seats', function(){
  expect(2);

  $('#seatPrice').val('$110.00');
  deepEqual($('#seatPrice').val(),'$110.00','The price of VIP Seats should be $110.00 ');
  $('#CreateSeats').trigger('click');

  $('#seatPrice').val('$90.00');
  deepEqual($('#seatPrice').val(),'$90.00','The price of General Admission Seats should be $90.00 ');
  $('#CreateSeats').trigger('click');

});