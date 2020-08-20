export const criminalHTML = (criminalObj, facilitiesArray) => {
    return `
    <section class="criminal">
        <h3 class="criminal--name">${criminalObj.name}</h3>
        <div class="criminal--age"> Age: ${criminalObj.age}</div>
        <div class="criminal--conviction">Crime: ${criminalObj.conviction}</div>
        <div class="criminal--termStart">Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class="criminal--termEnd">Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
        <ul class="criminal--facilities">
            ${
                facilitiesArray.map(facility => `<li>${facility.facilityName}</li>` ).join("")
            }
        </ul>
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
            <button id="associateCloseButton">Close</button>
        </dialog>
        
    </section>
`
}