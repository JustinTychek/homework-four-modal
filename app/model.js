var MODEL = (function () {
  var _getPageContent = function (pageName) {
    $.get(`pages/${pageName}/${pageName}.html`, function (data) {
      $("#app").html(data);
    });
  };

  return {
    getPageContent: _getPageContent,
  };
})();
