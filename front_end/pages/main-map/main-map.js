import { Modal } from "../../pop-ups/modals-scripts.js";

window.onload = (event) => {
  const filterModal = new Modal(
    "filter-button",
    "",
    "Filters",
    "pop-up-wraper"
  );
  const downloadModal = new Modal(
    "download-button",
    "",
    "Download",
    "pop-up-wraper"
  );
};
