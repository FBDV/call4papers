// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require radiocheck
//= require scripts

$(function () {
	setTimeout(function(){
		$(window.location.hash).find('.title--category-proposal').click();
	}, 100)

	// Todo list
	$('.todo').on('click', 'li', function () {
		$(this).toggleClass('todo-done');
	});

	// Custom Selects
	if ($('[data-toggle="select"]').length) {
		$('[data-toggle="select"]').select2();
	}

	// Checkboxes and Radio buttons
	$('[data-toggle="checkbox"]').radiocheck();
	$('[data-toggle="radio"]').radiocheck();

	// Tooltips
	$('[data-toggle=tooltip]').tooltip('show');

	// jQuery UI Sliders
	var $slider = $('#slider');
	if ($slider.length > 0) {
		$slider.slider({
			max: 15,
			step: 6,
			value: 3,
			orientation: 'horizontal',
			range: 'min'
		}).addSliderSegments();
	}

	var $verticalSlider = $('#vertical-slider');
	if ($verticalSlider.length) {
		$verticalSlider.slider({
			min: 1,
			max: 5,
			value: 3,
			orientation: 'vertical',
			range: 'min'
		}).addSliderSegments($verticalSlider.slider('option').max, 'vertical');
	}

	// Focus state for append/prepend inputs
	$('.input-group').on('focus', '.form-control', function () {
		$(this).closest('.input-group, .form-group').addClass('focus');
	}).on('blur', '.form-control', function () {
		$(this).closest('.input-group, .form-group').removeClass('focus');
	});

	// Make pagination demo work
	$('.pagination').on('click', 'a', function () {
		$(this).parent().siblings('li').removeClass('active').end().addClass('active');
	});

	$('.btn-group').on('click', 'a', function () {
		$(this).siblings().removeClass('active').end().addClass('active');
	});

	// Disable link clicks to prevent page scrolling
	$(document).on('click', 'a[href="#fakelink"]', function (e) {
		e.preventDefault();
	});

	// Switches
	if ($('[data-toggle="switch"]').length) {
		$('[data-toggle="switch"]').bootstrapSwitch();
	}

	// Typeahead
	if ($('#typeahead-demo-01').length) {
		var states = new Bloodhound({
			datumTokenizer: function (d) { return Bloodhound.tokenizers.whitespace(d.word); },
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			limit: 4,
			local: [
				{ word: 'Alabama' },
				{ word: 'Alaska' },
				{ word: 'Arizona' },
				{ word: 'Arkansas' },
				{ word: 'California' },
				{ word: 'Colorado' }
			]
		});

		states.initialize();

		$('#typeahead-demo-01').typeahead(null, {
			name: 'states',
			displayKey: 'word',
			source: states.ttAdapter()
		});
	}

	// make code pretty
	window.prettyPrint && prettyPrint();

});
