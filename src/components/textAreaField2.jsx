import React, { useRef, useState, useEffect } from "react"
import { Editor } from "@tinymce/tinymce-react"

const TextAreaField2 = ({ field, value, change }) => {
  const [newValue, setNewValue] = useState(`${value[field.name]}`)
  const editorRef = useRef(null)

  // console.log(value[field.name])
  useEffect(() => {
    setNewValue(value[field.name])
  }, [])

  useEffect(() => {
    change(newValue, "question")
  }, [newValue])

  const handleEditorChange = (content, _editor) => {
    setNewValue(content)
  }

  //   const handleInputChange = (e) => {
  //     change(e.target.value, field.name)
  //   }

  return (
    <>
      <Editor
        apiKey="9wlmagrl4deqb08ygubrlbis0qb10mwsebrbzsaduw3sclmg"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={newValue ? newValue : value[field.name]}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol" +
            "removeformat | image | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onChange={handleEditorChange} // Add onChange event handler
      />
    </>
  )
}

export default TextAreaField2
