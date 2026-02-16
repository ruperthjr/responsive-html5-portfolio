# JavaScript DOM Manipulation & Interactivity: Complete Concept Guide

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that runs in web browsers, enabling dynamic and interactive web experiences. Originally created to add simple interactivity to web pages, JavaScript has evolved into a powerful language used for front-end interfaces, server-side applications, mobile apps, and more.

## The Document Object Model (DOM)

The DOM is a programming interface that represents HTML documents as a tree structure of objects. JavaScript uses the DOM to access, modify, create, and delete HTML elements and their attributes.

### DOM Tree Structure

Every HTML document becomes a tree of nodes:

```
document
  └── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── header
          │   ├── h1
          │   └── nav
          └── main
              └── section
```

Each element, text, and comment becomes a node that JavaScript can manipulate.

### Accessing DOM Elements

#### `getElementById()`
Returns a single element with the specified ID.

```javascript
const header = document.getElementById('main-header');
```

Fast and specific, but only works with IDs.

#### `querySelector()`
Returns the first element matching a CSS selector.

```javascript
const button = document.querySelector('.btn-primary');
const firstLink = document.querySelector('nav a');
```

Flexible and powerful, uses CSS selector syntax.

#### `querySelectorAll()`
Returns all elements matching a CSS selector as a NodeList.

```javascript
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    console.log(link.textContent);
});
```

Returns a static NodeList (not live), use `forEach` to iterate.

#### Other Selection Methods

```javascript
document.getElementsByClassName('card');
document.getElementsByTagName('p');
document.getElementsByName('username');
```

These return live HTMLCollections that update automatically when the DOM changes.

## Event Handling

Events are actions that happen in the browser, like clicks, keypresses, scrolling, or page loads. JavaScript can listen for and respond to these events.

### Adding Event Listeners

#### `addEventListener()`
The modern way to attach event handlers.

```javascript
button.addEventListener('click', function() {
    console.log('Button clicked!');
});
```

Advantages over inline handlers:
- Multiple listeners on same element
- Easy to remove with `removeEventListener()`
- Doesn't overwrite existing handlers
- Works with event capturing and bubbling

### Common Events

#### Mouse Events
```javascript
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mouseover', handler);
element.addEventListener('mouseout', handler);
```

#### Keyboard Events
```javascript
element.addEventListener('keydown', handler);
element.addEventListener('keyup', handler);
element.addEventListener('keypress', handler);
```

Access key information through event object:
```javascript
element.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(e.code);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
});
```

#### Form Events
```javascript
form.addEventListener('submit', handler);
input.addEventListener('input', handler);
input.addEventListener('change', handler);
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);
```

#### Window Events
```javascript
window.addEventListener('load', handler);
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
document.addEventListener('DOMContentLoaded', handler);
```

### Event Object

Every event handler receives an event object with useful information:

```javascript
button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
});
```

#### `preventDefault()`
Stops the default browser action (like form submission or link navigation).

```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission with JavaScript instead
});
```

#### `stopPropagation()`
Stops the event from bubbling up to parent elements.

```javascript
button.addEventListener('click', (e) => {
    e.stopPropagation();
    // Click won't trigger parent handlers
});
```

#### `target` vs `currentTarget`
- `target`: The element that triggered the event (deepest element clicked)
- `currentTarget`: The element with the event listener attached

```javascript
div.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
});
```

### Event Bubbling and Capturing

Events propagate through the DOM in phases:
1. Capture phase: From window down to target
2. Target phase: Event reaches target element
3. Bubble phase: From target back up to window

By default, handlers run during bubble phase. Use third parameter for capture:

```javascript
element.addEventListener('click', handler, true);
element.addEventListener('click', handler, {capture: true});
```

### Event Delegation

Attach one listener to a parent instead of many listeners to children.

```javascript
const list = document.getElementById('todo-list');

list.addEventListener('click', (e) => {
    if (e.target.matches('.delete-btn')) {
        const item = e.target.closest('li');
        item.remove();
    }
});
```

Benefits:
- Better performance with many elements
- Works with dynamically added elements
- Less memory usage

## Manipulating Elements

### Changing Content

#### `textContent`
Gets or sets text content, ignoring HTML.

```javascript
element.textContent = 'New text';
const text = element.textContent;
```

#### `innerHTML`
Gets or sets HTML content.

```javascript
element.innerHTML = '<strong>Bold text</strong>';
```

Warning: Can create security vulnerabilities with user input (XSS attacks).

#### `innerText`
Similar to textContent but respects CSS styling.

```javascript
element.innerText = 'Visible text';
```

### Changing Attributes

#### `getAttribute()` and `setAttribute()`
```javascript
const href = link.getAttribute('href');
link.setAttribute('href', 'https://example.com');
link.removeAttribute('target');
```

#### Direct Property Access
```javascript
link.href = 'https://example.com';
input.value = 'New value';
img.src = 'image.jpg';
```

#### Data Attributes
```javascript
element.setAttribute('data-user-id', '123');
const userId = element.dataset.userId;
element.dataset.userName = 'John';
```

### Changing Styles

#### Inline Styles
```javascript
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '16px';
```

For multi-word properties, use camelCase.

#### CSS Classes
```javascript
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('expanded');
element.classList.contains('selected');
element.classList.replace('old', 'new');
```

Classes are preferred over inline styles for separation of concerns.

### Creating and Removing Elements

#### Creating Elements
```javascript
const div = document.createElement('div');
div.textContent = 'Hello World';
div.classList.add('card');

const text = document.createTextNode('Plain text');
```

#### Adding to DOM
```javascript
parent.appendChild(element);
parent.insertBefore(newElement, existingElement);
parent.append(element1, element2, 'text');
parent.prepend(element);
element.after(newElement);
element.before(newElement);
```

#### Removing from DOM
```javascript
element.remove();
parent.removeChild(element);
element.replaceWith(newElement);
```

#### Cloning Elements
```javascript
const clone = element.cloneNode();
const deepClone = element.cloneNode(true);
```

## Working with Forms

### Form Validation

#### HTML5 Built-in Validation
```javascript
input.required = true;
input.pattern = '[A-Za-z]+';
input.minLength = 5;
input.maxLength = 20;
```

#### Custom Validation
```javascript
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

input.addEventListener('blur', () => {
    if (!validateEmail(input.value)) {
        input.setAttribute('aria-invalid', 'true');
        errorSpan.textContent = 'Invalid email';
    } else {
        input.setAttribute('aria-invalid', 'false');
        errorSpan.textContent = '';
    }
});
```

### Form Submission

```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log(data);
    
    // Submit with fetch API
    fetch('/api/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
});
```

### Getting Form Values

```javascript
const name = form.elements.name.value;
const email = document.getElementById('email').value;

const formData = new FormData(form);
for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
}
```

## ARIA and Accessibility in JavaScript

JavaScript must maintain and enhance accessibility, not break it.

### Managing Focus

```javascript
element.focus();
element.blur();

element.focus({preventScroll: true});

if (document.activeElement === element) {
    console.log('Element has focus');
}
```

#### Focus Trap (for modals)
```javascript
const focusableElements = modal.querySelectorAll(
    'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});
```

### ARIA Attributes

#### Dynamic ARIA States
```javascript
button.setAttribute('aria-expanded', 'false');

button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', (!isExpanded).toString());
    content.hidden = isExpanded;
});
```

#### ARIA Live Regions
```javascript
const status = document.createElement('div');
status.setAttribute('role', 'status');
status.setAttribute('aria-live', 'polite');
status.textContent = 'Loading...';

status.setAttribute('aria-live', 'assertive');
```

- `polite`: Announce when user is idle
- `assertive`: Announce immediately
- `off`: Don't announce

#### Common ARIA Patterns

```javascript
element.setAttribute('aria-label', 'Close dialog');
element.setAttribute('aria-labelledby', 'heading-id');
element.setAttribute('aria-describedby', 'description-id');
element.setAttribute('aria-hidden', 'true');
element.setAttribute('aria-controls', 'target-id');
element.setAttribute('aria-invalid', 'true');
```

### Keyboard Navigation

```javascript
element.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'Enter':
        case ' ':
            e.preventDefault();
            element.click();
            break;
        case 'Escape':
            closeModal();
            break;
        case 'ArrowDown':
            focusNextItem();
            break;
        case 'ArrowUp':
            focusPreviousItem();
            break;
        case 'Home':
            focusFirstItem();
            break;
        case 'End':
            focusLastItem();
            break;
    }
});
```

## Smooth Scrolling

### Using `scrollIntoView()`
```javascript
element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
});
```

### Using `window.scrollTo()`
```javascript
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
```

### Custom Smooth Scroll with Offset
```javascript
function scrollToElement(element, offset = 0) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}
```

## Scroll Events and Performance

Scroll events fire many times per second, so optimize their handlers.

### Throttling with `requestAnimationFrame`
```javascript
let scrollTimeout;

window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(handleScroll);
}, {passive: true});

function handleScroll() {
    const scrollPosition = window.pageYOffset;
    console.log(scrollPosition);
}
```

### Passive Event Listeners
```javascript
window.addEventListener('scroll', handler, {passive: true});
```

Tells browser you won't call `preventDefault()`, allowing smoother scrolling.

## Browser Storage

### LocalStorage
Stores data with no expiration.

```javascript
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
localStorage.removeItem('theme');
localStorage.clear();

const data = {name: 'John', age: 30};
localStorage.setItem('user', JSON.stringify(data));
const user = JSON.parse(localStorage.getItem('user'));
```

### SessionStorage
Stores data for one session (until browser is closed).

```javascript
sessionStorage.setItem('tempData', 'value');
const temp = sessionStorage.getItem('tempData');
```

### Storage Limitations
- 5-10MB limit per domain
- Only stores strings (use JSON for objects)
- Synchronous (blocks main thread)
- Not available in all environments (private browsing)

## Timing Functions

### `setTimeout()`
Executes code after a delay.

```javascript
const timeoutId = setTimeout(() => {
    console.log('Delayed message');
}, 1000);

clearTimeout(timeoutId);
```

### `setInterval()`
Executes code repeatedly at intervals.

```javascript
const intervalId = setInterval(() => {
    console.log('Repeated message');
}, 1000);

clearInterval(intervalId);
```

### `requestAnimationFrame()`
Synchronizes with browser repaints for smooth animations.

```javascript
function animate() {
    element.style.left = (parseInt(element.style.left) + 1) + 'px';
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

## Modern JavaScript Features

### Arrow Functions
```javascript
const add = (a, b) => a + b;

element.addEventListener('click', (e) => {
    console.log(e.target);
});
```

Arrow functions don't bind their own `this`.

### Template Literals
```javascript
const name = 'John';
const greeting = `Hello, ${name}!`;

const html = `
    <div class="card">
        <h3>${title}</h3>
        <p>${description}</p>
    </div>
`;
```

### Destructuring
```javascript
const {name, email} = user;
const [first, second] = array;

function greet({name, age}) {
    console.log(`${name} is ${age} years old`);
}
```

### Spread Operator
```javascript
const newArray = [...oldArray, newItem];
const newObject = {...oldObject, newProperty: value};

const elements = [...document.querySelectorAll('.item')];
```

### Default Parameters
```javascript
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
```

### Optional Chaining
```javascript
const value = object?.property?.deepProperty;
const result = array?.[0]?.value;
```

### Nullish Coalescing
```javascript
const value = userInput ?? defaultValue;
```

Only uses default if userInput is null or undefined, not 0 or ''.

## Async JavaScript

### Promises
```javascript
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log('Done'));
```

### Async/Await
```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

Async/await makes asynchronous code look synchronous and easier to read.

## Performance Best Practices

### Minimize DOM Access
```javascript
const element = document.getElementById('myElement');
for (let i = 0; i < 1000; i++) {
    element.textContent += 'text';
}
```

### Batch DOM Changes
```javascript
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
list.appendChild(fragment);
```

### Debounce Input Events
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

input.addEventListener('input', debounce(handleInput, 300));
```

### Use Event Delegation
```javascript
document.addEventListener('click', (e) => {
    if (e.target.matches('.delete-button')) {
        handleDelete(e.target);
    }
});
```

## Common Mistakes to Avoid

1. **Not using `const`/`let`**: Always use const or let, never var
2. **Forgetting `preventDefault()`**: Forms and links have default behaviors
3. **Not checking if elements exist**: Always check before manipulating
4. **Inline event handlers**: Use addEventListener instead
5. **Not removing event listeners**: Can cause memory leaks
6. **Modifying arrays while iterating**: Clone first or iterate backwards
7. **Not handling errors**: Always use try/catch with async code
8. **Breaking accessibility**: Maintain focus, ARIA, keyboard support

## Debugging JavaScript

### Console Methods
```javascript
console.log('Basic logging');
console.error('Error message');
console.warn('Warning message');
console.table([{name: 'John', age: 30}]);
console.time('operation');
console.timeEnd('operation');
```

### Debugger Statement
```javascript
function problematicFunction() {
    debugger;
    const result = complexCalculation();
    return result;
}
```

### Browser DevTools
- Set breakpoints
- Step through code
- Watch variables
- Inspect call stack
- Profile performance

## Key Takeaways

1. **The DOM is a tree** - Every element is a node you can access and modify
2. **Events drive interactivity** - Listen for user actions and respond
3. **Accessibility is essential** - Manage focus, use ARIA, support keyboard
4. **Performance matters** - Minimize DOM access, use event delegation
5. **Modern features improve code** - Arrow functions, async/await, destructuring
6. **Always validate user input** - Never trust client-side data alone
7. **Test on real devices** - Different browsers behave differently
8. **Separate concerns** - Use classes for styling, JavaScript for behavior

JavaScript brings web pages to life. Master the DOM, events, and accessibility, and you can build interactive experiences that work for everyone.