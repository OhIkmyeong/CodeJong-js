export class Result{
    constructor(){
        this.$result = document.getElementById('result');
    }

    ///METHOD
    show_result(result){
        this.$result.textContent = result;
    }
}//class-Result