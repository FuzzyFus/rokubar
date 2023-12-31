const r = require('raylib');

class RDImage {
    constructor(filepath, x, y, sca, rot = 0) {
        this.type = "RDImage" // instanced class being detected as an Object with no way to trace, workaround
        this.sprite = r.LoadTexture(filepath);
        this.posX = x;
        this.posY = y;
        this.rotation = rot
        this.ratio = this.sprite.width / this.sprite.height
        this.scaleY = sca
    }

    update = () => {
        r.DrawTexturePro(this.sprite, 
                        {x: 0, y: 0, width: this.sprite.width, height: this.sprite.height},  
                        {x: 0, y: 0, width: this.scaleY * this.ratio, height: this.scaleY}, 
                        {x: this.posX, y: this.posY}, 
                        0, r.WHITE);
    }
}

module.exports.RDImage = RDImage;