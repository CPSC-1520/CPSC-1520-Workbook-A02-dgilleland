export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  let listener = () => 
  {
    setCounter(counter + 1);
    element.dispatchEvent(new CustomEvent('increment'));
  };
  element.addEventListener('click', listener)
  setCounter(0)

  // Return an observer that can be used to unsubscribe
  return {
    unsubscribe: () => element.removeEventListener('click', listener),
    element: element
  }
}
