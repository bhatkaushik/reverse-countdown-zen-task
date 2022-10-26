


   let time=1000;
 let displayCount = document.getElementById("countdown");


    let ten= function(callback) {
        setTimeout(() => {
          displayCount.innerHTML=10;
        }, 0*time);
        callback();
     };

     let nine= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML=9;
        }, 1*time);
        callback();
      };
      
      let eight= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML=8;
        }, 2*time);
        callback();
      };
      
      let seven= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML=7;
        }, 3*time);
        callback();
      };
      
      let six= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML=6;
        }, 4*time);
        callback();
      };
      
      let five= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML=5;
        }, 5*time);
        callback();
      };
      
      let four= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML=4;
        }, 6*time);
        callback();
      };
      
      let three= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML=3;
        }, 7*time);
        callback();
      };
      
      let two= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML=2;
        }, 8*time);
        callback();
      };
      
      let one= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML=1;
        }, 9*time);
        callback();
      };
      
      let statement= function(callback) {
        setTimeout(() => {
            displayCount.innerHTML="Happy Independence Day";
        }, 10*time);
        callback();
      };
   
// callback hell
ten(() => {
    nine(() => {
       eight(() => {
         seven(() => {
          six(() => {
             five(() => {
               four(() => {
                 three(()=>{
                   two(() =>{
                     one(()=>{
                       statement(()=>{
                         
                       })
                     });
                   });
                 });
               });
             });
           });
         });
       });
     });
   });



