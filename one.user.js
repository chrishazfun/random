// ==UserScript==
// @name         CHF USERSCRIPTS: 1ST EDITION
// @version      1.0
// @description  MAKES EDITS TO ENHANCE CERTAIN PARTS OF THE INTERNET (MADE FOR PERSONAL USE, but you can use it too) :)
// @author       Chris Lowles
// @match        *://*/*
// @grant        none
// @updateURL    https://chrishazfun.github.io/stuff/one.user.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

var _chf, _chf = {
	queryString: function(field, prop) {
		var href = prop;
		var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
		var string = reg.exec(href);
		return string ? string[1] : undefined;
	},
	init: function() {
		if (window.location.host === 'www.youtube.com') {
			setInterval(function() {
				if (document.querySelector('#yt-masthead .yt-masthead-logo-container #logo-container[href="/"]')) {
					document.querySelector('#yt-masthead .yt-masthead-logo-container #logo-container[href="/"]').setAttribute('href', '/feed/subscriptions');
				}
				if (document.querySelector('#yt-masthead div #yt-masthead-logo-fragment #logo-container map area[href="/"]')) {
					document.querySelector('#yt-masthead div #yt-masthead-logo-fragment #logo-container map area[href="/"]').setAttribute('href', '/feed/subscriptions');
				}
			}, 100);
		}
		if (window.location.host === "www.bing.com") {
			if (window.location.pathname === "/search") {
				if (_chf.queryString("q", window.location.href)) {
					window.open("//www.google.com/search?q=" + _chf.queryString("q", window.location.href), "_top");
				}
			}
			if (window.location.pathname === '/') {
				location.href = '//www.google.com/';
			}
		}
	}
};

_chf.init();