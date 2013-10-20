'use strict';


// Local Schema (defined in keys.js)


$(document).ready(initialize);

function initialize(fn, flag){
  if(!canRun(flag)) {return;}
  $('#createSeats').click(clickCreateSeats);
  $('#sections').click(clickChangePrice);
  $('#vip-container').on('click', '.seats', clickFillVIPSeats);
  $('#gen-adm-container').on('click', '.seats', clickFillGenAdmSeats);
}
// ------------------------------Regular Functions---------------------------------- //

function reportingNumbersAndPrices(){
  var $vipPeople = $('#VIPSeatList > li').length;
  $vipPeople = parseFloat($vipPeople, 10);
  var $gaPeople = $('#genAdmSeatList > li').length;
  $gaPeople = parseFloat($gaPeople, 10);
  var $totalPeople = $vipPeople + $gaPeople;

  var $vipPrice = $vipPeople * 110;
  var $gaPrice = $gaPeople * 90;
  var $totalPrice = $vipPrice + $gaPrice;

  $('#totalVIP').text('Total VIP: $' + $vipPrice);
  $('#totalGA').text('Total GA: $' + $gaPrice);
  $('#grandTotal').text('Grand Total: $' + $totalPrice);
  $('#vipPeople').text('Vip People: ' + $vipPeople);
  $('#gaPeople').text('GA People: ' + $gaPeople);
  $('#totalPeople').text('Total People: ' + $totalPeople);
}


// ------------------------------Click Handlers---------------------------------- //
function clickCreateSeats(){
  var numberOfSeats = $('#seatNumber').val();
  numberOfSeats = parseInt(numberOfSeats, 10);

  for(var i = 0; i < numberOfSeats; i++)
  {
    var $seats = $('<div>');
    $seats.addClass('seats');
    var $seatNumber = i + 1;


    if($('#sections:first-child').val() === 'vip'){
      $('#vip-container').append($seats);
      $seats.text('V'+ $seatNumber);
    }
    else{
      $('#gen-adm-container').append($seats);
      $seats.text('GA'+ $seatNumber);

    }
  }
  if($('#sections:first-child').val() === 'vip'){
    $('#vip').remove();
    $('#seatNumber').val('');
    if($('#sections').val() === null){
      $('#left').remove();
    }
  }else{
    $('#gen-adm').remove();
    $('#seatNumber').val('');
    if($('#sections').val() === null){
      $('#left').remove();
    }
  }

}

function clickFillVIPSeats(){
  var $name = $('#name').val();
  var $seatNumber = $(this).text();
  var $li = $('<li>'+ $seatNumber + ' ' + $name + '</li>');

  if($(this).hasClass('VIPseatsFilled') === true){
    alert('This seat is filled.');
  }else{
    $(this).addClass('VIPseatsFilled').text($seatNumber + ' ' + $name);
    $('#VIPSeatList').append($li);
    reportingNumbersAndPrices();
  }
}
function clickFillGenAdmSeats(){
  var $name = $('#name').val();
  var $seatNumber = $(this).text();
  var $li = $('<li>'+ $seatNumber + ' ' + $name + '</li>');

  if($(this).hasClass('GenAdmseatsFilled') === true){
    alert('This seat is filled.');
  }else{
    $(this).addClass('GenAdmseatsFilled').text($seatNumber + ' ' + $name);
    $('#genAdmSeatList').append($li);
    reportingNumbersAndPrices();
  }
}



function clickChangePrice(){
  if($('#sections:first-child').val() === 'vip'){
    $('#seatPrice').val('$110');
  }
  else{
    $('#seatPrice').val('$90');
  }
}

// -------------------------------------------------------------------- //

function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function parseUpperCase(string){
  return string.toUpperCase();
}

function parseLowerCase(string){
  return string.toLowerCase();
}

function formatCurrency(number){
  return '$' + number.toFixed(2);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function canRun(flag){
  var isQunit = $('#qunit').length > 0;
  var isFlag = flag !== undefined;
  var value = isQunit && isFlag || !isQunit;
  return value;
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
