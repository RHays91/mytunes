// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  initialize: function() {
    this.render();
  },

  render: function() {
    var self = this;
    this.collection.each(function (song) {
      self.$el.append(new SongQueueEntryView(song));
    });
    return this.$el;
  }

});
