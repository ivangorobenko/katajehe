
const mover = (state)=> ({
    move: () => {
        state.x = state.x + 1;
        state.y = state.y + 1;
        state.life = state.life - 5;
        console.log(state)
        return state;
    }
});

const runner = (state)=> ({
    run: () => {
        state.x = state.x + 5;
        state.y = state.y + 5;
        state.life = state.life - 10;
        console.log(state)
        return state;
    }
});

const eater = (state)=> ({
    eat: () => {
        state.life = state.life + 10;
        console.log(state);
        return state;
    }
});

const moverRunnerEaterCharacter = (name)=>{
    let state = {x:0,y:0,life:100, name:name}
    return Object.assign({},mover(state),runner(state),eater(state))
}

const ivan = moverRunnerEaterCharacter("Ivan");
ivan.move();
ivan.move();
ivan.run();
ivan.run();
ivan.eat();
