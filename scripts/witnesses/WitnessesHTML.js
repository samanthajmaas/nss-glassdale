export const witnessHTML = (witnessObj) => {
    return `
    <section class="witnesses">
        <div class="wtinessName">Name: ${witnessObj.name}</div>
        <div class="witnessStatement"> Statement: ${witnessObj.statements}</div>
    </section>
    `
}