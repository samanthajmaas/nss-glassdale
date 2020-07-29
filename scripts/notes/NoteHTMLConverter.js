export const noteHTML = (noteObj) => {
    return `
        <section class ="note">
            <div class="input note--title">Title: ${ noteObj.title }</div>
            <div class="input note--content">${ noteObj.content }</div>
            <div class="input note--author">Author: ${ noteObj.author }</div>
            <div class="input note--timetamp">Timestamp: ${ new Date(noteObj.timestamp).toLocaleDateString('en-US') }</div>
        </section>
            `
}