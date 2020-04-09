import { ChartsManager } from "./charts-manager.js";
import { Modal } from "../../modals-scripts.js";
window.onresize = (event) => {
    drawCharts();
    //laaaaaaaaaag pt ca se face prea des draw, trebuie rezolvat
};

window.onload = (event) => {
    ChartsManager.drawCharts();
    Modal.init();
};

function drawCharts() {
    ChartsManager.drawCharts();
}
