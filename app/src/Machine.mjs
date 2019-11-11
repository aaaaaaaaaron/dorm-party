
class Machine {

    constructor(container){
        this._renderView(container)
    }

    _renderView(container){
        const machinesDiv = document.createElement("div");
        machinesDiv.classList.add("col-md-12", "text-center");

        machinesDiv.innerText = "Hello world";

        // alert("hellow world");


        container.append(machinesDiv)
    }


}

export {Machine}