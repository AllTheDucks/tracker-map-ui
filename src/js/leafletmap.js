goog.provide('atd.LeafletMap');

goog.require('goog.dom');
goog.require('goog.ui.Component');

atd.LeafletMap = class extends goog.ui.Component {

    /**
     * See Leaflet documentation for details of all these Parameters.
     * @param {!Array<!Array<number>>} bounds The initial bounds for the map.
     * @param {!Array<number>} center The initial center for the map.
     * @param {string} urlTemplate The URL Template for fetching map tiles.
     * @param {?goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     */
    constructor(bounds, center, urlTemplate, opt_domHelper) {
        super(opt_domHelper);

        this.bounds = bounds;

        this.center = center;

        this.urlTemplate = urlTemplate;

        this.map = null;

    }

    /**
     * @override
     */
    createDom() {
        const el = goog.dom.createDom(goog.dom.TagName.DIV, {'id': 'mainmap'} );

        this.map = L.map('mainmap').setMaxBounds(this.bounds).setView(this.center, 13);

        L.tileLayer(this.urlTemplate, {
            attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
            maxZoom: 15,
            minZoom:9,
            id: 'mapbox.streets',
            accessToken: 'your.mapbox.access.token'
        }).addTo(this.map);

        this.setElementInternal(el);
    }

};
