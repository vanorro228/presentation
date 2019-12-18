jQuery(document).ready(function($){

	//закрытие модального окна
	$('.close_modal, .overlay').click(function (){
		$('.popup, .popup2, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.popup > .fofm textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.fofm').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".fofm input[type=submit]").attr('disabled','disabled');
	});

	//показ модального окна
	$('.open_modal').click(function (e){
		e.preventDefault();
		$('.popup, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	//аякс форма обратной связи
	$(".fofm, .fofm1, .fofm2").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "form/send.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					window.location.href = "/form/spasibo.php";				}
				else {
					$('.popup2 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup2, .overlay').css('opacity','1');
					$('.popup2, .overlay').css('visibility','visible');
					$('.popup').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});