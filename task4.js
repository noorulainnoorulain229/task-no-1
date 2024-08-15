

                //   question no1 .
    // find the last element of an array without giving hard-coded index.
    
    let h1 = document.querySelector("#abc");

    let a = [12, 34, 333, 55, 123, 453, 5434,31,54,675,87634,43243265];
    
    let b = ["hello", "world", "abc"];
        function getLastEle(arr) {
            let q = arr;
          
            let q_LENGTH = q.length;
          
            let range = q_LENGTH - 1;
          
            let lastEle = q[range];
          
            let output = `last element value ${lastEle} and it's index is : ${range}`;
          
            return output;
          }
          console.log( getLastEle(a)  )
          h1.innerHTML = getLastEle(a);
    
                    //    question n2.
        // check whether the first or the last index of an array has specified value.lets say 5. 
        let h2 = document.querySelector("#abc1");
    
     function checkFirstOrLast(array, value) {
         let ar = [6,7,8,9];
          if (array[0] === value || array[array.length - 1] === value) {
                 return true;       } 
                else {
                return false;
           }
        }
        console.log(checkFirstOrLast(9) );
        h2.innerHTML = checkFirstOrLast(9);
    
                //   question no3.
        // make an array to store  the names of student and check whether that array has your own name or not and also return the index of that value.
        let span= document.querySelector("#abc3");
    
        function students(targetname) {
                  let names=["noor","sarim","faisal","hiba"];
           if (names.length===0){
            return false;
           }
           let students = names [0] === targetname || names [names.length -1]===targetname;
           console.log("target the name matches the array name",students);
           return true;
        }
        students("name");
            span.innerHTML = students("name");
    
        
            
    
               
     // Add the array element at the specified index.

    let fruits = ["apple", "banana", "mango"];
    let newFruit = "orange";
    let index = 2;
    
    fruits.splice(index, 0, newFruit);
    
    console.log(fruits);