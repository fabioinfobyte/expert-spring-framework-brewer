$(function() {
    var decimal = $('.js-decimal').maskMoney();
    decimal.maskMoney({ decimal: ',', thousands: '.' });
    
    var plain = $('.js-plain').maskMoney({ precision: 0 });
    plain.maskMoney({ precision: 0, thousands: '.'});
 });