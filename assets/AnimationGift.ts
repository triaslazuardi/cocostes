
import { _decorator, Component, Node, SpriteAtlas, Sprite, SpriteFrame, Tween, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationGift')
export class AnimationGift extends Component {
    @property(Sprite) spriteAnimation : Sprite = null!;
    
    listSpriteFrame : SpriteFrame[] = [];

    tweenAnimation : Tween<Sprite> = null!;

    currentSpriteFrame : number = 0;
    spriteFramePerSecond : number = 0.07;

    isLifeCycle : boolean = false;
    lifeCycle : number = 0;
    lifeCycleLimit : number = 4;

    callback : Function | null = null;
    startAnimateGift(sa : SpriteAtlas, sfName : string) {

        this.isLifeCycle = false;
        this.listSpriteFrame = [];
        
        let prefix = sfName;
        let suffix = '-min';

        for(let index = 0; index < 50; index++){
            let sf = sa.getSpriteFrame(prefix+index+suffix);
            if(sf)
                this.listSpriteFrame.push(sf);
        }

        this.startAnimate();
    }

    startAnimate(callback : Function | null = null) {
        this.callback = null;

        this.stopAnimate();

        this.callback = callback;

        this.node.active = true;

        this.tweenAnimation = tween(this.spriteAnimation)
            .call((sprite : Sprite)=>{ 
                sprite.spriteFrame = this.listSpriteFrame[this.currentSpriteFrame];
                this.currentSpriteFrame++;

                if(this.currentSpriteFrame >= this.listSpriteFrame.length) {
                    this.currentSpriteFrame = 0;
                    this.lifeCycle++;
                }
                if(this.isLifeCycle && this.lifeCycle >= this.lifeCycleLimit) {
                    this.stopAnimate();
                }
            })
            .delay(this.spriteFramePerSecond)
            .union()
            .repeatForever()
            .start();
    }

    stopAnimate() {
        if(this.tweenAnimation != null) {
            this.tweenAnimation.stop();
        }

        this.currentSpriteFrame = 0;
        this.lifeCycle = 0;
        if(this.node) this.node.active = false;

        if(this.callback != null) {
            this.callback();
        }
        this.callback = null;
    }
}

