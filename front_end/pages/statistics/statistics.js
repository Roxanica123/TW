import { ChartsManager } from "./charts/charts-manager.js";
import { Modal } from "../../modals-scripts.js";
window.onresize = (event) => {
    onResize();
};

window.onload = (event) => {
    drawCharts();
    Modal.init();
};

window.applyFilters = async function apply() {
    drawCharts();
}

window.drawCharts = function drawCharts() {
    ChartsManager.drawCharts();
}

function onResize() {
    let timer = null;
    if (timer != null)
        clearTimeout(timer);
    timer = window.setTimeout("drawCharts()", 50);
}