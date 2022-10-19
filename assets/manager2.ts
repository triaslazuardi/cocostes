
import { _decorator, Component, Node, Sprite, Color, Label, EventTouch, UITransform, math, color, Button } from 'cc';
import { GiftManager } from './giftManager';
const { ccclass, property } = _decorator;

 
@ccclass('Manager2')
export class Manager2 extends Component {
    @property(GiftManager) scriptGiftManager: GiftManager = null!;
    // wakeLockEnabled : boolean = false;
    @property(Label) lblWidh : Label = null!;
    @property(Label) lblHeight : Label = null!;
    @property(Label) lblGAMEWIDTH : Label = null!;
    @property(Label) lblGAMEHEIGHT : Label = null!;
    @property(UITransform) transformBg : UITransform = null!

    bgSize : math.Size;
    DESIGNWIDTH: number = 0;
    DESIGNHEIGHT: number = 0;
    GAMEWIDTH: number = 0;
    GAMEHEIGHT: number = 0;
    WIDTH : number = 0;
    HEIGHT : number = 0;

    //test animasi
    @property(Sprite) imageTest : Sprite = null!; 
    

    @property(Color)
    colorRand: Color[] = [color(255, 255, 50, 255), color(255, 0, 0, 255), color(0, 102, 0, 255), color(0, 255, 255, 255), color(255, 102, 0, 255), color(255, 0, 255, 255), color(101, 101, 255, 255), color(102, 51, 0, 255), color(255, 128, 0, 255), color(107, 188, 255, 255), color(255, 255, 50, 255)]

    nameGift : String[] = ["beer","cigarettes","wine","burger","pizza","cigar", "tea","icecream"];

    onLoad() {
        this.WIDTH = window.innerWidth;
        this.HEIGHT = window.innerHeight;
        this.GAMEWIDTH = $("#GameCanvas").width()!;
        this.GAMEHEIGHT = $("#GameCanvas").height()!;

        this.lblWidh.string = "WIDTH : " + this.WIDTH;
        this.lblHeight.string = "HEIGHT : " + this.HEIGHT;
        this.lblGAMEWIDTH.string = "GAMEWIDTH : " + this.GAMEWIDTH;
        this.lblGAMEHEIGHT.string = "GAMEHEIGHT : " + this.GAMEHEIGHT;

        window.addEventListener('resize', () => {
            console.warn("RESIZE");

            this.WIDTH = window.innerWidth;
            this.HEIGHT = window.innerHeight;
            this.GAMEWIDTH = $("#GameCanvas").width()!;
            this.GAMEHEIGHT = $("#GameCanvas").height()!;

            this.lblWidh.string = "WIDTH : " + this.WIDTH;
            this.lblHeight.string = "HEIGHT : " + this.HEIGHT;
            this.lblGAMEWIDTH.string = "GAMEWIDTH : " + this.GAMEWIDTH;
            this.lblGAMEHEIGHT.string = "GAMEHEIGHT : " + this.GAMEHEIGHT;

            // if (this.resizeBackgroundFunction != null)
            //     this.resizeBackgroundFunction();

            this.methodeResizeCallback();
        });

        console.log("testttW >> "+ $("#GameCanvas").width()!);
        console.log("testttH >> "+ $("#GameCanvas").height()!);

    }

    start() {
        this.DESIGNWIDTH = 736;
        this.DESIGNHEIGHT = 414;

        this.uiStartResize();

        //test animation 
        setInterval(()=>{
            this.changeColor();
        }, 1000);

        setTimeout(()=> {
            if(this.scriptGiftManager != null)this.scriptGiftManager.startGiftAnimation();
        }, 1000)
    }

    changeColor() {
        this.imageTest.color = this.colorRand[Math.floor(Math.random() * this.colorRand.length)];
    }


    uiStartResize() {
        if(this.transformBg == null) return;
        this.bgSize = new math.Size(this.transformBg.contentSize.x,this.transformBg.contentSize.y);
        this.methodeResizeCallback();
    }

    methodeResizeCallback() {
        console.log("[TKGGameManager]=>resizeCallback : ", this.transformBg);
        if(this.transformBg == null) return;
        if(this.bgSize)
            this.resizeBackground(this.bgSize, this.transformBg);
    }

    public resizeBackground(orginalSize: math.Size, target: UITransform) {

        let designHeightWidth = this.DESIGNHEIGHT / this.DESIGNWIDTH;
        let canvasHeightWidth = this.GAMEHEIGHT / this.GAMEWIDTH;

        console.log("orginalSize : ", orginalSize.x + "x" + orginalSize.y);
        console.log("designHeightWidth : ", designHeightWidth);
        console.log("canvasHeightWidth : ", canvasHeightWidth);

        let mathSize: math.Size = null!;

        if (designHeightWidth < canvasHeightWidth) {
            // FIT WIDTH
            console.log("Fit Width");
            let widthScale = orginalSize.x / this.GAMEWIDTH;
            let heightScaled = widthScale * this.GAMEHEIGHT;

            console.log("widthScale : ", widthScale);
            console.log("heightScaled : ", heightScaled);

            mathSize = new math.Size(orginalSize.x, heightScaled);
        }
        else {
            // FIT HEIGHT
            console.log("Fit Height");
            let heightScale = this.DESIGNHEIGHT / this.GAMEHEIGHT;
            let widthScaled = heightScale * this.GAMEWIDTH;

            console.log("heightScale : ", heightScale);
            console.log("widthScaled : ", widthScaled);

            mathSize = new math.Size(widthScaled, orginalSize.y);
        }
        console.log("math.Size : ", mathSize);
        target.setContentSize(mathSize);
    }
    
    onClickFilefromHtml() {
        // let input = document.createElement('input');
        // input.type = 'file';
        // input.click();
        
        // input.onchange = () => {

        //     let file = input.files;

        //     console.log("input >> ", file![0]);
        //     // if (file!.length > 0) {
        //     //     this.labelAvatarChoose.string = file![0].name;
        //     //     this.fileUpload = file![0];
        //     // } 
        // } 
        creatFileDoc();
    }

    onClickFileFromCocos() {
    //    let input = document.createElement('input');
    //     input.type = 'file';
        // input.click();
        // console.log("input 1 >> ", input);
    // input.onchange = () => {

    //     let file = input.files;

    //     console.log("input >> ", file![0]);
    // } 

        let input2 = new ElementDoc('input', 'file').docInput;
        // input.docInput.click();
        console.log("input 2 >> ", input2);
    }
}

export class ElementDoc extends Button {

    docInput : any;
    
    constructor(_tagName : string, _typeFile : string) {
        super();
        this.docInput = document.createElement(_tagName);
        this.docInput.type = _typeFile;
        this.docInput.click();
    }
}

