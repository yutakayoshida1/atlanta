// sets active button
// eslint-disable-next-line no-unused-vars
function setActiveButton(classes, classToDeactive, elmToActive) {
  const elements = document.getElementsByClassName(classes)
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove(classToDeactive)
  }
  elmToActive.classList.add(classToDeactive)
}
