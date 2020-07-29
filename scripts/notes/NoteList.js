import { getNotes, useNotes} from "./NoteDataProvider.js"
import { noteHTML } from "./NoteHTMLConverter.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray) => {
   const allNotesTurnedIntoStrings = noteArray.map(
        (currentNote) => {
            return noteHTML(currentNote)
        }
    ).join("")

    contentTarget.innerHTML = allNotesTurnedIntoStrings
}
export const NoteList = () => {
    getNotes()
        .then (() => {
            const allNotes = useNotes()
            return(allNotes)
        })
}