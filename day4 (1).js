function calcu(){
    var n1=new Date(document.getElementById('dt').value)
    var pdate=parseInt(n1.getDate());
    var pmonth=parseInt(n1.getMonth()+1);
    var pyear=parseInt(n1.getFullYear());

    

    var n2=document.getElementById('ab')
    var n3=document.getElementById('bc')
    var n4=document.getElementById('cd')

    var d=new Date();
    var cdt=parseInt(d.getDate());
    var cmonth= parseInt(d.getMonth()+1);
    var cyear=parseInt(d.getFullYear());
    
 
    var age=cyear-pyear;
    
    var monthage=0;
    var dateage=0;
    //for age
    if (cmonth<pmonth || (cmonth===pmonth && cdt<pdate)){
        age--;
    }
    
    //for month
    if (cmonth<pmonth && cdt<pdate){
        monthage=(12-(pmonth-cmonth))-1
    }
    if (cmonth<pmonth && cdt>pdate){
        monthage=(12-(pmonth-cmonth))
    }
    if (cmonth===pmonth && cdt<pdate){
        monthage=11;
    }
    if (cmonth>pmonth && cdt>pdate){
        monthage=cmonth-pmonth;
        }
    if (cmonth>pmonth && cdt<pdate){
        monthage=cmonth-pmonth-1
    }
    if (cmonth===pmonth && cdt>pdate){
        monthage=0;
    }
    //for date
    if (cdt===pdate){
        dateage=0;
    }
    if (cdt<pdate){
        dateage=30-(pdate-cdt)
    }
    if (cdt>pdate){
        dateage=cdt-pdate
    }
    console.log(age)
    n2.innerHTML=age;
    n3.innerHTML=monthage;
    n4.innerHTML=dateage;
    
    
}

