import * as wasm from "../wasm/pkg/index";
import * as PIXI from "pixi.js";


let app = new PIXI.Application({
    width: 512, height: 512, transparent: true, resolution: 1, forceCanvas: true
});

document.getElementById("display")?.appendChild(app.view);

app.loader.add("images/cat.png").load(setup);

let cat: PIXI.Sprite;

function setup() {
    cat = new PIXI.Sprite(app.loader.resources["images/cat.png"].texture);
    app.stage.addChild(cat);
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta: number) {
    cat.x += 1;
}
