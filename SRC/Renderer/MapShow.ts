import * as leaflet from 'leaflet';

export class MapShow {
    Map: leaflet.Map;
    MapX: number = 23.12738444;
    MapY: number = 114.39972998;
    MarkerID: Array<leaflet.Marker> = new Array();
    constructor(DOMElement: string) {
        this.Map = leaflet.map(DOMElement).setView([23.12738444,  114.39972998], 10);
        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '毕业设计 By 廖舒灏',
            maxZoom: 20,
            minZoom: 4,
            tileSize: 512,
            zoomOffset: -1
        }).addTo(this.Map);
    }

    public GPSTrackingUpdate(GPSTrackPositionX: number, GPSTrackPositionY: number, TargetID: number) {
        if (this.MarkerID[TargetID] == null) {
            this.MarkerID[TargetID] = leaflet.marker([GPSTrackPositionX, GPSTrackPositionY]).addTo(this.Map);
        } else {
            this.MarkerID[TargetID].setLatLng([GPSTrackPositionX, GPSTrackPositionY]);
        }
    }

    public getCurrentCenterPosition(): Array<Number> {
        let tmp: Array<Number> = new Array<Number>();
        tmp[0] = this.Map.getCenter().lat;
        tmp[1] = this.Map.getCenter().lng;
        return tmp;
    }
}