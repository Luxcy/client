$('#Timeselection .time').timepicker({
    'timeFormat': 'g:i:s',
    'step':15
});

$('#Timeselection .date').datepicker({
    'format': 'yyyy-m-d',
    'autoclose': true
});

var ExampleEl = document.getElementById('Timeselection');
var defaultDeltaDatepair = new Datepair(ExampleEl, {
    'anchor': null//starttime++ endtime++ yes or no 
})
