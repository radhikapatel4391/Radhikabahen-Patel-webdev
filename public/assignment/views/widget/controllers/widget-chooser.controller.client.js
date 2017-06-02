(function () {
    angular
        .module('WAM')
        .controller('widgetChooserController', widgetChooserController);

    function widgetChooserController($routeParams,
                                  $location,
                                     widgetService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.createWidget = createWidget;


        function init() {
            model.widgets = widgetService.findAllWidgetsForPage(model.pageId);
        }
        init();

        function createWidget(type) {
            var widget = [];
            widget.widgetType = type;
            widget = widgetService.createWidget(model.pageId,widget);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+widget._id);
        }
    }
})();