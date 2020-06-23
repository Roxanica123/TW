import { FiltersPopUp } from "./pop-ups/filters-pop-up.js";

export class Modal {
  static init() {
    const modalFilter = document.getElementById("modal-filter");
    const buttonFilter = document.getElementById("fillter-button");
    const closeFilter = document.getElementsByClassName("close")[0];
    const closeDownload = document.getElementsByClassName("close")[1];
    const buttonDownload = document.getElementById("download-button");
    const modalDownload = document.getElementById("modal-download");
    const pageWrapper = document.getElementById("page-wrapper");

    buttonFilter.onclick = async function () {
      modalFilter.style.display = "block";
      if (pageWrapper !== null)
        pageWrapper.style.webkitFilter = "blur(5px) grayscale(50%)";
      const filter = new FiltersPopUp();
      await filter.initAvailableFilters();
      await filter.init();

    };

    buttonDownload.onclick = function () {
      modalDownload.style.display = "block";
      pageWrapper.style.webkitFilter = "blur(5px) grayscale(50%)";
    };

    closeFilter.onclick = function () {
      modalFilter.style.display = "none";
      pageWrapper.style.webkitFilter = "none";

    };

    closeDownload.onclick = function () {
      modalDownload.style.display = "none";
      pageWrapper.style.webkitFilter = "none";
    };

    window.onclick = function (event) {
      if (event.target == modalFilter) {
        modalFilter.style.display = "none";
        pageWrapper.style.webkitFilter = "none";
      }
      else {
        if (event.target == modalDownload) {
          modalDownload.style.display = "none";
          pageWrapper.style.webkitFilter = "none";
        }
      }
    };
  }
}


