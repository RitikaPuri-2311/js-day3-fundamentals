
## 1. React & JSX

React is a JavaScript library used to build user interfaces using components. JSX (JavaScript XML) allows us to write HTML-like syntax inside JavaScript.

Key rules of JSX:

* Use `className` instead of `class`.
* Tags must be properly closed (e.g., `<img />`)
* JavaScript expressions are written inside `{}`

React components return JSX which is rendered on the UI.

## 2. Components & Props

Components are reusable pieces of UI. In modern React, we mainly use functional components.

Props (short for properties) are used to pass data from a parent component to a child component. Props are read-only and cannot be modified inside the child.

Types of props:

* String, number, boolean
* Arrays and objects
* Functions (used for handling events)

Children prop:
The `children` prop is used to pass content inside a component.

Example:
A Card component can wrap other elements using `children`.



## 3. State with useState

State is used to store dynamic data in a component. When state changes, the component re-renders.

The `useState` hook is used to manage state in functional components.

Example:
`const [count, setCount] = useState(0);`

Rules:

* Always use the setter function to update state
* Do not mutate state directly
* For arrays/objects, use spread operator


## 4. useEffect Hook

The `useEffect` hook is used to perform side effects such as fetching data, logging, or subscriptions.

Types:

* `useEffect(fn, [])` → runs once (on mount)
* `useEffect(fn, [value])` → runs when value changes
* `useEffect(fn)` → runs on every render

Cleanup:
Used to remove subscriptions or timers when component unmounts.


## 5. Lists & Forms

### Lists

Arrays are rendered using `.map()` in React. Each element must have a unique `key` prop.

### Forms

Forms are controlled using state. Input values are stored in state and updated using `onChange`.

On form submission:

* Use `onSubmit`
* Use `event.preventDefault()` to stop page reload

Validation can be applied before submitting data.


## 6. Component Architecture

### Component Splitting

Large components should be broken into smaller reusable components.

### Lifting State Up

When multiple components need the same data, the state is moved to their common parent.

### Passing Callbacks

Functions are passed as props to allow child components to update parent state.

Example:
Parent passes `addUser` function to child form component.
