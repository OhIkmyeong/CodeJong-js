export class Listener{
    constructor(){
        this.$btn_1 = document.getElementById('btn_1');
        this.$btn_2 = document.getElementById('btn_2');
        
        this.$btn_1.addEventListener('click',()=>{
            this.setTest && this.setTest();
        });
        this.$btn_2.addEventListener('click',()=>{
            if(!this.addCounter){return;}
            this.addCounter();
        });
    }
    //// METHOD ///
    set_test(func){this.setTest = func;}

    set_counter_add(func){this.addCounter = func;}
}