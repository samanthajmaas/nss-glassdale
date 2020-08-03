export const criminalHTML = (criminalObj) => {
    return `
    <section class="criminal">
        <h3 class="criminal--name">${criminalObj.name}</h3>
        <div class="criminal--age"> Age: ${criminalObj.age}</div>
        <div class="criminal--conviction">Crime: ${criminalObj.conviction}
        <div class="criminal--termStart">Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class="criminal--termEnd">Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
        <dialog class="alibiDialog--${criminalObj.id}">
        ${
            criminalObj.known_associates.map(
                AssociateObj => {
                        return `<div>Known Associate: ${AssociateObj.name}</div>
                        <div> Alibi: ${AssociateObj.alibi} </div>`
                    }
            ).join("")
        }
        </dialog>
        
    </section>
`
}