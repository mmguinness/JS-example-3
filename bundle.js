(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.mainContainerEl = document.querySelector("#main-container");
            this.displayMessage();
          });
          this.buttonTwoEl = document.querySelector("#hide-message-button");
          this.buttonTwoEl.addEventListener("click", () => {
            this.mainContainerEl = document.querySelector("#main-container");
            this.hideMessage();
          });
        }
        displayMessage() {
          const message = document.createElement("div");
          message.id = "#message";
          const newMessage = "This is a message displayed by JavaScript";
          message.append(newMessage);
          this.mainContainerEl.append(message);
        }
        hideMessage() {
          const hide = document.getElementById("#message");
          hide.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
