# Project-Calculator-v2

Final project for The Odin Project Foundations.

This project started as a basic calculator assignment and evolved into a fully styled calculator with light/dark themes, a history sidebar, dynamic button generation, and custom UI design choices.

The goal was to strengthen my understanding of JavaScript fundamentals, DOM manipulation, event handling, application state, and connecting HTML, CSS, and JavaScript into a working front-end project.

---

## Overview

This calculator was built using JavaScript, HTML, and CSS without relying on shortcuts like `eval()`.

Instead of evaluating a full string expression, the calculator tracks state using separate variables for numbers and operators, helping reinforce cleaner logic and safer problem-solving practices.

I also focused heavily on UI structure, styling, and learning how CSS, JavaScript, and HTML selectors all depend on each other.

---

## Features

* Dynamic button creation using JavaScript
* Basic operations: addition, subtraction, multiplication, division
* Clear (`C`) functionality
* Light / Dark mode toggle
* Calculation history sidebar
* Sidebar clear history functionality
* Custom themed UI styling
* State-based input handling (no `eval()`)

---

## How It Works

The calculator tracks user input using three variables:

* `num1` → first number
* `operator` → selected operation (`+`, `-`, `*`, `/`)
* `num2` → second number

When the `=` button is pressed:

1. A custom `operate()` function is called
2. The function checks the selected operator
3. The correct math operation is performed
4. The result updates on the display
5. The completed calculation is saved to the history sidebar

This approach helped me better understand application state instead of relying on shortcuts.

---

## Challenges & What I Learned

This project taught me far more than just calculator logic.

Some of the biggest challenges were:

* Matching HTML, CSS, and JavaScript selectors correctly (`id` vs `class`)
* Debugging layout issues caused by incorrect HTML nesting
* Learning how dynamic buttons connect JavaScript to CSS styling
* Managing calculator state without breaking repeated calculations
* Removing placeholder history text after the first calculation
* Improving dark mode behavior using CSS variables and transitions
* Understanding why `background-color` and `transition` behavior mattered

One of my biggest learning moments was realizing that naming and “calling things correctly” is often harder than writing the actual logic.

A small mismatch like:

```css
#calcBtn
```

vs

```css
#calButtons
```

can completely break styling.

That helped me better understand how front-end systems connect.

---

## References & Learning Process

I used a mix of:

* The Odin Project lessons
* MDN documentation
* GitHub reference projects
* Browser DevTools
* Google searches

Rather than copying solutions directly, I used references to better understand structure, layout decisions, DOM manipulation, CSS transforms, and debugging strategies while building my own version.

This project became a strong reminder that development is often about problem-solving and understanding systems, not memorizing syntax.

---

## Future Improvements

* Prevent invalid inputs (multiple operators in a row)
* Add keyboard support
* Improve decimal handling
* Expand scientific calculator functionality
* Improve responsive/mobile layout
* Add stronger animations and UI polish

---

## Dev Notes

I also ran into Git + SSH setup issues during development and accidentally created conflicting local directories while cloning the repo.

I ended up deleting the old folders, fixing SSH access, and re-cloning everything properly.

### Lesson learned:

If you're cloning with SSH, let Git create the folder for you.
Don't manually create duplicate directories first.
