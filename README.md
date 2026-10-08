# QuickNotes

QuickNotes is a note-taking web app built with HTML, CSS and JavaScript. You can write short notes, give each one a category, search through them and delete the ones you no longer need. Your notes are saved in the browser, so they are still there after you refresh the page.

## Features

- Add notes with a category: Personal, Work or Study
- Each category has its own colour on the note card
- Validation: empty notes and notes over 200 characters show an error
- Delete any note
- Search notes as you type (not case-sensitive)
- A count message for zero, one or many notes
- Notes saved with localStorage, so they survive a refresh
- Responsive layout that works on phones

## How to run it locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Or simply double-click `index.html` to open it in your browser.

## What I learned

- How to use `querySelector`, `createElement` and `textContent` to build the page from JavaScript safely.
- How to save and load data with `localStorage`, `JSON.stringify` and `JSON.parse`.
- How the render pattern works: update the array, save it, then redraw the list.
- How to use Flexbox and a media query to make a layout work on small screens.
