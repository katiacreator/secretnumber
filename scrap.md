// square.addEventListener('click', () => setColor(square))
  // square.addEventListener('click', () => removeColor(square))
  square.addEventListener('mouseover', () => setColor(square))
  // square.addEventListener('mouseout', () => removeColor(square))



 function setColor(element){
  let color = getRandomColor()
  // console.log(color)
  element.style.background = 'var(--primary)'
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  element.style.color = 'var(--primary)'
}

function removeColor(element){
  let color = getRandomColor()
  element.style.background = 'var(--primary)'
  element.style.color = '${color}'
  element.style.boxShadow = `0 0 2px cyan, 0 0 10px ${color}`

} 