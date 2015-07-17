var PlaylistModel = Backbone.Model.extend({
  initialize: function {
    //create a default playlist
    this.set('songQueue', new SongQueue());
  }
});