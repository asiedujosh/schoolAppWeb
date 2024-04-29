export const ADDQUESTIONS = {
  title: "Add questions",
  editTitle: "Edit questions",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "examType",
      label: "Exam Type",
      type: "select",
      options: ["Bece", "Wasssce", "Cambridge"],
    },
    {
      name: "subject",
      label: "Subject Type",
      type: "select",
      options: ["English", "Math", "Science"],
    },
    {
      name: "year",
      label: "Year",
      type: "select",
      options: ["May/June 2022", "May/June 2023", "Science"],
    },
    {
      name: "topic",
      label: "Topic",
      type: "select",
      options: ["Balance Equation", "Chemicals", "Matter"],
    },
    {
      name: "questionNo",
      label: "Question No",
      type: "number",
      placeholder: "Add your question",
    },
    {
      name: "question",
      label: "Question",
      type: "textArea",
      placeholder: "Add your question",
    },
    {
      name: "answerOptions",
      label: "Optional Ans (Separate each option with a '**' sign)",
      type: "text",
      placeholder: "Separate each optional ans with ** symbol",
    },
    {
      name: "answer",
      label: "answer",
      type: "select",
      options: ["A", "B", "C", "D", "E", "F", "G", "H"],
    },
  ],

  fieldDetail0: [
    {
      name: "examType",
      label: "Exam Type",
      type: "select",
      options: ["Bece", "Wasssce", "Cambridge"],
    },
    {
      name: "subject",
      label: "Subject Type",
      type: "select",
      options: ["English", "Math", "Science"],
    },
    {
      name: "year",
      label: "Year",
      type: "select",
      options: ["May/June 2022", "May/June 2023", "Science"],
    },
  ],

  fieldDetail1: [
    {
      name: "topic",
      label: "Topic",
      type: "select",
      options: ["Balance Equation", "Chemicals", "Matter"],
    },
    {
      name: "questionNo",
      label: "Question No",
      type: "number",
      placeholder: "Add question No",
    },
  ],

  fieldDetail2: [
    {
      name: "question",
      label: "Question",
      type: "textArea",
      placeholder: "Add your question",
    },
    {
      name: "questionEquation",
      label:
        "Equations Only( this uses ascii model replace backslash with $&#92; )",
      type: "text",
      placeholder: "Separate each optional ans with ** symbol",
    },
  ],

  fieldDetail3: [
    {
      name: "answerOptions",
      label: "Optional Ans (Separate each option with a '**' sign)",
      type: "text",
      placeholder: "Separate each optional ans with ** symbol",
    },
    {
      name: "optionsWithEquation",
      label:
        "Optional Ans with Equation (start and close with a Separate each option with a '**' sign)",
      type: "text",
      placeholder:
        "Separate each optional ans with ** symbol replce backslash with $&#92",
    },
  ],

  fieldDetail4: [
    {
      name: "hints",
      label: "Hints (Separate each option with a '**' sign)",
      type: "text",
      placeholder: "Separate each hint with ** symbol",
    },
    {
      name: "answer",
      label: "Answer",
      type: "select",
      options: ["A", "B", "C", "D", "E", "F", "G", "H"],
    },
  ],
}

export const QUESTIONTABLE = ["Question No", "Question", "Action"]

export const QUESTIONSEARCH = [
  {
    name: "examType",
    label: "Exam Type",
    type: "select",
    options: ["Bece", "Wasssce", "Cambridge"],
  },
  {
    name: "subject",
    label: "Subject Type",
    type: "select",
    options: ["English", "Math", "Science"],
  },
  {
    name: "year",
    label: "Year",
    type: "select",
    options: ["May/June 2022", "May/June 2023", "Science"],
  },
  {
    name: "questionNo",
    label: "Question No",
    type: "text",
    placeholder: "Add your question",
  },
]
