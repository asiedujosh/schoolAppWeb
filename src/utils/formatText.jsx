const formatText = (question, data) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(question, "text/html")

  // Override the text color to white
  const dataElement = doc.querySelector(data)
  if (dataElement) {
    dataElement.style.color = ""

    // Convert the modified DOM back to a string
    let firstData = doc.documentElement.outerHTML

    // Parse the HTML string
    const parser2 = new DOMParser()
    const doc2 = parser2.parseFromString(firstData, "text/html")

    // Select the <p> element
    const pElement = doc2.querySelector("p")

    // Check if a <p> element was found
    if (pElement) {
      // Get the outer HTML of the <p> element
      return pElement.outerHTML
    } else {
      return "No P element found"
      //console.log("No <p> element found in the document.")
    }
  } else {
    return false
  }
}

export default formatText
