var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('mouseenter', () => {
        tab.classList.add('active');
    });

    tab.addEventListener('mouseleave', () => {
        tab.classList.remove('active');
    });

    tab.addEventListener('mouseover', () => {
        const generatedLinks = tab.querySelector('.generated-links');
        generatedLinks.style.top = `${tab.offsetTop}px`;
    });
});

function openImage(img) {
    var zoomedImg = document.getElementById("zoomed-img");
    zoomedImg.src = img.src;
    document.querySelector(".image-zoom").classList.add("active");
}

function closeImage() {
    document.querySelector(".image-zoom").classList.remove("active");
}

const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

playButton.addEventListener('click', () => {
    audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});

stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});


}
