// program of adding evevtnlistener to the calculate button   
calc();
function calc() {
    let btn = document.querySelector("button");

    btn.addEventListener("click", () => {

        const input_cost_Element = document.querySelector('.js-input-cost');


        let cost_Entered = Number(input_cost_Element.value);


        if (cost_Entered > 500) {

            cost_Entered = cost_Entered + 10;

        }

        document.querySelector(".result").
            innerHTML = `Total Cost: $${cost_Entered}`;
    });
}

// program function of the calculate button   
function calcus() {
    const input_cost_Element = document.querySelector('.js-input-cost');


    let cost_Entered = Number(input_cost_Element.value);


    if (cost_Entered > 500) {

        cost_Entered = cost_Entered + 10;

    }

    document.querySelector(".result").
        innerHTML = `Total Cost: $${cost_Entered}`;

}


function keyboard_evnt() {
    const evntlstn = event.key;
    if (evntlstn === 'Enter') {
        calcus();
    }
}
