/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
const tpj = jQuery;

let revapi280;
tpj(document).ready(function () {
  if (tpj('#rev_slider_nagency').revolution == undefined) {
    revslider_showDoubleJqueryError('#rev_slider_nagency');
  } else {
    revapi280 = tpj('#rev_slider_nagency')
      .show()
      .revolution({
        sliderType: 'standard',
        sliderLayout: 'fullscreen',
        dottedOverlay: 'none',
        delay: 90000,
        navigation: {
          keyboardNavigation: 'off',
          keyboard_direction: 'horizontal',
          mouseScrollNavigation: 'off',
          onHoverStop: 'off',
          touch: {
            touchenabled: 'on',
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: 'horizontal',
            drag_block_vertical: false,
          },
          arrows: {
            style: 'uranus',
            enable: true,
            hide_onmobile: true,
            hide_under: 496,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: '',
            left: {
              h_align: 'left',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0,
            },
            right: {
              h_align: 'right',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0,
            },
          },
        },
        responsiveLevels: [1200, 991, 767, 480],
        visibilityLevels: [1200, 991, 767, 480],
        gridwidth: [1200, 991, 767, 480],
        gridheight: [868, 768, 960, 720],
        lazyType: 'none',
        parallax: {
          type: 'mouse+scroll',
          origo: 'slidercenter',
          speed: 2000,
          levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
          disable_onmobile: 'on',
        },
        shadow: 0,
        spinner: 'spinner2',
        autoHeight: 'off',
        fullScreenAutoWidth: 'off',
        fullScreenAlignForce: 'off',
        fullScreenOffsetContainer: '',
        fullScreenOffset: '0',
        disableProgressBar: 'on',
        hideThumbsOnMobile: 'off',
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: 'off',
          disableFocusListener: false,
        },
      });
  }
}); /* ready */
