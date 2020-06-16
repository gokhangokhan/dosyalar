function performAsyncBidding(item, index) {
	// This is a mock function to demonstrate async. behavior
	return new Promise((resolve, reject) => {
		const adTags = [
			 
		]
		resolve(adTags[index - 1]);
	});
}

jwplayer('player').setup({
  playlist: [
		{
			file: "https://tv-trt2.live.trt.com.tr/master_720.m3u8", 
		},
		{
			file: "https://streaming.disk.yandex.net/hls/U2FsdGVkX1-mCXWlNz_m01VsiUYdJ03jdpjHVedAjXNsiZY-6ktjdNzeAPRFI5spYJXkz0vPTJmI49I8QbUfUN18-sgtPCgx7fj1UzNJA-FJSyNrtGBuH1Ww4kzV8lTms1ZjwDJ9ZIFCSwAzaHpvrO4TJUkohJUVhBCkvO36xHO9ZaxDHORcP1QerqpI09nJLFELGB34jqe_4O88rEh8l5MLUH93YHS7_ahLtwdQEkWqgc-O1vQiP6kTlbtb1hbldGdOJV_w79J9bp6faadgOechRRy5giakPVSvSUELHdw/5a84887aaed58/8bb9dd2111b8bf55d68f9541ec6d2c457846310a9810cf161927b20a03ddc274/master-playlist.m3u8?from=disk&vsid=21ccc34230e4e146a45e40e198186564751b56dcdbd4xWEBx2355x1592317952", "title":"br2.7"
		},
		{
			file: "//playertest.longtailvideo.com/adaptive/bunny/manifest-no-captions.m3u8",
		},
  ],
  advertising: {
	  client: 'vast',
	  skipoffset: 2,
	  tag: ' ',
  },
  height: 400,
  width: 600,
  autostart: true,
  mute: true,
})

jwplayer('player').setPlaylistItemCallback((item, index) => {
	// Resolve accepts a playlist item, this can be modified
	// The playlist item that is scheduled to load is
	// passed in as 'item'
	// Reject can be used to cancel a scheduled item from being loaded
	return new Promise((resolve, reject) => {
		// Handle external bidding and, in this example, return a modified tag
		return performAsyncBidding(item, index).then(adTag => {
		// Update the playlist item and pass it to resolve.
		const updatedAdSchedule = { tag: adTag, offset: 'pre' };
		const updatedPlaylistItem = Object.assign({}, item, { adschedule: [updatedAdSchedule] });
		resolve(updatedPlaylistItem);
		}).catch(() => {
			// If bidding fails, resolve with original, unmodified playlist item
			resolve();
		});
	}); 
});
