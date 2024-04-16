export const examsName = (arr, id) => {
  let arrSubstance = arr.filter((item) => item.id == id)
  if (arrSubstance.length > 0) {
    return arrSubstance[0].exam
  } else {
    console.log("Data does not mind")
  }
}

export const subjectName = (arr, id) => {
  let arrSubstance = arr.filter((item) => item.id == id)
  if (arrSubstance.length > 0) {
    return arrSubstance[0].subject
  } else {
    console.log("Data does not mind")
  }
}

export const yearName = (arr, id) => {
  let arrSubstance = arr.filter((item) => item.id == id)
  if (arrSubstance.length > 0) {
    return arrSubstance[0].year
  } else {
    console.log("Data does not mind")
  }
}
