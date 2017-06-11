window.onload = function(){ 
 
    var minyear = 1991;
    var y = new Date().getFullYear(); 

    write(minyear,y,"YYYY");
    write(minyear,y,"YYYY1");
    document.form1.YYYY.value = y;
    document.form1.YYYY1.value = y;
    
    var m = new Date().getMonth()+1;
    var minmon = 1;
    var maxmon = 12;
    write(minmon,maxmon,"MM");
    write(minmon,maxmon,"MM1");
    document.form1.MM.value = m;
    document.form1.MM1.value = m;
  
    MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var d = MonHead[new Date().getMonth()];
    var minday = 1;
    var maxday = d;
    write(minday,maxday,"DD");
    write(minday,maxday,"DD1");
    document.form1.DD.value = d;
    document.form1.DD1.value = d;
    
    var maxhour=23;
    var minhour=0;
    var h = new Date().getHours();
    write(minhour,maxhour,"HH");
    write(minhour,maxhour,"HH1");
    document.form1.HH.value = h;
    document.form1.HH1.value = h;
    
    var minmin = 0;
    var maxmin = 59;
    var mi = new Date().getMinutes();
    write(minmin,maxmin,"MI");
    write(minmin,maxmin,"MI1");
    document.form1.MI.value = mi;
    document.form1.MI1.value = mi;
    
    var minsec = 0;
    var maxsec = 59;
    var s = new Date().getSeconds();
    write(minsec,maxsec,"SS");
    write(minsec,maxsec,"SS1");
    document.form1.SS.value = s;
    document.form1.SS1.value = s;
    
}
function YYYYMM(str){
   var y = new Date().getFullYear(); 
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    if(YY!="year"){
        var Y = document.form1.YYYY1;
        re_write(Y,"YYYY1",YY,y,YY,YY1,0);  
    }
}

function YYYYMM1(str)
{
    var minyear = 1991;
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    if(YY1!="year")
    {
        var Y = document.form1.YYYY; 
        re_write(Y,"YYYY",minyear,YY1,YY,YY1,1);
    }
}

function MMDD(str)
{
    var minmon = 1;
    var maxmon = 12;
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var M = document.form1.MM1;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    if(YY==YY1&&MM1!="month")
    {
        re_write(M,"MM1",MM,maxmon,MM,MM1,0);

    }else{
        optionsClear(M);
        write(minmon,maxmon,"MM1");
        M.value=MM1;
    } 

    var minday = 1;
    var maxday = MonHead[str-1];
    if(str==2&&IsPinYear(YY)) maxday++;
    var D = document.form1.DD;
    var X = D.value;
    optionsClear(D);
    write(minday,maxday,"DD");
    D.value = X>maxday?maxday:X;
}

function MMDD1(str)
{
    var minmon = 1;
    var maxmon = 12;
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var M = document.form1.MM;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    if(YY==YY1&&MM!="month"){
        re_write(M,"MM",minmon,MM1,MM,MM1,1);
    }else{
        optionsClear(M);
        write(minmon,maxmon,"MM");
        M.value=MM;
    }
    
    var minday = 1;
    var maxday = MonHead[str-1];
    if(str==2&&IsPinYear(YY)) maxday++;
    var D = document.form1.DD1;
    var X = D.value;
    optionsClear(D);
    write(minday,maxday,"DD1");
   D.value = X>maxday?maxday:X;
}
function DDHH(str)
{
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    var DD = document.form1.DD.options[document.form1.DD.selectedIndex].value;
    var DD1 = document.form1.DD1.options[document.form1.DD1.selectedIndex].value;
    var D = document.form1.DD1;
    var minday = 1;
    var maxday = MonHead[MM1-1];
    if(str==2&&IsPinYear(YY1)) maxday++;
    if(YY==YY1&&MM==MM1&&DD1!="day")
    {    
        re_write(D,"DD1",DD,maxday,DD,DD1,0);
    }else{
        optionsClear(D);
        write(minday,maxday,"DD1");
        D.value=DD1>maxday?maxday:DD1;
    }  
}

function DDHH1(str)
{
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    var DD = document.form1.DD.options[document.form1.DD.selectedIndex].value;
    var DD1 = document.form1.DD1.options[document.form1.DD1.selectedIndex].value;
    var D = document.form1.DD;
    var minday = 1;
    var maxday = MonHead[MM-1];
    if(str==2&&IsPinYear(YY)) maxday++;
    if(YY==YY1&&MM==MM1&&DD!="day")
    {    
        re_write(D,"DD",minday,DD1,DD,DD1,1);
    }else{
        optionsClear(D);
        write(minday,maxday,"DD");
        D.value=DD>maxday?maxday:DD;
    }   
}

function HHMM(str)
{
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    var DD = document.form1.DD.options[document.form1.DD.selectedIndex].value;
    var DD1 = document.form1.DD1.options[document.form1.DD1.selectedIndex].value;
    var HH = document.form1.HH.options[document.form1.HH.selectedIndex].value;
    var HH1 = document.form1.HH1.options[document.form1.HH1.selectedIndex].value;
    var H = document.form1.HH1;
    var minhour = 0;
    var maxhour = 23;
    if(YY==YY1&&MM==MM1&&DD1==DD&&HH1!="hour")
    {    
        re_write(H,"HH1",HH,maxhour,HH,HH1,0);
    }else{
        optionsClear(H);
        write(minhour,maxhour,"HH1");
        H.value=HH1;
    }  
    
}

function HHMM1(str)
{
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    var DD = document.form1.DD.options[document.form1.DD.selectedIndex].value;
    var DD1 = document.form1.DD1.options[document.form1.DD1.selectedIndex].value;
    var HH = document.form1.HH.options[document.form1.HH.selectedIndex].value;
    var HH1 = document.form1.HH1.options[document.form1.HH1.selectedIndex].value;
    var H = document.form1.HH;
    var minhour = 0;
    var maxhour = 23;
    if(YY==YY1&&MM==MM1&&DD1==DD&&HH!="hour")
    {    
         re_write(H,"HH",minhour,HH1,HH,HH1,1);
    }else{
        optionsClear(H);
        write(minday,maxday,"HH");
        H.value=HH;
    }   
}
function MMII(str)
{
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    var DD = document.form1.DD.options[document.form1.DD.selectedIndex].value;
    var DD1 = document.form1.DD1.options[document.form1.DD1.selectedIndex].value;
    var HH = document.form1.HH.options[document.form1.HH.selectedIndex].value;
    var HH1 = document.form1.HH1.options[document.form1.HH1.selectedIndex].value;
    var MI = document.form1.MI.options[document.form1.MI.selectedIndex].value;
    var MI1 = document.form1.MI1.options[document.form1.MI1.selectedIndex].value;   
    var M = document.form1.MI1;
    var minmin = 0;
    var maxmin = 59;
    if(YY==YY1&&MM==MM1&&DD1==DD&&HH==HH1&&MI1!="minute")
    {    
        re_write(M,"MI1",MI,maxmin,MI,MI1,0);
    }else{
        optionsClear(M);
        write(minmin,maxmin,"MI1");
        M.value=MI1;
    }
}

function MMII1(str)
{
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    var DD = document.form1.DD.options[document.form1.DD.selectedIndex].value;
    var DD1 = document.form1.DD1.options[document.form1.DD1.selectedIndex].value;
    var HH = document.form1.HH.options[document.form1.HH.selectedIndex].value;
    var HH1 = document.form1.HH1.options[document.form1.HH1.selectedIndex].value;
    var MI = document.form1.MI.options[document.form1.MI.selectedIndex].value;
    var MI1 = document.form1.MI1.options[document.form1.MI1.selectedIndex].value;   
    var M = document.form1.MI;
    var minmin = 0;
    var maxmin = 59;
    if(YY==YY1&&MM==MM1&&DD1==DD&&HH==HH1&&MI!="minute")
    {    
        re_write(M,"MI",minmin,MI1,MI,MI1,1);
    }else{
        optionsClear(M);
        write(minmin,maxmin,"MI");
        M.value=MI;
    } 
}
function SSEE(str)
{
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    var DD = document.form1.DD.options[document.form1.DD.selectedIndex].value;
    var DD1 = document.form1.DD1.options[document.form1.DD1.selectedIndex].value;
    var HH = document.form1.HH.options[document.form1.HH.selectedIndex].value;
    var HH1 = document.form1.HH1.options[document.form1.HH1.selectedIndex].value;
    var MI = document.form1.MI.options[document.form1.MI.selectedIndex].value;
    var MI1 = document.form1.MI1.options[document.form1.MI1.selectedIndex].value;  
    var SS = document.form1.SS.options[document.form1.SS.selectedIndex].value;
    var SS1 = document.form1.SS1.options[document.form1.SS1.selectedIndex].value;    
    var S = document.form1.SS1;
    var minsec = 0;
    var maxsec = 59;
    if(YY==YY1&&MM==MM1&&DD1==DD&&HH==HH1&&MI==MI1&SS1!="minute")
    {    
        re_write(S,"SS1",SS,maxsec,SS,SS1,0);
    }else{
        optionsClear(S);
        write(minsec,maxsec,"SS1");
        S.value=SS1;
    }
}

function SSEE1(str)
{
    var YY = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    var YY1 = document.form1.YYYY1.options[document.form1.YYYY1.selectedIndex].value;
    var MM = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    var MM1 = document.form1.MM1.options[document.form1.MM1.selectedIndex].value;
    var DD = document.form1.DD.options[document.form1.DD.selectedIndex].value;
    var DD1 = document.form1.DD1.options[document.form1.DD1.selectedIndex].value;
    var HH = document.form1.HH.options[document.form1.HH.selectedIndex].value;
    var HH1 = document.form1.HH1.options[document.form1.HH1.selectedIndex].value;
    var MI = document.form1.MI.options[document.form1.MI.selectedIndex].value;
    var MI1 = document.form1.MI1.options[document.form1.MI1.selectedIndex].value;  
    var SS = document.form1.SS.options[document.form1.SS.selectedIndex].value;
    var SS1 = document.form1.SS1.options[document.form1.SS1.selectedIndex].value;    
    var S = document.form1.SS;
    var minsec = 0;
    var maxsec = 59;
    if(YY==YY1&&MM==MM1&&DD1==DD&&HH==HH1&&MI==MI1&SS!="minute")
    {
        re_write(S,"SS",minsec,SS1,SS,SS1,1);
    }else{
        optionsClear(S);
        write(minsec,maxsec,"SS");
        S.value=SS;
    } 
}
function write(strYY,endYY,flag)
{
    for(var i=strYY;i<=endYY;i++)
    {
        switch(flag){
            case "YYYY":   document.form1.YYYY.options.add(new Option( i , i));break;
            case "YYYY1":  document.form1.YYYY1.options.add(new Option( i , i));break;
            case "MM":  document.form1.MM.options.add(new Option( i , i));break;
            case "MM1":  document.form1.MM1.options.add(new Option( i , i));break;
            case "DD":  document.form1.DD.options.add(new Option( i , i));break;
            case "DD1":  document.form1.DD1.options.add(new Option( i , i));break;
            case "HH":  document.form1.HH.options.add(new Option( i , i));break;
            case "HH1":  document.form1.HH1.options.add(new Option( i , i));break;
            case "MI":  document.form1.MI.options.add(new Option( i , i));break;
            case "MI1":  document.form1.MI1.options.add(new Option( i , i));break;
            case "SS":  document.form1.SS.options.add(new Option( i , i));break;
            case "SS1":  document.form1.SS1.options.add(new Option( i , i));break;
        }
    }    
}
/*
X---document.from1.YYYY
name---YYYY/YYYY1/MM/DD
min,max---write(min,max,name)
preval---start_time.value
nextval---end_time.value
flag---    preval---0        nextval---1r
*/
function re_write(X,name,min,max,preval,nextval,flag)
{
    optionsClear(X);
    write(min,max,name);
    if(parseInt(nextval)>=parseInt(preval)){
        X.value=flag?preval:nextval;
    }else {
        X.value=(!flag)?preval:nextval;
    }
}
function optionsClear(e) 
{
    e.options.length = 1;
}
function IsPinYear(year)
{ 
    return(0 == year%4 && (year%100 !=0 || year%400 == 0))
} 

