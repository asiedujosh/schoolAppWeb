export const ADDLINK = {
  title: "Link Exam Subject Relation",
  editTitle: "Edit Exam Subject Relation",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "name",
      label: "Unique Name",
      type: "text",
      placeholder: "Enter your username",
    },
    {
      name: "examType",
      label: "Exam Type",
      type: "select",
      options: ["Bece", "Wassce", "Cambridge"],
    },
    {
      name: "subject",
      label: "Subject Type",
      type: "select",
      options: ["English", "Math", "Science"],
    },
    {
      name: "offerType",
      label: "Offer Type",
      type: "select",
      options: ["Free", "Paid"],
    },
    {
      name: "examTime",
      label: "Exam Time (In minutes)",
      type: "number",
      placeholder: "Enter amount",
    },
  ],
}

export const EXAMSUBJECTTABLE = [
  "Name",
  "Exam",
  "Subject",
  "Offer Type",
  "Exam Time",
  "Action",
]
