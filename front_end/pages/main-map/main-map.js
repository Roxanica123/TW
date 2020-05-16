import { Modal } from "../../pop-ups/modals-scripts.js";
import { filterContent } from "../../pop-ups/filter-data.js";

window.onload = (event) => {
  const filterModal = new Modal(
    "filter-button",
    filterContent,
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
