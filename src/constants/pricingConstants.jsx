export const ADDPRICE = {
  title: "Add Pricing",
  editTitle: "Edit Pricing",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "examSubjectId",
      label: "Exam Subject Title",
      type: "select",
      options: ["Bece", "Wasssce", "Cambridge"],
    },
    {
      name: "pricing",
      label: "Pricing",
      type: "text",
      placeholder: "Enter price",
    },
    {
      name: "durationType",
      label: "Duration",
      type: "select",
      options: ["Bece", "Wasssce", "Cambridge"],
    },
  ],
}

export const PRICINGTABLE = ["Exam Subject Name", "Price", "Duration", "Action"]
