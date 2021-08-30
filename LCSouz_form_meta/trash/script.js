window.addEventListener('DOMContentLoaded', () => {

    //Форма отправки

    $(function() {
      $(".g-form").submit(function (event) {
        event.preventDefault();
     
        // Ссылка, которую получили на этапе публикации приложения
        let appLink = "https://script.google.com/macros/s/AKfycbypOy1t3zFbhp7kc_1ZVaQAxl3S9x6kBL318HjuSUiokiucoTk/exec";
     
        // Сообщение при успешной отправке данных
        let successRespond = 'Сообщение успешно отправлено.';
     
        // Сообщение при ошибке в отправке данных
        let errorRespond = 'Не удалось отправить сообщение. Cвяжитесь с администратором сайта по адресу <a href="mailto:mail@lcsouz.ru">mail@lcsouz.ru</a>';
     
        // Id текущей формы
        let form = $('#' + $(this).attr('id'))[0];
     
        // h2 с ответом формы
        let formRespond = $(this).find('.g-form__title_respond');
     
        // h2 с заголовком формы
        let formTitle = $(this).find('.g-form__title_main');
     
        // Блок прелоадера
        let preloader = $(this).find('.g-form__preloader');
     
        // Кнопка отправки формы
        let submitButton = $(this).find('.g-form__button');
  
        //Мое откл инпутов
        let noInput = $(this).find('.g-form__inputs');
  
        //Мое благодарство
        let thanks = $(this).find('.g-form__title');
     
     
        // FormData
        let fd = new FormData(form);
     
     
        $.ajax({
     
          url: appLink,
          type: "POST",
          data: fd,
          processData: false,
          contentType: false,
          beforeSend: function(){
     
            if(fd.get('honeypot').length) {
              return false;
            } else {
              fd.delete('honeypot');
            }
     
          // Показываем прелоадер
          preloader.css('opacity', '1');
     
          // Делаем неактивной кнопку отправки
          submitButton.prop('disabled', true);
     
          // валидация других полей.
     
        },
     
      }).done(function(res, textStatus, jqXHR) {
     
        if(jqXHR.readyState === 4 && jqXHR.status === 200) {
     
        // Прячем заголовок формы
        formTitle.css({
          'display': 'none'
        });
     
        // Прячем прелоадер
        preloader.css('opacity', '0');
     
        // Выводим ответ формы.
        formRespond.html(successRespond).css('color', '#000000');
        
        formRespond.css({
          'display': 'block'
        });
  
        // Возвращаем активность кнопке отправки
        submitButton.prop('disabled', false);
     
          // Очищаем поля формы
          // form.reset();
  
        
        preloader.css({
          'display': 'none'
        });
  
        noInput.css({
          'display': 'none'
        });
  
        submitButton.css({
          'display': 'none'
        });
        
        } else {
          formTitle.css({
            'display': 'none'
          });
          formRespond.html(errorRespond).css('color', '#c64b4b');
          preloader.css('opacity', '0');
          setTimeout( () => {
            formRespond.css({
              'display': 'none'
            });
            formTitle.css({
              'display': 'block'
            });
            //
            preloader.css({
              'display': 'none'
            });
      
            noInput.css({
              'display': 'none'
            });
      
            submitButton.css({
              'display': 'none'
            });
            //
            submitButton.prop('disabled', false);
          }, 10000);
     
          console.log('Гугл не ответил статусом 200');
        }
      }).fail(function(res, textStatus, jqXHR) {
        formTitle.css({
          'display': 'none'
        });
        preloader.css('opacity', '0');
        formRespond.html('Не удалось отправить сообщение. Cвяжитесь с нами другим способом').css('color', '#c64b4b');
        form.reset();
        preloader.css({
          'display': 'none'
        });
  
        noInput.css({
          'display': 'none'
        });
  
        submitButton.css({
          'display': 'none'
        });
  
        formRespond.css({
          'display': 'block'
        });
        setTimeout( () => {
          formRespond.css({
            'display': 'none'
          });
          formTitle.css({
            'display': 'block'
          });
          preloader.css({
            'display': 'block'
          });
    
          noInput.css({
            'display': 'block'
          });
    
          submitButton.css({
            'display': 'block'
          });
  
          submitButton.prop('disabled', false); 
        }, 10000);
     
        console.log('Не удалось выполнить запрос по указанному в скрипте пути');
  
        
      }); 
    });
    }(jQuery));
});

