var x=[]; 
var i1,i2,j1,j2;
var uj;
var pont=0;
var nyert=false;
var vesztett=false;
var celpont=2048;

window.addEventListener('keydown',lepfel,false);
window.addEventListener('keydown',leple,false);
window.addEventListener('keydown',lepb,false);
window.addEventListener('keydown',lepj,false);
window.addEventListener('keydown',celvalt,false);


function general(){
    pont=0;
    nyert=false;
    vesztett=false;

i1=Math.round(Math.random()*3);
i2=Math.round(Math.random()*3);
j1=Math.round(Math.random()*3);
j2=Math.round(Math.random()*3);

while(i1==i2 && j1==j2){
    j1=Math.round(Math.random()*3);
    j2=Math.round(Math.random()*3);
}

tablazat();
}

function tablazat(){
    
    for(i=0;i<4;i++){
        x[i]=[];
        for(j=0;j<4;j++){
            v1=Math.round(Math.random()*10);
            v2=Math.round(Math.random()*10);
            if(v1==4 && i==i1 && j==j1){
               x[i][j]=4; 
               pont+=4;
            }
            else if(v2==4 && i==i2 && j==j2){
                    x[i][j]=4; 
                    pont+=4;
            }  
            else if(i==i1 && j==j1 ||  i==i2 && j==j2){
                x[i][j]=2; 
                pont+=2;
             }
            else x[i][j]=0;
        }
    }
    
    kiir();
}


function kiir(){

    g="<h2>"+"pontszám:"+pont+"<br>cél:"+celpont+"</h2>";
    if(nyert==true){
        g="<h2>Nyert!</h2>";
    }
    
    if(vesztett==true){
        g+="<h2>Vesztett!</h2>";
    }
    document.getElementById("pontok").innerHTML=g;
    
    
    sz="";
    pont=0;

    for(i=0;i<4;i++){
        sz+="<tr>";
        for(j=0;j<4;j++){
            c="cella";
            pont+=x[i][j];
            if(x[i][j]==0)                         c="ures";
                else if(x[i][j]==2)                c="k";
                 else if(x[i][j]==4)               c="n";
                  else if(x[i][j]==8)              c="ny";
                   else if(x[i][j]==16)            c="th";
                    else if(x[i][j]==32)           c="hk";
                     else if(x[i][j]==64)          c="hn";
                      else if(x[i][j]==128)        c="sz";
                       else if(x[i][j]==256)       c="ksz";
                        else if(x[i][j]==1012)     c="e";
                         else if(x[i][j]==2024)    c="ke";

                sz+="<td class="+c+">"+x[i][j]+"</td>";
            

        }
        sz+="</tr>";
    }
    
    
    document.getElementById("jatek").innerHTML=sz;
    
}


function mozdul(){
   var ln=0;
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if(x[i][j]>ln) ln=x[i][j];          ///legnagyobb keresés
        }
    }
    if(ln==celpont){
        nyert=true;
    }

    i1=Math.round(Math.random()*3);
    j1=Math.round(Math.random()*3);
    while(x[i1][j1]!=0){
        i1=Math.round(Math.random()*3);         ///mozgás után feltöltött hely
        j1=Math.round(Math.random()*3);
    }

    v1=Math.round(Math.random()*10);            /// 2 vagy 4 legyen
    if(v1==4){
        x[i1][j1]=4; 
        pont+=4
    }
    else{
        x[i1][j1]=2;
        pont+=2;
    }

kiir();
}   






function moz_b(){

    ///összead

    if(x[i][0]==x[i][1]){
        x[i][0]*=2;
        x[i][1]=0;
    }
    else if(x[i][0]==x[i][2] && x[i][1]==0){
        x[i][0]*=2;
        x[i][2]=0;
    }
    else if(x[i][0]==x[i][3] && x[i][1]==0 && x[i][2]==0){
        x[i][0]*=2;
        x[i][3]=0;
    }

    if(x[i][1]==x[i][2]){
        x[i][1]*=2;
        x[i][2]=0;
    }
    else if(x[i][1]==x[i][3] && x[i][2]==0){
       x[i][1]*=2;
        x[i][3]=0;
    }
    if(x[i][2]==x[i][3]){
        x[i][2]*=2;
        x[i][3]=0;
    }

    ///mozgat

    for(j=0;j<3;j++){
        if(x[i][j]==0 && x[i][j+1]!=0 && j+1<4){
        x[i][j]=x[i][j+1];
        x[i][j+1]=0;
        }

        else if(x[i][j]==0 && x[i][j+1]==0 && x[i][j+2]!=0 && j+2<4){
        x[i][j]=x[i][j+2];
        x[i][j+2]=0;
        }
        else if(x[i][j]==0 && x[i][j+1]==0 && x[i][j+2]==0 && x[i][j+3]!=0 && j+3<4){
        x[i][j]=x[i][j+3];
        x[i][j+3]=0;
        }
    }
}

function moz_j(){
    
    ///összead

    if(x[i][3]==x[i][2]){
        x[i][3]*=2;
        x[i][2]=0;
    }
    else if(x[i][3]==x[i][1] && x[i][2]==0){
        x[i][3]*=2;
        x[i][1]=0;
    }
    else if(x[i][3]==x[i][0] && x[i][2]==0 && x[i][1]==0){
        x[i][3]*=2;
        x[i][0]=0;
    }

    if(x[i][2]==x[i][1]){
        x[i][2]*=2;
        x[i][1]=0;
    }
    else if(x[i][2]==x[i][0] && x[i][1]==0){
       x[i][2]*=2;
        x[i][0]=0;
    }
    if(x[i][1]==x[i][0]){
        x[i][1]*=2;
        x[i][0]=0;
    }

    ///mozgat

    for(j=3;j>0;j--){
        if(x[i][j]==0 && x[i][j-1]!=0 && j-1>=0){
        x[i][j]=x[i][j-1];
        x[i][j-1]=0;
        }

        else if(x[i][j]==0 && x[i][j-1]==0 && x[i][j-2]!=0 && j-2>=0){
        x[i][j]=x[i][j-2];
        x[i][j-2]=0;
        }
        else if(x[i][j]==0 && x[i][j-1]==0 && x[i][j-2]==0 && x[i][j-3]!=0 && j-3>=0){
        x[i][j]=x[i][j-3];
        x[i][j-3]=0;
        }
    }
}

function moz_f(){
    
    ///összead

    if(x[0][j]==x[1][j]){
        x[0][j]*=2;
        x[1][j]=0;
    }
    else if(x[0][j]==x[2][j] && x[1][j]==0){
        x[0][j]*=2;
        x[2][j]=0;
    }
    else if(x[0][j]==x[3][j] && x[1][j]==0 && x[2][j]==0){
        x[0][j]*=2;
        x[3][j]=0;
    }

    if(x[1][j]==x[2][j]){
        x[1][j]*=2;
        x[2][j]=0;
    }
    else if(x[1][j]==x[3][j] && x[2][j]==0){
       x[1][j]*=2;
        x[3][j]=0;
    }
    if(x[2][j]==x[3][j]){
        x[2][j]*=2;
        x[3][j]=0;
    }

    ///mozgat

    for(i=0;i<3;i++){
        if(x[i][j]==0 && x[i+1][j]!=0 && i+1<4){
        x[i][j]=x[i+1][j];
        x[i+1][j]=0;
        }

        else if(i+2<4 && x[i][j]==0 && x[i+1][j]==0 && x[i+2][j]!=0){
        x[i][j]=x[i+2][j];
        x[i+2][j]=0;
        }
        else if(i+3<4 && x[i][j]==0 && x[i+1][j]==0 && x[i+2][j]==0 && x[i+3][j]!=0){
        x[i][j]=x[i+3][j];
        x[i+3][j]=0;
        }
    }
}

function moz_l(){
    
    ///összead

    if(x[3][j]==x[2][j]){
        x[3][j]*=2;
        x[2][j]=0;
    }
    else if(x[3][j]==x[1][j] && x[2][j]==0){    
        x[3][j]*=2;
        x[1][j]=0;
    }
    else if(x[3][j]==x[0][j] && x[2][j]==0 && x[1][j]==0){
        x[3][j]*=2;
        x[0][j]=0;
    }

    if(x[2][j]==x[1][j]){
        x[2][j]*=2;
        x[1][j]=0;
    }
    else if(x[2][j]==x[0][j] && x[1][j]==0){
       x[2][j]*=2;
        x[0][j]=0;
    }
    if(x[1][j]==x[0][j]){
        x[1][j]*=2;
        x[0][j]=0;
    }

    ///mozgat

    for(i=3;i>0;i--){
        if(x[i][j]==0 && x[i-1][j]!=0 && i-1>=0){
        x[i][j]=x[i-1][j];
        x[i-1][j]=0;
        }

        else if(i-2>=0 && x[i][j]==0 && x[i-1][j]==0 && x[i-2][j]!=0){
        x[i][j]=x[i-2][j];
        x[i-2][j]=0;
        }
        else if(i-3>=0 && x[i][j]==0 && x[i-1][j]==0 && x[i-2][j]==0 && x[i-3][j]!=0){
        x[i][j]=x[i-3][j];
        x[i-3][j]=0;
        }
    }
}


   
function lepfel(e){
    if(nyert==false){
    if(e.keyCode=="38"){/// w vagy fel nyil
        for(j=0;j<4;j++){ 
            moz_f(x,j);
        }
    mozdul();
    kiir();    
    }
  }
}

function leple(e){
    if(nyert==false){
    if(e.keyCode=="40" || e.keyCode=="83"){/// s vagy le nyil
        for(j=0;j<4;j++){ 
            moz_l(x,j);
        }
    mozdul();   
    kiir();   
    }
  }
}

function lepj(e){
    if(nyert==false){
    if(e.keyCode=="39" || e.keyCode=="68"){/// d vagy jobb nyil
        for(i=0;i<4;i++){
            moz_j(x,i);
        }

    mozdul(); 
    kiir();   
    }
  }
}
   
function lepb(e){
    if(nyert==false){
    if(e.keyCode=="37" || e.keyCode=="65"){/// a vagy bal nyil
        for(i=0;i<4;i++){  
            moz_b(x,i);
        }
    mozdul(); 
    kiir();  
  
    }
  }
}

function celvalt(e){
    if(e.keyCode=="32"){
        if(celpont==2048){
            celpont=64;

        }
            else{
                celpont=2048;
                kiir();  

            }
    }


}
