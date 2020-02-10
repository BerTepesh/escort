/* https://misha.blog/wordpress/shortcodes.html */

(function() {
	tinymce.PluginManager.add('151', function( editor, url ) {
		editor.addButton( '151', { 
			text: '—',
			title: 'Длинное тире',
			onclick: function() {
				editor.insertContent('&#151;');
			}
		});
	});
	tinymce.PluginManager.add('popup_buttons', function( editor, url ) {
		editor.addButton( 'popup_buttons', { 
			//icon: 'map-marker-alt', 
			text: 'Кнопка',
			//image: url + '../navigation.svg',
			type: 'menubutton',
			title: 'Вставить кнопку',
			menu: [ 
				{
					text: 'Заказать звонок',
					onclick: function() {
						editor.insertContent('[popup_btn link="popup-call"]Заказать звонок[/popup_btn]');
					}
				},
				{
					text: 'Получить консультацию',
					onclick: function() {
						editor.insertContent('[popup_btn link="popup-consultation"]Получить консультацию[/popup_btn]');
					}
				},
				{
					text: 'Оставить заявку',
					onclick: function() {
						editor.insertContent('[popup_btn link="popup-order"]Оставить заявку[/popup_btn]');
					}
				},
				{
					text: 'Записаться',
					onclick: function() {
					editor.insertContent('[popup_btn link="popup-lead"]Записаться[/popup_btn]');
					}
				}
			]
		});
	});
	/*
	tinymce.PluginManager.add('builder_link', function( editor, url ) {
		editor.addButton( 'builder_link', { 
			image: url + '/builder_link.svg',
			title: 'Кнопка на конструктор',
			onclick: function() {
				editor.insertContent('[builder_link]Online-конструктор[/builder_link]');
			}
		});
	});/*
	tinymce.PluginManager.add('nbsp', function( editor, url ) {
		editor.addButton( 'nbsp', { 
			image: url + '/space.svg',
			title: 'Вставить неразрывной пробел',
			onclick: function() {
				editor.insertContent('&nbsp;');
			}
		});
	});*/
})();