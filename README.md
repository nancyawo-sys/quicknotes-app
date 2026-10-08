# QuickNotes

QuickNotes is a simple note-taking app I built with HTML, CSS and JavaScript. I can type a short note, pick a category for it, search through my notes and delete the ones I don't need any more. The notes are saved in the browser, so they are still there when I refresh the page.

## Features

- Add a note and choose a category: Personal, Work or Study
- Each category has its own coloured stripe on the note card
- Error messages for empty notes and notes longer than 200 characters
- Delete any note with its own Delete button
- Search that filters the notes as I type and ignores capital letters
- A message that shows how many notes I have (none, one or many)
- Notes saved with localStorage, so they survive a refresh
- A layout that adjusts for phone screens

## How to run it locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.
4. You can also just double-click `index.html` to open it in your browser.

## What I learned

- I learned how to build the list on the page with `createElement` and `textContent`, which is safer than putting what the user types into `innerHTML`.
- I learned how `localStorage` works. It only stores text, so I had to use `JSON.stringify` to save the notes and `JSON.parse` to load them again.
- I learned the pattern of changing the array first, then saving it, then drawing the list again with `render()`. When I forgot the final `render()` call, nothing showed on the page, which taught me how important it is.
- I learned how to use Flexbox for the form and a media query so the form stacks on small screens.
- I learned to check where my files really are. Some of my folders ended up inside other folders by mistake, and I had to move them.
