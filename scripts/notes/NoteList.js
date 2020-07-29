import { getNotes, useNotes} from "./NoteDataProvider.js"
import { noteHTML } from "./NoteHTMLConverter.js"

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

export const NoteList = () => {
    getNotes()
        .then (() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}

const render = (noteArray) => {
    const allNotesTurnedIntoStrings = noteArray.map(
         (currentNote) => {
             return noteHTML(currentNote)
         }
     ).join("")
 
     contentTarget.innerHTML = allNotesTurnedIntoStrings
 }