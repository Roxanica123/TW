import { Table } from "./table/table.js";
import { Modal } from "../../modals-scripts.js";

window.onload = (event) => {
    initTable();
    Modal.init();
};

window.applyFilters = async function apply() {
    window['initTable']();
}


window.initTable = function initTable() {
    new Table().initTable();
}
