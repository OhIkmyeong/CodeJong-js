import { Listener } from "./listener.js";
import { Result } from "./result.js";

export class Data{
    constructor(){
        this.count = 0;
        this.Listener = new Listener();
        this.Listener.set_test(this.test);
        this.Listener.set_counter_add(this.add_counter);
        this.Result = new Result();

        this.say_hello_1();
    }
    ///////// METHOD ///////////

    test = ()=>{console.log(this,'HI!')}

    add_counter = () =>{
        this.count++;
        console.log(this,this.count);
        this.Result.show_result(this.count);
    }//add_counter

    say_hello_1(){console.log('Hello');}
    
}//class-Data