let $ = jQuery;
$(window).load(function() {
    let $ = jQuery;

    let loggedIn = $('#loggedIn');
    let loggedOut = $('#loggedOut');
    let isAuthenticated = window.sessionStorage.getItem('isAuthenticated');
    let cartNumber = window.sessionStorage.getItem('numberOfItemsInCart');

    const isTrueAuth = (isAuthenticated === 'true');
    const intCartNum = parseInt(cartNumber);

    // append the cart number from the session storage numberOfItemsInCart to cart icon
    if (intCartNum != 0) {
        $('#cartNumber .cn').append(cartNumber);
    } else {
        $('#cartNumber .cn').css('display','none');
    }

    // show login btn if session storage isAuthenticated is true
    if (isTrueAuth != true) {
        loggedIn.hide();
        loggedOut.show();
        $('.log-out-interior-door-tab').attr('data-test', 'logged-out-interior-doors-tab');
        $('.log-out-how-to-tab').attr('data-test', 'logged-out-how-to-tab');
        $('.log-out-support-tab').attr('data-test', 'logged-out-support-tab');
    } else {
        $('.login-interior-door-tab').attr('data-test', 'logged-in-interior-door-tab');
        $('.login-how-to-tab').attr('data-test', 'logged-in-how-to-tab');
        $('.login-support-tab').attr('data-test', 'logged-in-support-tab');
        $('.cart-icon').attr('data-test', 'logged-in-shopping-cart-icon');
        $('.account-icon').attr('data-test', 'logged-in-account-icon');
        loggedOut.hide();
        loggedIn.show();
        loggedIn.css('position','inherit');
    }

    // Navigation Attributes
    $('.nav-account-link').attr('data-test','nav-account-link');
    $('.nav-cart-link').attr('data-test','nav-cart-link');
    $('.nav-login-link').attr('data-test','nav-login-link');
    $('.logo-element-login').attr('data-test','logged-in-desktop-nav-logo');
    $('.logo-element').attr('data-test','desktop-nav-logo');
    $('.mobile-logo-element').attr('data-test','mobile-nav-logo');
    // Footer nav attributes
    $('.interior-door-footer-link').attr('data-test','interior-door-footer-link');
    $('.how-to-footer-link').attr('data-test','how-to-footer-link');
    $('.support-footer-link').attr('data-test','support-footer-link');
    $('.my-account-footer-link').attr('data-test','my-account-footer-link');
    $('.shopping-cart-footer-link').attr('data-test','shopping-cart-footer-link');
    $('.warranty-footer-link').attr('data-test','warranty-footer-link');
    $('.privacy-policy-footer-link').attr('data-test','privacy-policy-footer-link');
    $('.footer-logo').attr('data-test','footer-logo-image');
    // Homepage door section
        // images
        $('.homepage-two-panel-square-img').attr('data-test', 'homepage-two-panel-square-image');
        $('.homepage-six-panel-square-img').attr('data-test', 'homepage-six-panel-square-image');
        $('.homepage-livingston-img').attr('data-test', 'homepage-livingston-image');
        $('.homepage-lincoln-park-img').attr('data-test', 'homepage-lincoln-park-image');
        // buttons
        $('.homepage-two-panel-square-btn').attr('data-test', 'homepage-two-panel-square-button');
        $('.homepage-six-panel-square-btn').attr('data-test', 'homepage-six-panel-square-button');
        $('.homepage-livingston-btn').attr('data-test', 'homepage-livingston-button');
        $('.homepage-lincoln-park-btn').attr('data-test', 'homepage-lincoln-park-button');
    // Homepage button attributes
    $('.holiday-deals-shop-now-btn').attr('data-test','holiday-deals-shop-now-button')
    $('.homepage-fth-shop-styles-btn').attr('data-test', 'homepage-fth-shop-styles-button');
    $('.homepage-diy-shop-styles-btn').attr('data-test', 'homepage-diy-shop-styles-button');
    $('.homepage-banner-shop-styles-btn').attr('data-test', 'homepage-banner-shop-styles-button');
    // -----
    // Interior Doors page
        // Post section attributes
        // buttons
        $('.int-dr-two-panel-square-view-details-btn').attr('data-test', 'two-panel-square-view-details-button');
        $('.int-dr-six-panel-square-view-details-btn').attr('data-test', 'six-panel-square-view-details-button');
        $('.int-dr-livingston-view-details-btn').attr('data-test', 'livingston-view-details-button');
        $('.int-dr-lincoln-park-view-details-btn').attr('data-test', 'lincoln-park-view-details-button');
        $('.int-dr-logan-view-details-btn').attr('data-test', 'logan-view-details-button');
        $('.int-dr-winslow-view-details-btn').attr('data-test', 'winslow-view-details-button');
        // images
        $('.int-dr-two-panel-square-view-details-img').attr('data-test', 'two-panel-square-view-details-image');
        $('.int-dr-six-panel-square-view-details-img').attr('data-test', 'six-panel-square-view-details-image');
        $('.int-dr-livingston-view-details-img').attr('data-test', 'livingston-view-details-image');
        $('.int-dr-lincoln-park-view-details-img').attr('data-test', 'lincoln-park-view-details-image');
        $('.int-dr-logan-view-details-img').attr('data-test', 'logan-view-details-image');
        $('.int-dr-winslow-view-details-img').attr('data-test', 'winslow-view-details-image');
    // -----
    // How to page
    $('.install-pdf-guide').attr('data-test', 'install-pdf-guide');
    $('.measure-pdf-guide').attr('data-test', 'measure-pdf-guide');
    // -----
    // Single Post page
        // post custom order buttons
        $('.interior-door-custom-order-220').attr('data-test','two-panel-square-custom-order-button') // 2 panel square
        $('.interior-door-custom-order-291').attr('data-test','six-panel-square-custom-order-button') // 6 panel square
        $('.interior-door-custom-order-292').attr('data-test','livingston-custom-order-button') // livingston
        $('.interior-door-custom-order-293').attr('data-test','lincoln-park-custom-order-button') // lincoln park
        $('.interior-door-custom-order-927').attr('data-test','logan-custom-order-button') // logan
        $('.interior-door-custom-order-928').attr('data-test','winslow-custom-order-button')// winslow
        // other products section images
        $('.post-winslow-view-details-img').attr('data-test','winslow-view-details-image')
        $('.post-logan-view-details-img').attr('data-test','logan-view-details-image')
        $('.post-livingston-view-details-img').attr('data-test','livingston-view-details-image')
        $('.post-lincoln-park-view-details-img').attr('data-test','lincoln-park-view-details-image')
        // other products section buttons
        $('.post-winslow-view-details-btn').attr('data-test','winslow-view-details-button')
        $('.post-logan-view-details-btn').attr('data-test','logan-view-details-button')
        $('.post-livingston-view-details-btn').attr('data-test','livingston-view-details-button')
        $('.post-lincoln-park-view-details-btn').attr('data-test','lincoln-park-view-details-button')
    // END Navigation Attributes
});
