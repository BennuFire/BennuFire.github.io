var Photo = {
  getPhoto: function(location){
    var promise = $.Deferred();
    $.ajax('/vacation/Photos', {
      data: {q: location},
      success: function(result){
        promise.resolve(result.url);
      }
    });
    return promise;
  }
}
