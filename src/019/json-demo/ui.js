// ui.js
// - Building the UI from some data

export const createFriendDiv = function (friend) {
    const divHtml = 
    `<div>
      <h2>${friend.firstName} ${friend.lastName}</h2>
      <p>${friend.email}</p>
    </div>`
    return divHtml;
}
