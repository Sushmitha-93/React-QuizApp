export default [
  {
    question: "What's used to pass data to a component from outside?",
    options: ["state", "render with arguments", "props", "prop types"],
    answer: 2
  },
  {
    question: "React is a ________",
    options: [
      "JavaScript Library",
      "JavaScript Framework",
      "Both",
      "None of the above"
    ],
    answer: 0
  },
  {
    question: "props in React _______",
    options: [
      "can be changed inside the component",
      "cannot be changed in the component",
      "cannot be changed in side other component",
      "None of the above"
    ],
    answer: 1
  },
  {
    question: "How do you access a function fetch() from a h1 element in JSX?",
    options: [
      "<h1>{fetch()}</h1>",
      "<h1>${fetch()}</h1>",
      "<h1>{fetch}</h1>",
      "<h1>${fetch}</h1>"
    ],
    answer: 0
  },
  {
    question:
      " Which method in a React Component should you override to stop the component from updating?",
    options: [
      "willComponentUpdate",
      "shouldComponentUpdate",
      "componentDidUpdate",
      "componentDidMount"
    ],
    answer: 1
  },
  {
    question:
      "Which method in a React Component is called after the component is rendered for the first time?",
    options: [
      "componentDidUpdate",
      "componentDidMount",
      "componentMounted",
      "componentUpdated"
    ],
    answer: 1
  },
  {
    question: "What happens when you call setState() inside render() method?",
    options: [
      "Repetitive output appears on the screen",
      "Stack overflow error",
      "Duplicate key error",
      "Nothing happens. Life goes on!"
    ],
    answer: 1
  },
  {
    question:
      "How do you write an inline style specifying the font-size:12px and color:red; in JSX",
    options: [
      "style={{font-size:12,color:'red'}}",
      "style={{fontSize:'12px',color:'red'}}",
      "style={fontSize:'12px',color:'red'}",
      "style={{font-size:12px,color:'red'}}"
    ],
    answer: 1
  }
];

/* Format
,
{
    question: "",
    options: ["", "", "", ""],
    answer: 
}
  */
