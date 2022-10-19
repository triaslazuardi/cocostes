
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('Manager')
export class Manager extends Component {
    wakeLockEnabled : boolean = false;
    noSleep = new NoSleep();

    update() {
        let toggleEl = document.querySelector("#toggle");
        toggleEl.addEventListener('click', function() {
            if (!this.wakeLockEnabled) {
              this.noSleep.enable(); // keep the screen on!
              this.wakeLockEnabled = true;
              document.body.style.backgroundColor = "green";
            } else {
                this.noSleep.disable(); // let the screen turn off.
                this.wakeLockEnabled = false;
              document.body.style.backgroundColor = "";
            }
        }, false);
    }
    // public scriptNoSleep : any = null!;

    // public enableNoSleep(flagSleep : boolean) {
    //     console.log("flagSleep : " + flagSleep);
    //         try{
    //             if(this.scriptNoSleep === null ) {
    //                 console.log("SCRIPT NO SLEEP IS NULL");
    //                 this.scriptNoSleep = new NoSleep();
    //             }
    //             console.log("noSleep : ", this.scriptNoSleep);
    //             if(flagSleep){
    //                 this.scriptNoSleep.enable();
    //             }
    //             else{
    //                 this.scriptNoSleep.disable();
    //             }
    //         }catch(err) {
    //             console.error("enable no sleep error : ", err);
    //         }
    //     }
    // }

}

