/* функция добавления ведущих нулей */
			/* (если число меньше десяти, перед числом добавляем ноль) */
			function zero_first_format(value)
			{
			if (value < 10)
			{
			value='0'+value;
			}
			return value;
			}

			/* функция получения текущей даты и времени */
			function date_time()
			{
				var current_datetime = new Date();
				var day = zero_first_format(current_datetime.getDate());
				var month = zero_first_format(current_datetime.getMonth()+1);
				var year = current_datetime.getFullYear();
				var hours = zero_first_format(current_datetime.getHours());
				var minutes = zero_first_format(current_datetime.getMinutes());
				var seconds = zero_first_format(current_datetime.getSeconds());
				return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
			}

			/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
			document.getElementById('current_date_time_block').innerHTML = date_time()
			setInterval(() =>(document.getElementById('current_date_time_block').innerHTML = date_time()), 1000)

			var d0 = new Date ().getTime ();
			var d = new Date (new Date ().getFullYear (), 0, 1);
			var d1 = d.getTime ();
			var dd = d.getDay ();
			var re = Math.floor ((d0 - d1) / 8.64e7) + (dd ? dd - 1 : 6);
			var is_even;
			if((Math.floor (re / 7) % 2))
				 { is_even = true; }
			else{ is_even = false; }
			var str = (is_even ? 'Неделя не четная' : 'Неделя четная');
			document.getElementById('current_week').innerHTML = str;

			var td = document.getElementsByClassName('uneven');
			if(is_even){
				for(i = 0 ; i < td.length ; i++)
					td[i].style.color = "white";
			}else{
				for(i = 0 ; i < td.length ; i++)
					td[i].style.color = '#00897B';
			}