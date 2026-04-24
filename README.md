# Project-Calculator-v2
This is the final project for TOP Foundations.

# Project---Calculator
Final Project to End TOP Foundations. This is a pretty cool calculator.

## Overview

This is a basic calculator built using JavaScript, HTML, and CSS.
The goal of this project was to practice DOM manipulation, event handling, and building application logic without relying on built-in shortcuts like `eval()`.


## Features

* Dynamic button creation using JavaScript
* Handles basic operations: addition, subtraction, multiplication, division
* Clear (`C`) functionality
* State-based input handling (no `eval()`)


## How It Works

The calculator tracks user input using three variables:

* `num1`  first number
* `operator`  selected operation (`+`, `-`, `*`, `/`)
* `num2`  second number

When the `=` button is pressed:

1. The app calls a custom `operate()` function
2. The function evaluates the result based on the operator
3. The display updates with the result


## Challenges & What I Learned

* Initially tried using a string-based approach (`"7+7"`) and considered using `eval()`, but learned why it’s unsafe and avoided it
* Transitioned to a state-based approach using `num1`, `operator`, and `num2`
* Debugged issues with event listeners and duplicate display updates
* Learned how to manage application state across user interactions


## Future Improvements

* Prevent invalid inputs (e.g. multiple operators in a row)
* Add keyboard support
* Improve UI/UX styling
* Handle decimal edge cases more robustly

Updates to readme.

## Dev Notes

Ran into some Git/SSH headaches during setup and accidentally created conflicting local directories while cloning the repo. Ended up deleting the old folders, fixing SSH access, and re-cloning everything properly.

Lesson learned: if you're cloning with SSH, let Git create the folder for you.