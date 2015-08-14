! function() {
	var pbody = $('.p-body')
	var pfooter = $('.p-footer')
	var top = $('.p-toper')
	var menu = $('.p-menu')
	var win = $(window)
	var topHeight = top.outerHeight()
	var menuHeight = menu.outerHeight()
	var pbodyHeight = pbody.outerHeight()

	function _resize() {
		var windowHeight = win.height()
		var height = windowHeight - topHeight - menuHeight
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