
        // step-1 traveral the array
        // step-2 store the currentElement
        // step-3 we have to chekcout the cuurrentelement is present into the resultArray (map) return ture
        // step-4 else map(resultarray) push kar dia
        // step-5 boolcheckere (flase-> true)

        let arr = [1,2, 3];
        let resultArray = []

        let boolChecker = false;
        for(let currentIndex = 0; currentIndex < arr.length; currentIndex++){

            // alredy present into the result array then we have to return True;
            // alredy present not return false;

            let currentElement = arr[currentIndex];
            if(resultArray.includes(currentElement) == false){
                resultArray.push(currentElement);
            }else{
                boolChecker = true;
            }
        }
        console.log(boolChecker)