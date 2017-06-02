(function () {
    angular
        .module('WAM')
        .service('pageService', pageService);

    function pageService() {

        var pages = [
                { "_id": "321", "name": "Post 1", "websiteId": "890", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "890", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "890", "description": "Lorem" }
            ];

        this.createPage = createPage;
        this.findAllPagesForWebsite = findAllPagesForWebsite;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        function createPage(websiteId,page) {
            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            pages.push(page);
            return page;
        }

        function findAllPagesForWebsite(websiteId) {
            var results = [];

            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    pages[p].created = new Date();
                    pages[p].accessed = new Date();
                    results.push(pages[p]);
                }
            }

            return results;
        }

        function findPageById(pageId) {
            return pages.find(function (page) {
                return page._id === pageId;
            });
            return null;
        }

        function updatePage(pageId,page) {
            var pageIn = findPageById(pageId);
            var index = pages.indexOf(pageIn);
            pages.splice(index,1, page);
        }

        function deletePage(pageId) {
            var page = findPageById(pageId);
            var index = pages.indexOf(page);
            pages.splice(index, 1);
        }

    }
})();