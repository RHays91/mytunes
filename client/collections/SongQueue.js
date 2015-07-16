// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  

  initialize: function(){
    this.on('add', this.addHandler, this);
    this.on('ended', this.removeSong, this);
    this.on('dequeue', this.removeAt, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  addHandler: function(){
    if (this.length === 1){
      this.playFirst();
    }
  },

  removeSong: function () {
    this.shift();
    if (this.length === 0){
      return;
    }
    this.playFirst();
  },

  removeAt: function(song){
   this.remove(song.get('id'));
  }

});