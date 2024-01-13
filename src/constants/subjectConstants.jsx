export const ADDSUBJECT = {
  title: "Add Subject",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "examType",
      label: "Exam Type",
      type: "select",
      options: ["Wassce", "Novdec", "Bece", "Toel"],
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Enter subject name",
    },
  ],
}
