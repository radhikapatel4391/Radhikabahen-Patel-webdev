(function () {
    angular
        .module('WAM')
        .service('widgetService', widgetService);

    function widgetService() {

        var widgets = [
                { "_id": "123","widgetName":"HeadingOfGIZMODOD", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
                { "_id": "234","widgetName":"smallheading", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "345","widgetName":"image", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                    "url": "http://lorempixel.com/400/200/"},
                { "_id": "456","widgetName":"htmltext", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
                { "_id": "567","widgetName":"headingdefault", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "678","widgetName":"youtubevideo", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                    "url": "https://youtu.be/AM2Ivdi9c4E" },
                { "_id": "789","widgetName":"lorem Ipsm", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        this.createWidget = createWidget;
        this.findAllWidgetsForPage = findAllWidgetsForPage;
        this.findWidgetById = findWidgetById;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;

        function createWidget(pageId,widget) {
            widget._id = (new Date()).getTime() + "";
            widget.pageId = pageId;
            widgets.push(widget);
            return widget;
        }

        function findAllWidgetsForPage(pageId) {
            var results = [];

            for(var w in widgets) {

                if(widgets[w].pageId === pageId) {
                    results.push(widgets[w]);
                }
            }

            return results;
        }

        function findWidgetById(widgetId) {
            return widgets.find(function (widget) {
                return widget._id === widgetId;
            });
            return null;
        }

        function updateWidget(widgetId,widget) {
            var widgetIn = findWidgetById(widgetId);
            var index = widgets.indexOf(widgetIn);
            widgets.splice(index,1, widget);
        }

        function deleteWidget(widgetId) {
            var widget = findWidgetById(widgetId);
            var index = widgets.indexOf(widget);
            widgets.splice(index, 1);
        }

    }
})();