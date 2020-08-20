export const facilitiesHTML = (facilityObj, criminalsArray) => {
    return `
    <section class="facility">
        <h3 class="facility--name"> ${facilityObj.facilityName} </h3>
            <div class="facility--security"> ${facilityObj.securityLevel} </div>
            <div class="facility--capactiy"> ${facilityObj.capacity} </div>
            <ul class= "facility--criminals">
            ${
                criminalsArray.map(criminal => `<li> ${criminal.name}</li>`).join("")
            }
            </ul>
    </section>
    `

}