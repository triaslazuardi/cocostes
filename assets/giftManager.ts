
import { _decorator, Component, Node, SpriteAtlas } from 'cc';
import { AnimationGift } from './AnimationGift';
const { ccclass, property } = _decorator;

@ccclass('GiftManager')
export class GiftManager extends Component {
    @property(AnimationGift) animationGift : AnimationGift[] = [];
    // @property(AnimationGift) animationGift1 : AnimationGift = null!;
    // @property(AnimationGift) animationGift2 : AnimationGift = null!;
    // @property(AnimationGift) animationGift3 : AnimationGift = null!;
    // @property(AnimationGift) animationGift4 : AnimationGift = null!;
    // @property(AnimationGift) animationGift5 : AnimationGift = null!;
    // @property(AnimationGift) animationGift6 : AnimationGift = null!;
    // @property(AnimationGift) animationGift7 : AnimationGift = null!;

    @property(SpriteAtlas) spriteAtlasT : SpriteAtlas[] = []; 
    nameGift : String[] = ["beer","cigarettes","wine","burger","pizza","cigar", "tea","icecream"];

    startGiftAnimation() {
        for(let i in this.animationGift) {
            console.log("tesst : "+ i);
            this.animationGift[i].startAnimateGift(this.spriteAtlasT[i], this.nameGift[i].toString());
        }
        // this.animationGift.startAnimateGift(this.spriteAtlasT[0], "beer");
        // this.animationGift1.startAnimateGift(this.spriteAtlasT[1], "cigarettes");
        // this.animationGift2.startAnimateGift(this.spriteAtlasT[2], "wine");
        // this.animationGift3.startAnimateGift(this.spriteAtlasT[3], "burger");
        // this.animationGift4.startAnimateGift(this.spriteAtlasT[4], "pizza");
        // this.animationGift5.startAnimateGift(this.spriteAtlasT[5], "cigar");
        // this.animationGift6.startAnimateGift(this.spriteAtlasT[6], "tea");
        // this.animationGift7.startAnimateGift(this.spriteAtlasT[7], "icecream");
    }

}
