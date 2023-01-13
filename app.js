    //  <script>
    //         alert("I hope you like cats!"); // popup box

    //         let catsYN = prompt("Do you have a cat?");
    //         if (catsYN == "yes") {
    //         alert("Good for you!");
    //         } else if (catsYN == "YES") {
    //         alert("Good for you!");
    //         } else if (catsYN == "Yes") {
    //         alert("Good for you!");
    //         } else {
    //         alert("Oh, I'm sorry!");
    //         }
            
    //         let catsName = prompt("What's your favorite cat's name?");
    //         document.write("I think Pixel would like " +catsName + "!");
    // </script>


    alert("I hope you like cats!"); 

    function catsQ1(){
        let catsYN = prompt("Do you have a cat?");
        console.log(catsYN, + " the user does(n't) have a cat");
        if (catsYN == "yes") {
        alert("Good for you!");
        } else if (catsYN == "YES") {
        alert("Good for you!");
        } else if (catsYN == "Yes") {
        alert("Good for you!");
        } else {
        alert("Oh, I'm sorry!");
        }
    }
    function catsQ2() {
        let catsName = prompt("What's your favorite cat's name?");
        if (catsName){
            console.log(catsName);
            document.write("I think Pixel would like " +catsName + "!");
        } else {
            console.log ("That's unacceptable...");
            catsName = prompt("Come on, I know you can list one cat's name.")
            console.log(catsName);
            document.write("I think Pixel would like " +catsName + "!");
        }
    console.log(catsName);
    }

    function catsQ3(){
        let catsNumber = prompt("How many cats is too many?");
        while (catsNumber < 4){
            catsNumber = prompt("How many cats is too many?");
        }
    
        for (let i = 0; i < catsNumber; i++){
            document.write('<img src="catloop-small.jpg"/>')
        }
    }


