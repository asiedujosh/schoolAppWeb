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
      name: "objective",
      label: "Objective",
      type: "text",
      options: ["objective", "written"],
    },
  ],
}
