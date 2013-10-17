'use strict';


// Local Schema (defined in keys.js)

$(document).ready(initialize);

function initialize(fn, flag){
  if(!canRun(flag)) {return;}
  $('#createSeats').click(clickCreateSeats);
  $('#vip').click(changeVipPrice);
  $('#gen-adm').click(changeGeneralAdmissionPrice);
}

// ------------------------------Click Handlers---------------------------------- //
function clickCreateSeats(){

}

function changeVipPrice(){
  debugger;
  $('#seatPrice').val('$110.00');
}
function changeGeneralAdmissionPrice(){
  $('#seatPrice').val('$90.00');
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
