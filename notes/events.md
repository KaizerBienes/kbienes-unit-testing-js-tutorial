## event bubbling and capturing?
- window, document, body, first, second, third, fourth, button
- `event capturing` phase first from window->button
- `event bubbling` phase second from button->window
- by default, it listens to the `event bubbling` phase which is why they do not get called twice
- for event listeners, change the parameter to "true" so that it will be during the "capturing" phase; but default is on the bubbling phase

## stopPropagation() and preventDefault()
- `stopPropagation()`
    - stops when moving up the `event capturing`  / `event bubbling` phases
    - propagation is synchronous
- `preventDefault()`
    - does not stop the propagation on either during capturing and bubbling
    - stops the default event from triggering (e.g. checkbox) but will still go through the list / propagate