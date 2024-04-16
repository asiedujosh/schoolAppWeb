export const ADDLINK = {
  title: "Link Exam with Subject and price",
  editTitle: "Edit Exam with Subject and price",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "examType",
      label: "Exam Type",
      type: "select",
      options: ["Bece", "Wassce", "Cambridge"],
    },
    {
      name: "year",
      label: "Exam Year",
      type: "select",
      options: ["2000", "2001", "2002"],
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
      name: "amount",
      label: "Amount",
      type: "number",
      placeholder: "Enter amount",
    },
  ],
}

export const EXAMSUBJECTTABLE = [
  "Exam",
  "Year",
  "Subject",
  "Offer",
  "Amount",
  "Action",
]
