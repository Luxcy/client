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

function Station_display(str)
{
    if(str=="contour")
       document.getElementById("table_stations").style.display="none";
   else 
       document.getElementById("table_stations").style.display="";
}
