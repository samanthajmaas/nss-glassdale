let convictions= []

export const convictionsCopy = () => {
   return convictions.slice()
}

export const getConvictions = () => {
    return fetch ("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(crimeArray => {
            convictions = crimeArray
        })
}
