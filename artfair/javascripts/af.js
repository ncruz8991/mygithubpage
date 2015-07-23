function pathPrepare (path_in) {
    var lineLength = path_in[0].getTotalLength();

    // 842px is the approximate point of the first tour visit
    path_in.css("stroke-dasharray", lineLength);
    path_in.css("stroke-dashoffset", 842);
}

var timePerVideo = 500;

var dashOffsets = [
    842,
    777, 557, 463, 368, 323, 278, 199,
    169, 139, 109,  79,  49,  19,   0
];

var vid_sources = [
    "./videos/A.mp4",
    "./videos/B.mp4",
    "./videos/C.mp4",
    "./videos/D.mp4",
    "./videos/E.mp4",
    "./videos/F.mp4",
    "./videos/G.mp4",
    "./videos/H.mp4",
    "./videos/I.mp4",
    "./videos/J.mp4",
    "./videos/K.mp4",
    "./videos/L.mp4",
    "./videos/M.mp4",
    "./videos/N.mp4"
];

var aArtists = [
    "Carl Zachmann",
    "James Floyd",    
    "David Bryce",
    "Tai",

    "Mark Lewanski",
    "Bruce Holwerda",
    "Marvin Shafer",
    "Emily Doyle"
];

var aTitles = [
    "Machine Artist",
    "New Depression Guitars",
    "Limited Edition Sculpture",
    "Ball Point Pen Artist",

    "Glass Artist",
    "Painter",
    "Metal Artist",
    "Craft Artist"
];

var aHomepages = [
    "carlzachmann.com",
    "newdepressionguitars.com",
    "flycreekstudio.com",
    "artbytai.com",

    "glassweavers.com",
    "bruceholwerda.com",
    "q3art.com",
    "mrsogs.com"
];

var aHomepageLinks = [
    "http://www.carlzachmann.com/",
    "http://newdepressionguitars.com/",
    "http://www.flycreekstudio.com/",
    "http://artbytai.com/",

    "http://www.glassweavers.com/",
    "http://bruceholwerda.com/",
    "http://q3art.com/",
    "http://mrsogs.com/"
];

var aYoutubeLinks = [
    "https://www.youtube.com/watch?v=FectyuAykHk",
    "https://www.youtube.com/watch?v=YlK5lgQ1esk",
    "https://www.youtube.com/watch?v=YJh-qB5tFUo",
    "https://www.youtube.com/watch?v=819pG1m4dR4",

    "https://www.youtube.com/watch?v=X64zo1fxCtM",
    "https://www.youtube.com/watch?v=YhCNAiwa53A",
    "https://www.youtube.com/watch?v=PnflwqROtao",
    "https://www.youtube.com/watch?v=PGKgJyowaB4"
];

//$(function() {
$(window).bind("load", function() {

    var clips = new Array(14);
    clips[0] = $("#clipA");
    clips[1] = $("#clipB");
    clips[2] = $("#clipC");
    clips[3] = $("#clipD");
    clips[4] = $("#clipE");
    clips[5] = $("#clipF");
    clips[6] = $("#clipG");
    clips[7] = $("#clipH");
    clips[8] = $("#clipI");
    clips[9] = $("#clipJ");
    clips[10] = $("#clipK");
    clips[11] = $("#clipL");
    clips[12] = $("#clipM");
    clips[13] = $("#clipN");
    console.log("Finished loading clips");

    // Play the first video, then load everything then, load everything
    // while that's happening
    clips[0].get(0).play();
    for (var i = 1; i < 14; ++i) {
        clips[i].load();
    }

    // Fade out map if it's not scrolling
    var map = $("#minimap-wrapper");
    var enableMap = false;

    $(window).scroll(function() {
        if (enableMap) {
            map.show();
            map.delay(5000).fadeOut(200);
        }
    });
/*
    setInterval(function() {
        if (didScroll) {
            didScroll = false;
            map.show();
            map.delay(2500).fadeOut(200);
        }
    }, 250);
*/
    // DELETE THIS LATER
    //map.show();

    var video_frame = $("#video_frame");
    var video_clip = $("#video_clip");

    var tourpath = $("#tour_path");

    var artfair_name    = $("#artfair_name");
    var svg_af_summer1  = $("#af_summer1");
    var svg_af_summer2  = $("#af_summer2");
    var svg_af_state    = $("#af_state");
    var svg_af_original = $("#af_original");
    var svg_af_south_u  = $("#af_south_u");

    var artist_info_wrapper   = $("#artist_info_wrapper");
    var artist_name           = $("#artist_name");
    var artist_title          = $("#artist_title");
    var artist_homepage       = $("#artist_homepage");
    var artist_homepage_link  = $("#artist_homepage_link");
    var artist_full_interview = $("#artist_full_interview");

    // Prepare Tour SVG
    pathPrepare(tourpath);

    // Initialize controller
    var mController = new ScrollMagic.Controller();


    /********* HELPER FUNCTIONS *********/

    var af_fade_duration = 0.20;
    // call with onStart / onStartParams callback in TimelineMax
    function fadeInAF(fadein_svg) {
        TweenMax.to(fadein_svg, af_fade_duration,
            {css:{opacity: 1, ease:Linear.easeNone}});
    }
    // call with onReverseComplete / onReverseComplete callback in TimelineMax
    function fadeOutAF(fadeout_svg) {
        TweenMax.to(fadeout_svg, af_fade_duration,
            {css:{opacity: 0, ease:Linear.easeNone}});
    }

/*
    var clipIsLoaded = [
         true,  true,  true, false, false, false, false,
        false, false, false, false, false, false, false
    ];
    */
    var currentlyPlaying = clips[0]; // should be clipA
    var isPlaying = true;

    
    function toggleVideo() {
        if (isPlaying) {
            currentlyPlaying.get(0).pause();
            isPlaying = false;
        } else {
            currentlyPlaying.get(0).play();
            isPlaying = true;
        }
    }
    // Checks if the video is paused. If it's not, then don't do anything
    function pauseVideo() {
        if (isPlaying) {
            currentlyPlaying.get(0).pause();
            isPlaying = false;
        }
    }

    $("a").click(function() {
        pauseVideo();
    });

    $("video").click(function() {
        toggleVideo();
    });

    // Takes in an index, and determines what video to send to 
    function displayVideo (vid_index) {
        var clipOld = currentlyPlaying;
        var clipNew = clips[vid_index];

        // Play before so you get some overlap
        clipNew.get(0).currentTime = 0;
        if (isPlaying)
            clipNew.get(0).play();
        clipOld.hide();

        // Smooth fade in/out. This shouldn't take more than a second.
        clipNew.show();
        clipOld.get(0).pause();

        currentlyPlaying = clipNew;
    }

    // Sets the artist's info
    function setArtistInfo (artist_index) {
        artist_name.text(aArtists[artist_index]);
        artist_title.text(aTitles[artist_index]);
        artist_homepage_link.text(aHomepages[artist_index]);
        artist_homepage_link.attr('href', aHomepageLinks[artist_index]);
        artist_full_interview.attr('href', aYoutubeLinks[artist_index]);
    }

    var artist_fade_duration = 0.5;
    function showArtistInfo() {
        TweenMax.to(artist_info_wrapper, artist_fade_duration,
            {css:{opacity: 1, ease:Power3.easeIn}});
    }

    function hideArtistInfo() {
        TweenMax.to(artist_info_wrapper, artist_fade_duration,
            {css:{opacity: 0, ease:Power3.easeOut}});
    }

    function setAFSummer() {
        artfair_name.text("Ann Arbor Summer Art Fair");
        artfair_name.css("background-color", "#03A9F4");
    }
    function setAFState() {
        artfair_name.text("State Street Area Art Fair");
        artfair_name.css("background-color", "#FF4081");
    }
    function setAFOriginal() {
        artfair_name.text("Ann Arbor Street Art Fair, The Original");
        artfair_name.css("background-color", "#009688");
    }
    function setAFSouthU() {
        artfair_name.text("Ann Arbor's South University Art Fair");
        artfair_name.css("background-color", "#FFA726");
    }

    // Used to fade out and fade in art fair sections
    // We need this becasue you can only assign one function to each
    // callback in TimelineMax
    // The only ones that will be different are the ones that cause
    // the art fair sections to fade in and out.
    // We know which fade is which with the fadein paramater.
    function switchVideo(num, onStart) {
        switch(num) {            
            // af_summer1
            case 0:
                fadeOutAF(svg_af_state);
                hideArtistInfo();
                setAFSummer();
                break;

            // af_state
            // Interview
            case 1:                
                setArtistInfo(0);
                showArtistInfo();
                setAFState();
                if (onStart) {
                    fadeInAF(svg_af_state);
                }
                else {
                    fadeOutAF(svg_af_original);
                }
                break;

            // af_original
            // Street, but include artist info
            case 2:
                setArtistInfo(1);
                setAFOriginal();
                if (onStart)
                    fadeInAF(svg_af_original);
                break;

            // af_original
            // Interview
            case 3:
                setArtistInfo(2);
                showArtistInfo();
                setAFOriginal();
                break;

            // af_state
            case 4:
                hideArtistInfo();
                setAFState();
                break;

            // af_state
            // Interview
            case 5:
                setArtistInfo(3);
                showArtistInfo();
                setAFState();
                if (onStart == false)
                    fadeOutAF(svg_af_summer2);
                break;

            // af_summer2
            case 6:
                hideArtistInfo();
                setAFSummer();
                if (onStart)
                    fadeInAF(svg_af_summer2);
                else
                    fadeOutAF(svg_af_south_u);
                break;

            // af_south_u
            // Interview
            case 7:
                setArtistInfo(4);
                showArtistInfo();
                setAFSouthU();
                if (onStart)
                    fadeInAF(svg_af_south_u);
                break;

            // af_south_u
            case 8:
                hideArtistInfo();
                break;

            // af_south_u
            // Interview
            case 9:
                setArtistInfo(5);
                showArtistInfo();
                break;

            // af_south_u
            case 10:
                hideArtistInfo();
                break;

            // af_south_u
            // Interview
            case 11:
                setArtistInfo(6);
                showArtistInfo();
                break;

            // af_south_u
            case 12:
                hideArtistInfo();
                break;

            // af_south_u
            // Interview
            case 13:
                setArtistInfo(7);
                showArtistInfo();
                break;

            default:
                break;
        }
        displayVideo(num);
    }
    
    /********* INITIALIZE TWEENS *********/
    // af_summer1
    var tween1 = new TimelineMax({
        onStart: function() {
            enableMap = true;
        },
        onReverseComplete: function() {
            enableMap = false;
            map.hide();
        }
    })
        .add(TweenMax.to(".title_disappear", 0.5, {opacity: 0, ease:Power4.easeOut}), 0)
        .add(TweenMax.to("#click_prompt", 0.5, {opacity: 1, ease:Power4.easeIn}), 0)
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[1], ease:Linear.easeNone}), 0)
        .add(TweenMax.to("#click_prompt", 0.5, {opacity: 0, ease:Power4.easeOut}));

    // af_state
    var tween2 = new TimelineMax({
        onStart: switchVideo, onStartParams: [1, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [0, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[2], ease:Linear.easeNone}));

    // af_original    
    var tween3 = new TimelineMax({
        onStart: switchVideo, onStartParams: [2, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [1, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[3], ease:Linear.easeNone}));
    var tween4 = new TimelineMax({
        onStart: switchVideo, onStartParams: [3, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [2, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[4], ease:Linear.easeNone}));

    // af_state
    var tween5 = new TimelineMax({
        onStart: switchVideo, onStartParams: [4, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [3, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[5], ease:Linear.easeNone}));
    var tween6 = new TimelineMax({
        onStart: switchVideo, onStartParams: [5, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [4, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[6], ease:Linear.easeNone}));

    // af_summer2
    var tween7 = new TimelineMax({
        onStart: switchVideo, onStartParams: [6, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [5, false]
    })        
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[7], ease:Linear.easeNone}));

    // af_south_u
    var tween8 = new TimelineMax({
        onStart: switchVideo, onStartParams: [7, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [6, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[8], ease:Linear.easeNone}));
    var tween9 = new TimelineMax({
        onStart: switchVideo, onStartParams: [8, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [7, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[9], ease:Linear.easeNone}));
    var tween10 = new TimelineMax({
        onStart: switchVideo, onStartParams: [9, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [8, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[10], ease:Linear.easeNone}));
    var tween11 = new TimelineMax({
        onStart: switchVideo, onStartParams: [10, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [9, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[11], ease:Linear.easeNone}));
    var tween12 = new TimelineMax({
        onStart: switchVideo, onStartParams: [11, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [10, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[12], ease:Linear.easeNone}));
    var tween13 = new TimelineMax({
        onStart: switchVideo, onStartParams: [12, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [11, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[13], ease:Linear.easeNone}));
    var tween14 = new TimelineMax({
        onStart: switchVideo, onStartParams: [13, true],
        onReverseComplete: switchVideo, onReverseCompleteParams: [12, false]
    })
        .add(TweenMax.to(tourpath, 1, {strokeDashoffset: dashOffsets[14], ease:Linear.easeNone}));

    /********* INITIALIZE SCENES *********/
    var offsetStart = 658;
    var scene1 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 0})
        .setTween(tween1)
        //.addIndicators()
        .addTo(mController);
    var scene2 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 1})
        .setTween(tween2)
        //.addIndicators()
        .addTo(mController);
    var scene3 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 2})
        .setTween(tween3)
        //.addIndicators()
        .addTo(mController);
    var scene4 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 3})
        .setTween(tween4)
        //.addIndicators()
        .addTo(mController);
    var scene5 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 4})
        .setTween(tween5)
        //.addIndicators()
        .addTo(mController);
    var scene6 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 5})
        .setTween(tween6)
        //.addIndicators()
        .addTo(mController);
    var scene7 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 6})
        .setTween(tween7)
        //.addIndicators()
        .addTo(mController);
    var scene8 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 7})
        .setTween(tween8)
        //.addIndicators()
        .addTo(mController);
    var scene9 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 8})
        .setTween(tween9)
        //.addIndicators()
        .addTo(mController);
    var scene10 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 9})
        .setTween(tween10)
        //.addIndicators()
        .addTo(mController);
    var scene11 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 10})
        .setTween(tween11)
        //.addIndicators()
        .addTo(mController);
    var scene12 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 11})
        .setTween(tween12)
        //.addIndicators()
        .addTo(mController);
    var scene13 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 12})
        .setTween(tween13)
        //.addIndicators()
        .addTo(mController);
    var scene14 = new ScrollMagic.Scene({ duration: timePerVideo, offset: offsetStart + timePerVideo * 13})
        .setTween(tween14)
        //.addIndicators()
        .addTo(mController);
});