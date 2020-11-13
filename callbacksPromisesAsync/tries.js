const fetch = require("node-fetch");

const promise = new Promise((resolve, reject) => {
    reject("toto");
});

function fetchCatAvatars(userId) {
    return fetch(`https://catappapi.herokuapp.com/fff/${userId}`)
        .then(response => response.json())
        .then(user => {
            const promises = user.cats.map(catId =>
                fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
                    .then(response => response.json())
                    .then(catData => catData.imageUrl)
            );
            return Promise.all(promises);
        });
}

const main = async () => {
    //const result = await fetchCatAvatars(123);
    try {
        await promise;
    } catch (error) {
        console.log(error);
    }
    //console.log(result)
};

main();

//--> Cas 1 : gestion de retour avec les callbacks => problème est l'imbrication et la lisibilité. Notamment promise all ou Raise.
//Au contrario de callbacks les promesses sont composables. Dans la programmation fonctionnelle c'est la vertu qu'on cherche atteindre
//--> Cas 2 : Promesses et les then + catch; authentification.
//--> Cas 3 : Async await pour écrire du code asynchrone comme si c'était synchrone. + try/catch

//Quokka ??
