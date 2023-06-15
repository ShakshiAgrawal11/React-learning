import React from 'react'

//this keyword 
//this keyword is undefined in strict mode
//react by default is in stict mode
const This = () => {
    //refer to global object i.e. window
     console.log(this);

    // //in normal function refers to global object i.e. window
    function sum() {
        let a = 2;
        console.log("sum =", a + a);
        console.log(this)
    }
    sum();


    // //in method of an object ...this refers to the object
    const car = {
        brand: "audi",
        version: "new",
        display: function () {
            console.log(this.brand);
            console.log(this.version);
            console.log(this);
        }
    }
    console.log("car display");
    car.display();


    return (
        <div>
            
        </div>
    )
}

export default This
