const express = require('express');
const request = require('request');
const app = express();

const streams = {
  '1': 'http://exm3u.extraott.com:80/live/2249871453/1991220000/400159598.m3u8',
  '2': 'http://exm3u.extraott.com:80/live/2249871453/1991220000/401627870.m3u8',
  '3': 'http://exm3u.extraott.com:80/live/2249871453/1991220000/400157873.m3u8',
  '4': 'https://anas-virat.github.io/hls-streams/StarSports1Tamil.m3u8',
  '5': 'http://exm3u.extraott.com:80/live/2249871453/1991220000/187263.m3u8',
  '6': 'https://vidcdn.vidgyor.com/asianet-origin/liveabr/playlist.m3u8',
  '7': 'https://list.iptvcat.com/my_list/s/b27160346964e4dfd9219ed42e74e601.m3u8',
  '8': 'https://list.iptvcat.com/my_list/s/1aaeb97c418f40e38262c3456620a037.m3u8',
  '9': 'https://list.iptvcat.com/my_list/s/b27160346964e4dfd9219ed42e74e601.m3u8',
  '10': 'https://list.iptvcat.com/my_list/s/b27160346964e4dfd9219ed42e74e601.m3u8',
  '11': 'https://anas-virat.github.io/hls-streams/SonyYAY.m3u8',
  '12': 'https://anas-virat.github.io/hls-streams/SonySportsten1HD.m3u8',
  '13': 'https://anas-virat.github.io/hls-streams/PogoTamil.m3u8'
};

app.get('/Box.m3u8', (req, res) => {
  const id = req.query.id;
  const streamUrl = streams[id];

  if (streamUrl) {
    request.get(streamUrl).pipe(res);
  } else {
    res.status(404).send('#EXTM3U\n# Stream Not Found');
  }
});

app.listen(3000, () => console.log('Server running'));
