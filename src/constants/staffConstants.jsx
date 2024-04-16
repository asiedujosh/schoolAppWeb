export const ADDSTAFF = {
  title: "Add Staff",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter username",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
    },
    {
      name: "tel",
      label: "Telephone",
      type: "text",
      placeholder: "Enter tel number",
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Enter email",
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      options: ["Admin", "Loader", "Support"],
    },
  ],
}

export const STAFFTABLE = ["Username", "Telephone", "Role", "Action"]
