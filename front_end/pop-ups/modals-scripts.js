export class Modal {
  // static pageWrapper = document.querySelector("#page-wrapper");

  constructor(
    lauchModalId,
    data,
    title,
    parent = "body",
    pageWrapper = "page-wrapper"
  ) {
    this.lauchModalId = lauchModalId;
    this.data = data;
    this.parent = parent;
    this.pageWrapper = pageWrapper;
    this.title = title;
    this.createModal();
    // pageWrapper = document.querySelector("#page-wrapper");
  }

  createModal() {
    const parent = document.querySelector(this.parent);

    this.modal = document.createElement("div");
    this.modalBody = document.createElement("div");

    this.modal.classList.add("modal");
    this.modalBody.classList.add("modal-content");

    this.addContent();

    this.modal.append(this.modalBody);

    this.addEvents();

    parent.append(this.modal);
  }

  addEvents() {
    const lauchButton = document.querySelector(`#${this.lauchModalId}`);
    const pageWrapper = document.querySelector(`#${this.pageWrapper}`);

    lauchButton.addEventListener("click", () => {
      this.modal.style.display = "block";
      pageWrapper.style.webkitfilter = "blur(5px) grayscale(50%)";
      console.log(pageWrapper);
    });

    this.exitButton.addEventListener("click", () => {
      this.modal.style.display = "none";
      pageWrapper.style.webkitfilter = "none";
    });

    window.addEventListener("click", (target) => {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
        pageWrapper.style.webkitfilter = "none";
      }
    });
  }

  addContent() {
    const modalBodyContent = document.createElement("div");
    const title = document.createElement("h1");
    this.exitButton = document.createElement("span");

    title.innerText = this.title;
    title.classList.add("modal-title");
    modalBodyContent.classList.add("modal-body-content");

    this.exitButton.classList.add("modal-close");
    this.exitButton.innerHTML = "&times";

    modalBodyContent.append(this.exitButton);
    modalBodyContent.append(title);
    modalBodyContent.append(this.data);

    this.modalBody.append(modalBodyContent);
  }
}
