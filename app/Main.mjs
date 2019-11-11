import {Machine} from "./src/Machine";
import {Counter} from "../Counter"

const machineContainer = document.createElement('div');
machineContainer.classList.add("container");
document.body.appendChild(machineContainer, document.body.firstChild);    // Insert as the first child
new Machine(machineContainer);

alert("hello");