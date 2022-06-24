import {offices} from './variables.js';

function initMap() {    
    const switzerland =  { lat: 46.8182, lng: 8.2275 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: switzerland
    });

    function addMarker(props){
        const marker= new google.maps.Marker({
            position: props.coords,
            map: map
        }); 
        const infoWindow = new google.maps.InfoWindow({
            content: props.img
        });
        
        marker.addListener("click", ()=> {
            infoWindow.open(map, marker);
        })
        return marker
    }
    
    offices.forEach(el=>{
        addMarker(el);
    });
}
window.initMap = initMap;
