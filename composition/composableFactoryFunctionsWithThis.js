
const mover = ()=> ({
    move: () => {
        ++this.x;
        ++this.y;
        this.life = this.life - 5;
        console.log(this.x, this.y, this.life)
    }
});

const runner = ()=> ({
    run: () => {
        this.x = this.x + 5;
        this.y = this.y + 5;
        this.life = this.life - 10;
        console.log(this.x, this.y, this.life)
    }
});

const eater = ()=> ({
    eat: () => {
        this.life = this.life + 10;
        console.log(this.x, this.y, this.life);
    }
});


const moverRunnerEaterCharacter = (name)=>{
    this.x = 0;
    this.y = 0;
    this.life = 100;
    this.name = name;
    return Object.assign({},mover(),runner(),eater())
}

const ivan = moverRunnerEaterCharacter("Ivan");
ivan.move();
ivan.move();
ivan.run();
ivan.run();
ivan.eat();