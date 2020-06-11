import { Modal } from "../../modals-scripts.js";
import { MapStyle } from "./map-style.js"
import { Request } from "./../../services/request.js"


window.onload = async (event) => {
    Modal.init();
    insertMapScript();
};



window.initMap = async function initMap() {

    const heatMapData = await getHeatMapData();

    const styledMapType = new google.maps.StyledMapType(MapStyle);
    window.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40, lng: -95 },
        zoom: 5,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        },
        disableDefaultUI: true
    });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData,
        gradient: ["rgba(20, 160, 152, 0)",
            "rgba(20,160,152,0.6979166666666667)",
            "rgba(20,160,152,0.8855917366946778)",
            "rgba(203,45,111,0.7987570028011204)",
            "rgba(203,45,111,1)"]
    });
    heatmap.setMap(map);

}

function insertMapScript() {
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCyc7sz5B0nGdEOqvc7b_k3-t3JI-cYgqA&callback=initMap&libraries=visualization";
    document.body.appendChild(script);
}

async function getHeatMapData() {
    const heatMapPoints = [];
    const req = new Request("GET", "http://localhost:5000/accidents/heat-map");
    const reqData = await req.getData();
    const heatMapData = reqData.heatMapData;

    for (let i = 1; i < heatMapData.length; i++) {
        let accidentData = new Object();
        accidentData.location = new google.maps.LatLng(heatMapData[i][1], heatMapData[i][0]);
        accidentData.weight = heatMapData[i][2];
        heatMapPoints.push(accidentData);
    }

    return heatMapPoints;
}
