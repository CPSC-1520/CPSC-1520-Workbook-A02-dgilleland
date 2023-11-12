// Navigating through the DOM with methods on DOM object
let div1 = document.querySelector('div');
console.log('div1 = ', div1);
// I can grab references to other elements by virtue of
// methods/properties that exist on another element
let div2 = div1.nextElementSibling; // reference to another div in relationship to the first
console.log('div2 = ',div2);

// grab child elements from a specific element
let p1 = div1.firstElementChild;
console.log('p1 = 1',p1);
let p3 = div1.lastElementChild;
console.log('p3 = ', p3);
let p4 = div2.firstElementChild;
console.log('p4 = ', p4);

let div1Children = div1.children;
console.log('div1Children = ', div1Children);
console.log('div1Children[1] = ',div1Children[1]); // Which paragraph?

// Moving items around in the DOM
// replace p3 with p4
div1.replaceChild(p4, p3); // (newChild, oldChild)
console.log('p3 = ',p3); // I still have a reference to this object
// move p3 to div2
div2.appendChild(p3); // append - add to the end

// remove p2
div1.removeChild(div1.children[1]);

// Access the text node
let p4Text = p4.textContent;
console.log('p4Text = ', p4Text);
console.log('div1.textContent = ', div1.textContent);

// create a new paragraph
let p5 = document.createElement('p');
let text = document.createTextNode('Paragraph 5');
console.log('p5 = ', p5);
p5.appendChild(text);
console.log('p5 = ', p5);

// insert the new paragraph into the DOM
div1.insertBefore(p5, p4); // (newChild, refChild)

let div1TextContent = div1.textContent;
let div1InnerText = div1.innerText;
console.log("From .textContent: ", div1TextContent);
console.log("From .innerText: ", div1InnerText);
