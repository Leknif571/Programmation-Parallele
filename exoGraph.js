function createPromise(name, timeOut, isRejected) {	
    console.log(`Promise ${name} démarrée`);
    const rejectedPromise = new Promise((resolve, reject) => {    
        setTimeout(() => {
            if (isRejected) 
                reject(`Promise ${name} rejected`)
            else 
                resolve(`Promise ${name} terminer`)
                console.log(`Promise ${name} terminée`);
        }, timeOut)
    })

    return rejectedPromise;
}


export async function graphExo1() {
    try {
        let etapeA = createPromise("A", 200, false);

        let etapeB = (async () => {
            await etapeA;
            return createPromise("B", 500, false)
        })() 

        let etapeC = (async () => {
            await etapeA;
            return createPromise("C", 500, false)
        })() 

        let etapeD = (async () => {
            await Promise.all([etapeA,etapeB]);
            return createPromise("D", 500, false)
        })() 

        let results = await Promise.all([etapeA, etapeB, etapeC, etapeD]);
        console.log(results);

        
    } catch (e) {
        console.log("Une des promesses a échoué (avec async/await) : " + e);
    }

}

export async function graphExo3() {
    try {
        let etapeA = createPromise("A", 200, false);

        let etapeB = (async () => {
            await etapeA;
            return createPromise("B", 300, false)
        })() 

        let etapeC = (async () => {
            await etapeA;
            return createPromise("C", 100, false)
        })() 

        let etapeD = (async () => {
            await etapeC;
            await etapeB;
            
            createPromise("D", 400, true).catch(async e => {
                console.log("Erreur dans D : " + e);
                return createPromise("E", 300, false)
            }) 
                 
        })() 

        let etapeF = (async () => {
            await etapeC;
            return createPromise("F", 100, false)
        })() 

        let results = await Promise.all([etapeA, etapeB, etapeC, etapeD, etapeF]);

        console.log(results);
    } catch (e) {
        console.log("Une des promesses a échoué (avec async/await) : " + e);
    }

}