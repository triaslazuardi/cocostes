
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


 
@ccclass('ChooseFile')
export class ChooseFile extends Component {
    onClickFileFromCocos() {
           let input = document.createElement('input');
            input.type = 'file';
            input.click();
            console.log("input 1 >> ", input);
        input.onchange = () => {
    
            let file = input.files;
    
            alert("input get file >> "+ file![0]);
        } 
    }
}

