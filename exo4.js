// ## Exercice 4 : Exercice de pratique d'asynchronisme
// - Vous devez simuler la récupération de plusieurs informations concernant un utilisateur.
// - Chaque information est récupérée via une fonction asynchrone qui met un certain temps à répondre.
// - Vous devez implémenter trois fonctions asynchrones simulant :
//     - la récupération du profil utilisateur (2 secondes)
//     - la récupération des commandes de l'utilisateur (3 secondes)
//     - la récupération des messages de l'utilisateur (1 seconde)
// - Chaque fonction doit :
//     - afficher quand elle démarre
//     - attendre la durée simulée
//     - afficher quand elle termine
//     - retourner une valeur simulée
// - Ces trois opérations doivent être lancées en parallèle (sans worker).
// - Une fois les trois résultats récupérés :
//     - affichez le profil
//     - affichez le nombre de commandes
//     - affichez le nombre de messages
// - Vous devez utiliser un mécanisme permettant d'attendre la fin de toutes les tâches avant d'afficher le résultat final.


// ### Code à adapter
// - Voici le code (non asynchrone que vous pouvez exploiter et / ou adapter !)
// - **ATTENTION LES FONCTIONS SONT A ADAPTER POUR FAIRE DE L'ASYNCHRONISME !!!**
// ```js
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

//  function fetchUserProfile() {
//   console.log("Récupération du profil utilisateur")
//   delay(2000)

//   console.log("Profil utilisateur récupéré")
//   return { name: "Alice" }
// }

//  function fetchUserOrders() {
//   console.log("Récupération des commandes")
//   delay(3000)

//   console.log("Commandes récupérées")
//   return [1, 2, 3, 4]
// }

//  function fetchUserMessages() {
//   console.log("Récupération des messages")
//   delay(1000)

//   console.log("Messages récupérés")
//   return ["msg1", "msg2", "msg3", "msg4", "msg5", "msg6", "msg7", "msg8", "msg9", "msg10", "msg11", "msg12"]
// }

// async function main() {
//     // A remplir ici (En fonction de si vous êtes en commonjs ou module, sinon pas besoin de cette fonction async function main() et vous pouvez directement faire votre code asynchrone dans le fichier directement)
// }
// ```
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function fetchUserProfile() {
  console.log("Récupération du profil utilisateur")
  return delay(2000).then(() => {
    console.log("Profil utilisateur récupéré")
    return { name: "Alice" }
  })
}

function fetchUserOrders() {
  console.log("Récupération des commandes")
  return delay(3000).then(() => {
    console.log("Commandes récupérées")
    return [1, 2, 3, 4]
  })
}

function fetchUserMessages() {
  console.log("Récupération des messages")
  return delay(1000).then(() => {
    console.log("Messages récupérés")
    return [
      "msg1",
      "msg2",
      "msg3",
      "msg4",
      "msg5",
      "msg6",
      "msg7",
      "msg8",
      "msg9",
      "msg10",
      "msg11",
      "msg12",
    ]
  })
}

async function main() {
  let profilePromise = fetchUserProfile()
  let ordersPromise = fetchUserOrders()
  let messagesPromise = fetchUserMessages()

  try {
    let [profile, orders, messages] = await Promise.all([profilePromise, ordersPromise, messagesPromise])

    console.log("Profil :", profile)
    console.log("Nombre de commandes :", orders.length)
    console.log("Nombre de messages :", messages.length)
  } catch (e) {
    console.error(e)
  }
}

main()