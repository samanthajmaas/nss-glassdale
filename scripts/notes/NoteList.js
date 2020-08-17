import { getNotes, useNotes} from "./NoteDataProvider.js"
import { noteHTML } from "./NoteHTMLConverter.js"
import {criminalsCopy} from "../criminals/CriminalProvider.js"
import {NoteForm} from "./NoteForm.js"

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")



eventHub.addEventListener("noteStateChanged", customEvent => {
    const allNotes = useNotes()
    render(allNotes)
    NoteForm()
})


eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})


export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
}

const render = (noteCollection) => {
    const criminals = criminalsCopy()

    const allNotesTurnedIntoStrings = noteCollection.reverse().map(
         (currentNote) => {
             const foundCriminal = criminals.find(
                 (criminal) => {
                     return criminal.id === currentNote.criminalId
                 })
         
             return noteHTML(currentNote, foundCriminal)
         }
     ).join("")
 
     contentTarget.innerHTML = 
     `<button id='hideNotes'> Hide Notes </button>
     <br></br>
      ${allNotesTurnedIntoStrings}
      `
 }
