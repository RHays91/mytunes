// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function(){
    this.on('add', this.addHandler, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  addHandler: function(){
    if (this.length === 1){
      this.playFirst();
    }
  },

  playNext: function () {
    this.shift();
    if (this.length === 0){
      return;
    } else {
      this.playFirst();
    }
  },

  dequeue: function(song){
    if (this.at(0) === song){
      this.playNext();
    } else {
      this.remove(song.get('id'));
    }
  }

});