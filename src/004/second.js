console.log('Waiting a little bit....');
await new Promise(resolve => setTimeout(resolve, 3000));
console.log('I am done waiting.');
alert('The rest of the page should have loaded and rendered by the time this alert popped up.');
