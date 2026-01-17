const QUESTIONS = [
  {
    id: 1,
    question:
      "Which of the following is true about 'Lifting State Up' in React?",
    options: [
      'It moves state to a child component to increase performance.',
      'It moves state to the nearest common ancestor of components that need it.',
      "It involves using the 'useLift' hook to move state globally.",
      'It is a way to pass data from a parent to a child via props.',
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What is the primary purpose of the 'key' prop in lists?",
    options: [
      'To uniquely identify an element for CSS styling.',
      'To help React identify which items have changed, been added, or removed.',
      'To act as a secondary index for the JavaScript array.',
      'To ensure that the component re-renders every time the parent does.',
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question:
      "When does a 'useEffect' hook with an empty dependency array `[]` run?",
    options: [
      'Every time the component re-renders.',
      'Only when the component is about to unmount.',
      'Only once, immediately after the initial render.',
      'Whenever the state variables inside the effect change.',
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "In React, what is 'Derived State'?",
    options: [
      'State that is fetched from an external API.',
      'State that is managed by a separate library like Redux.',
      'State that is computed from existing props or state during render.',
      'State that is passed down from a Grandparent component.',
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question:
      'What happens if you update state directly (e.g., `state.value = 5`) instead of using the setter function?',
    options: [
      'React will show a warning but update the UI anyway.',
      'React will not trigger a re-render, and the UI will stay the same.',
      "The application will immediately crash with a 'MutationError'.",
      'React will update the value and re-render on the next frame.',
    ],
    correctAnswer: 1,
  },
];

export default QUESTIONS;
