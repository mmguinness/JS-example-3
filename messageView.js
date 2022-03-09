  class MessageView {
    constructor() {
      this.buttonEl = document.querySelector('#show-message-button');
      this.buttonEl.addEventListener('click', () => {
      this.mainContainerEl = document.querySelector('#main-container');
      this.displayMessage();
      });
      this.buttonTwoEl = document.querySelector('#hide-message-button');
      this.buttonTwoEl.addEventListener('click', () => {
      this.mainContainerEl = document.querySelector('#main-container');
      this.hideMessage();
      });
    }

    displayMessage() {
      // create a new div element
      const message = document.createElement('div');
      message.id = '#message'
      // and give it some content
      const newMessage = "This is a message displayed by JavaScript";
      // add the text node to the newly created div
      message.append(newMessage);
      // add the newly created element and its content into the DOM
      this.mainContainerEl.append(message);
    }

    hideMessage() {
      const hide = document.getElementById('#message');
      hide.remove();
    }
  }
 
module.exports = MessageView;