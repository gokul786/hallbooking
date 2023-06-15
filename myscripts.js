
document.writeln("<h1>Welcome to JavaScript Programming!</h1>" );

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

//var today = new Date().toISOString().split('T')[0];
var aa = document.getElementById("available-date");
var dat=new Date();
aa.value=dat.toDateInputValue();
aa.setAttribute("min",dat.toDateInputValue());
aa.max=dat.getDate();




var dict={
    "Seminar_hall":['Seminar Hall','A','200','Available', 'images/hall1.jpg'],
    "Main_seminar": ['Main seminar Hall','B','200','Available','images/hall2.jpg'],
    "Heritage": ['Hertage Hall','C','200','Available','images/hall3.jpg'],
    "Tifac": ['Tifac Hall','D','200','Available','images/hall4.jpg'],
    "Purple": ['Purple Hall','E','200','Available','images/hall5.jpg']
}


var hall_name =["Seminar_hall","Main_seminar","Heritage","Tifac","Purple"];
//var hall_image=["images/hall1.jpg","images/hall2.jpg","images/hall3.jpg","images/hall4.jpg","images/hall5.jpg"];

var a=document.getElementById("hall");
var value2=a.value;

//hide main wrap
//var x = document.getElementsByClassName("hide");
//x[0].style.display = "none";
//document.getElementById("hide").style.visibility = "hidden";
var check="0";
var goku="";

 function onFilter(value1){
    //var ggg=getElementById(arr[1]);
    //ggg.style.display = "block";
    all.removeChild(arr[value1]);
    //x[0].style.display = "Block";
    //document.getElementById("gok3").style.display = "none";  
    check=value1;
    if(goku!=""){
        all.appendChild(arr[goku]);
        
    }
    //if(value1!="0"){
    
    
    goku=value1;
    var tt1=dict[hall_name[value1]];
    document.getElementById("img1").src = tt1[4];
    document.getElementById("title").innerHTML = tt1[0];
    document.getElementById("Block").innerHTML = "Block: "+tt1[1];
    document.getElementById("Capacity").innerHTML = "Capacity: "+tt1[2];
    document.getElementById("AC").innerHTML = "AC: "+tt1[3]; 
    
    //document.body.innerHTML="";
 }
    /*var b = hall_name[goku];
    hall_name[goku] = hall_name[0];
    hall_name[0] = b;*/
    var all;
    var newwrap1;
    var arr=new Array(6);
    var count=0;


    
    for(i in hall_name){
        let tt2=dict[hall_name[i]];
        
        let carName = "value1";

        //if(tt2[1] != tt2[i]){
        all = document.querySelector('.all');
        newwrap1=document.createElement('DIV');
        arr[count]=newwrap1;
        
        var newhall=document.createElement('DIV');
        var newimg1=document.createElement('IMG');
        var newspec=document.createElement('DIV');
        var newspech1=document.createElement('H1');
        var newspechr=document.createElement('HR');
        var newdetails=document.createElement('DIV');
        var newdetail1 =document.createElement('DIV');
        var newdetail1p1=document.createElement('P');
        var newdetail1p2=document.createElement('P');
        var newdetail1p3=document.createElement('P');

        var newdetail2 =document.createElement('DIV');
        
        
        var newdetail21=document.createElement('DIV');
        
        
        var newdivsTime=document.createElement('DIV');
        var newlsTime=document.createElement('LABEL');
        var newsTime=document.createElement('INPUT');
        
        var newdiveTime=document.createElement('DIV');
        var newleTime=document.createElement('LABEL');
        var neweTime=document.createElement('INPUT');

        var newShowTimings=document.createElement('TEXTAREA');
        

        //var newspecQp1=document.createElement('P');
        //var newspecQp2=document.createElement('P');
        //var newspecQp3=document.createElement('P');
        var newspecbottom =document.createElement('DIV');
        var newspecbottomReq =document.createElement('DIV');
        var newrequiredLabel =document.createElement('LABEL');
        
        var newrequired =document.createElement('TEXTAREA');
        var newspecbottomDat =document.createElement('DIV');
        var newdateLabel =document.createElement('LABEL');
        var newdate =document.createElement('INPUT');
        var newbooknow =document.createElement('DIV');
        var newbutton =document.createElement('BUTTON');

        newwrap1.className='wrap1';
        newwrap1.setAttribute("id","giveid");

        newhall.className='hall';
        
        newimg1.src=tt2[4];
        newimg1.className='img1';
        newimg1.setAttribute('max_width','100%');
        
        
        newspec.className='spec';
        
        newspech1.className='title';
        if(tt2[0]=="Main seminar Hall"){
            newspech1.style.fontSize ='35px'}
        newspech1.innerText=tt2[0];

        
        newspechr.className='spec-hr';
        
        
        newdetails.className='details'; 
        
        newdetail1.className='details-1';
        
        newdetail1p1.className='Block detail1-A1';
        newdetail1p1.innerText="Block: " +tt2[1];
        
        
        newdetail1p2.className='Capacity detail1-A1';
        newdetail1p2.innerText="Capacity: "+tt2[2];
        
        newdetail1p3.className='AC detail1-A1';
        newdetail1p3.innerText="AC: "+tt2[3];

        
        /*newspecQp1.className='Block detail1-A1';
        newspecQp1.innerText= "Block: "+tt2[1];
        
        newspecQp2.className='Capacity detail1-A1';
        newspecQp2.innerText="Capacity: "+tt2[2];
        
        newspecQp3.className='AC detail1-A1';
        newspecQp3.innerText="AC: "+tt2[3];*/
        newdetail2.className='details-2 text-color';

        newdetail21.className='details-21';

        newdivsTime.className='divsTime';
        
        newlsTime.setAttribute("for","sTime");
        newlsTime.className='lsTime';
        newlsTime.innerText='Start Time';
        
        
        newsTime.className='sTime';
        newsTime.setAttribute('type','time');

        newdiveTime.className='diveTime';

        newleTime.setAttribute("for","eTime");
        newleTime.className='leTime';
        newleTime.innerText='End Time';

        neweTime.className='eTime';
        neweTime.setAttribute('type','time');

        newShowTimings.className='ShowTimings';
        newShowTimings.setAttribute("placeholder","Events")
        newShowTimings.rows='3';
        newShowTimings.cols='14';

        //spec class starts
        newspecbottom.className='spec-bottom';
        
        newspecbottomReq.className='spec-bottom-required' ;
        
        newrequiredLabel.className='requiredLabel';
        newrequiredLabel.innerText='Requirements';

        newrequired.className='required';
        newrequired.cols='15';
        newrequired.rows='3';
        
        newspecbottomDat.className='spec-bottom-date';
        
        newdateLabel.setAttribute("for","available-date");
        newdateLabel.className="dateLabel text-color";
        newdateLabel.innerText='Available Dates';

        newdate.className='available-date';
        newdate.setAttribute("type", "date");
        newdate.setAttribute("name","available-date");
        newdate.setAttribute("min",dat.toDateInputValue());
        
        //book now
        newbooknow.className='book-now-button';

        newbutton.className='book';
        newbutton.innerText='Book Now';
        
        
        all.appendChild(newwrap1);
        newwrap1.appendChild(newhall);
        newhall.append(newimg1);
        newwrap1.appendChild(newspec);
        newspec.appendChild(newspech1);
        newspech1.appendChild(newspechr);
        newspec.appendChild(newdetails);
        newdetails.appendChild(newdetail1);
        newdetail1.appendChild(newdetail1p1);
        newdetail1.appendChild(newdetail1p2);
        newdetail1.appendChild(newdetail1p3);
        newdetails.appendChild(newdetail2);
        newdetail2.appendChild(newdetail21);
        newdetail21.appendChild(newdivsTime);
        newdivsTime.appendChild(newlsTime);
        newdivsTime.appendChild(newsTime);
        newdetail21.appendChild(newdiveTime);
        newdiveTime.appendChild(newleTime);
        newdiveTime.appendChild(neweTime);
        newdetail2.appendChild(newShowTimings);
        //newspecQ.appendChild(newspecQp1);
        //newspecQ.appendChild(newspecQp2);
        //newspecQ.appendChild(newspecQp3);
        newspec.appendChild(newspecbottom);
        newspecbottom.appendChild(newspecbottomReq);
        newspecbottomReq.appendChild(newrequiredLabel);

        newspecbottomReq.appendChild(newrequired);
        newspecbottom.appendChild(newspecbottomDat);
        newspecbottomDat.appendChild(newdateLabel);
        
        newspecbottomDat.appendChild(newdate);
        newspec.appendChild(newbooknow);
        newbooknow.appendChild(newbutton);
        
        count++;
         
        //if(tt2[0]=="Seminar Hall"){
            //newwrap1.style.visibility = "hidden";
            //newwrap1.style.display = "none";
            //all.removeChild(newwrap1);

        //}
    }
    
    /*var dict={
        "Seminar_hall":['Seminar Hall','Block: A\nCapacity: 200\nAC: Available', 'images/hall1.jpg'],
        "Main_seminar": ['Main seminar Hall','Block: B\nCapacity: 200\nAC: Available','images/hall2.jpg'],
        "Heritage": ['Hertage Hall','Block: C\nCapacity: 200\nAC: Available','images/hall3.jpg'],
        "Tifac": ['Tifac Hall','Block: D\nCapacity: 200\nAC: Available','images/hall4.jpg'],
        "Purple": ['Purple Hall','Block: E\nCapacity: 200\nAC: Available','images/hall5.jpg']
    }*/