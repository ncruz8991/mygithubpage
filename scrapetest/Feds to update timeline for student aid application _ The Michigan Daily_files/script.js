/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {
  }
};

})(jQuery, Drupal, this, this.document);

jQuery(window).setBreakpoints({
// use only largest available vs use all available
    distinct: true,
// array of widths in pixels where breakpoints
// should be triggered
    breakpoints: [
        10,
        670,
    ]
});

jQuery(window).bind('enterBreakpoint10',function() {
    googletag.cmd.push(function() {
        googletag.defineSlot('/1004313/D7TopBox', [300, 250], 'ad-topbox').addService(googletag.pubads());
        googletag.defineSlot('/1004313/D7-Mobile', [320, 50], 'mobile-ad').addService(googletag.pubads());
        googletag.defineSlot('/1004313/D7SecondaryBox1', [300, 250], 'ad-box1').addService(googletag.pubads());
        googletag.defineSlot('/1004313/D7SecondaryBox2', [300, 250], 'ad-box2').addService(googletag.pubads());
        googletag.defineSlot('/1004313/D7-VirtBanner', [300, 600], 'ad-virt').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });

    googletag.cmd.push(function() { googletag.display('ad-topbox'); });
    googletag.cmd.push(function() { googletag.display('mobile-ad'); });
    googletag.cmd.push(function() { googletag.display('ad-box1'); });
    googletag.cmd.push(function() { googletag.display('ad-box2'); });
    googletag.cmd.push(function() { googletag.display('ad-box3'); });
    googletag.cmd.push(function() { googletag.display('ad-virt'); });
    googletag.enableServices();

});


jQuery(window).bind('enterBreakpoint670',function() {
    googletag.cmd.push(function() {
        googletag.defineSlot('/1004313/D7-Drupal-Top-Desktop', [728, 90], 'ad-banner-desktop').addService(googletag.pubads());
        googletag.defineSlot('/1004313/D7TopBox', [300, 250], 'ad-topbox').addService(googletag.pubads());
        googletag.defineSlot('/1004313/D7SecondaryBox1', [300, 250], 'ad-box1').addService(googletag.pubads());
        googletag.defineSlot('/1004313/D7SecondaryBox2', [300, 250], 'ad-box2').addService(googletag.pubads());
        googletag.defineSlot('/1004313/D7SecondaryBox3', [300, 250], 'ad-box3').addService(googletag.pubads());
        googletag.defineSlot('/1004313/D7-VirtBanner', [300, 600], 'ad-virt').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });

    googletag.cmd.push(function() { googletag.display('ad-banner-desktop'); });
    googletag.cmd.push(function() { googletag.display('ad-topbox'); });
    googletag.cmd.push(function() { googletag.display('ad-box1'); });
    googletag.cmd.push(function() { googletag.display('ad-box2'); });
    googletag.cmd.push(function() { googletag.display('ad-box3'); });
    googletag.cmd.push(function() { googletag.display('ad-virt'); });
    googletag.enableServices();
});




function shareStory(url) {
    FB.ui({
        method: 'share',
        href: url,
    }, function(response){});
}


jQuery(document).ready(function() {
    var navpos = jQuery('#headerandtopics').offset();
    jQuery(window).bind('scroll', function() {
      if (jQuery(window).scrollTop() >= navpos.top) {
        jQuery('#headerandtopics').addClass('sticky-nav-bar');
      }
      else {
        jQuery('#headerandtopics').removeClass('sticky-nav-bar');
      }
    });

    jQuery( "#mobilenavbutton" ).click(function() {
        jQuery("#headerandtopics").toggle();
    });
});