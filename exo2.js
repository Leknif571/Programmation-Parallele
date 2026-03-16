async function tache1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let nombreRange = 0;
            for (let i = 1; i <= 100; i++) {
                nombreRange += i;
            }
            resolve(nombreRange);
        }, 1000);
    });
}

async function tache2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let nombreRange = 0;
            for (let i = 101; i <= 200; i++) {
                nombreRange += i;
            }
            resolve(nombreRange);
        }, 1000)
    });
}


async function tache3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let nombreRange = 0;
            for (let i = 201; i <= 300; i++) {
                nombreRange += i;
            }
            resolve(nombreRange);
        }, 1000)
    });
}

export async function traitementAsynchroneSimple() {
    try {
        let result1 = tache1();
        let result2 = tache2();
        let result3 = tache3();

        let results = await Promise.all([result1, result2, result3]);

        console.log("Résultat de la tâche 1 : " + results[0]);
        console.log("Résultat de la tâche 2 : " + results[1]);
        console.log("Résultat de la tâche 3 : " + results[2]);

        let somme = results[0] + results[1] + results[2];
        console.log("La somme des trois tâches est : " + somme);
    } catch (e) { 
        console.log("Une des tâches a échoué : " + e)
    }

}