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

export async function exo4() {
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

