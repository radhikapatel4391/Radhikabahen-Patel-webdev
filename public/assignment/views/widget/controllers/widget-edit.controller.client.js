(function () {
    angular
        .module('WAM')
        .controller('widgetEditController', widgetEditController);

    function widgetEditController($sce,$routeParams,$location,
                                  widgetService) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.widgetId = $routeParams.widgetId;
        model.widgetEditUrl = widgetEditUrl;
        model.deleteWidget = deleteWidget;
        model.updateWidget = updateWidget;

        function init() {

            model.widgets = widgetService.findAllWidgetsForPage(model.pageId);
            model.widget = widgetService.findWidgetById(model.widgetId);

        }
        init();

        function widgetEditUrl(widget) {
            var url = 'views/widget/templates/widget-'+model.widget.widgetType.toLowerCase()+'-edit.view.client.html';
            return url;
        }

        function deleteWidget(widgetId) {
            widgetService.deleteWidget(widgetId);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
        }
        function updateWidget(widgetId,widget) {
            widgetService.updateWidget(widgetId,widget);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
        }


    }
})();