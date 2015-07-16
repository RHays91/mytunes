// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function () {
    this.trigger('enqueue', this);
  },
  ended: function () {
    console.log("error triggered on songModel, triggering any event listeners on views");
    this.trigger('ended', this);
  }

});
