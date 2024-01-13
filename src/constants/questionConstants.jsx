export const ADDQUESTIONS = {
  title: "Add questions",
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
      name: "question No",
      label: "Question No",
      type: "text",
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
  ],
}
