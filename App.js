// what is the difference between event , native event and synthethic event? how many type event are there?

Event:
An event is an occurrence that happens in the browser, such as a user clicking a button, resizing the window, or pressing a key.
Events can be related to various interactions within the browser, and they are fundamental to building interactive and dynamic web applications.

Native Event:
Native events are the original, browser-specific events that are provided by the browser's DOM API.
These events are not normalized across different browsers, meaning that they may have different properties or behaviors in various browsers.

Synthetic Event:
Synthetic events are a concept introduced by React to provide a consistent and normalized interface for handling events across different browsers.
React wraps native events with its own synthetic event system to ensure a uniform experience and simplify event handling in React applications.
Synthetic events have the same interface as native events but work consistently across different browsers.
 handleSyntheticClick = (e) => {
    // Synthetic event
    console.log('Synthetic Event:', e);
    console.log('Synthetic Event Type:', e.type);
  };
e or event is the Synthetic Event

Types of Events:
There are various types of events in web development, broadly categorized into mouse events, keyboard events, form events, and more.
Common event types include click, mouseover, keydown, submit, change, etc.
Events are triggered by user interactions or changes in the browser environment.


  In summary, native events are the original events provided by the browser, 
  and synthetic events are React's abstraction layer over native events to provide a consistent and normalized event handling experience. 
  The types of events cover a wide range of user interactions and changes in the browser environment.
