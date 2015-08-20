! function() {
	var pbody = $('.p-body')
	var pfooter = $('.p-footer')
	var win = $(window)
	var topHeight = $('.p-toper').outerHeight()
	var menuHeight = $('.p-menu').outerHeight()
	var pbodyHeight = pbody.outerHeight()
	var psubmenuHeight = $('.p-submenu').outerHeight()

	function _resize() {
		var windowHeight = win.height()
		var height = windowHeight - topHeight - menuHeight - psubmenuHeight
		if (height > pbodyHeight) {
			pbody.css({
				height: height,
				padding: 0
			})
			pfooter.css({
				position: 'fixed'
			})
		} else {
			pbody.css({
				height: '',
				padding: ''
			})
			pfooter.css({
				position: ''
			})
		}
	}

	_resize()

	win.on('resize', _resize)
}()