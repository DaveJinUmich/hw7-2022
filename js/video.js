var video;

// Initialize the video when the window loads
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	
	// Set initial volume display
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

// Play the video and update volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow down playback rate by 10%
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9; // Exactly 10% slower
	console.log("New speed: " + video.playbackRate);
});

// Speed up playback rate proportionally
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New speed: " + video.playbackRate);
});

// Skip ahead button - advance by 10 seconds or restart
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current time before skipping: " + video.currentTime);
	video.currentTime += 10;
	
	// If we've exceeded video duration, go back to start (0)
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	
	console.log("Current time after skipping: " + video.currentTime);
});

// Mute button - toggle mute state and update button text
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		// If currently muted, unmute it
		video.muted = false;
		this.textContent = "Mute";
	} else {
		// If not muted, mute it
		video.muted = true;
		this.textContent = "Unmute";
	}
});

// Volume slider to update volume and display
document.querySelector("#slider").addEventListener("input", function() {
	// Set the video volume (0-1 range)
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log("Volume: " + video.volume);
});

// Add the oldSchool class to video
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

// Remove the oldSchool class from video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});
