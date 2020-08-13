import {criminalsList} from "./criminals/CriminalList.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import {officersSelect} from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js";
import { showNoteButton } from "./notes/ShowNotesButton.js";
import "./notes/NoteList.js"
import {showWitnessButton} from "./witnesses/WitnessesButton.js"
import {hideNotesButton} from "./notes/HideNotesButton.js"
import "./witnesses/WitnessesList.js"




criminalsList()
ConvictionSelect()
officersSelect()
NoteForm()
showNoteButton()
showWitnessButton()
hideNotesButton()
