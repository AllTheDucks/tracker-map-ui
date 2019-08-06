goog.provide('atd.paddle.App');

goog.require('atd.LeafletMap');
goog.require('goog.dom');
goog.require('goog.dom.TagName');


/**
 * Darkwing main App class.
 */
atd.paddle.App = class {

    /**
     * @param {!Array<!Array<number>>} bounds The initial bounds for the map.
     * @param {!Array<number>} center The initial center for the map.
     * @param {string} urlTemplate The URL Template for fetching map tiles.
     */
    constructor(bounds, center, urlTemplate) {

        const bodyEl = goog.dom.getElementsByTagName(goog.dom.TagName.BODY)[0];
        const containerEl = goog.dom.createDom(goog.dom.TagName.DIV, 'container');
        goog.dom.append(bodyEl, containerEl);

        const map = new atd.LeafletMap(bounds, center, urlTemplate);

        map.render(containerEl);
    }

};
