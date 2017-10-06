var oimg=document.getElementsByTagName("img");
var owrap=document.getElementById("wrap")
var deg=360/(oimg.length);
var len=oimg.length;
var timer;

(
	function (i)
	{
		for(;i<len;i++)
		{

			 oimg[i].style.transform="rotateY("+i*deg+"deg)  translateZ(350px)";
			 oimg[i].style.zindex=-i*2
			 oimg[i].style.transition="all "+(i*0.3+1)+"s";
		

		}
	}

)(0)


var nowx=0,nowy=0,
    minusx=0,minusy=0,
    rotx=0,roty=0;
document.onmousedown=function(e)
{    e.preventDefault() ;
 
  var e=e||window.event;
   lastx=e.clientX,lasty=e.clientY,
     
  this.onmousemove=function(e){
      var e=e||window.event;
      nowx=e.clientX;
      nowy=e.clientY;
      
      minusx=nowx-lastx;
      minusy=nowy-lasty;

  
      rotx-=minusy;
      roty+=minusx;
    
    if(rotx<-30)
    {
    	rotx=-30
    }
    if(rotx>30)
    {
    	rotx=30
    }
      // owrap.style.transform="rotateY("+roty+"deg)";
      owrap.style.transform="rotateX("+rotx+"deg)  rotateY("+roty+"deg)";
      // owrap.style.transform="rotateY("+roty+"deg)";
       
      

       
      lastx=nowx;
      lasty=nowy;
     

  }

  this.onmouseup=function(){
     this.onmousemove=null;
     
     timer=setInterval(function(){
     	minusx*=0.98;
     	minusy*=0.98;
     	rotx-=minusy*0.1
     	roty+=minusx*0.1
     	owrap.style.transform="rotateX("+rotx+"deg) rotateY("+roty+"deg)";
     	if(Math.abs(minusx)<0.1||Math.abs(minusy)<0.1)
     	{
     		clearInterval(timer)
     	}
     },1000/60)
  }
}

