$('#order-form').on('submit', submitForm);
var modal = $('#modal');

function submitForm (ev) {
    ev.preventDefault();

    let form = $(ev.target);
    let data = form.serialize();
    let url = form.attr('action');
    let type = form.attr('method');
    
    var request = $.ajax({
        type: type,
        url: url,
        dataType: 'JSON',
        data: data
    });

    request.done(function(response) {
        showModalWindow(response);
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    }); 

}

function showModalWindow(response) {
    modal.css("display", "flex");

    if (response.success) {
        modal.find('.modal__text').text("Сообщение удачно отправлено");
    } else {
        modal.find('.modal__text').text(response.message);
    }

    modal.find('.modal__btn').on('click', function(event) {
        event.preventDefault();
        hideModalWindow();
    });
}

function hideModalWindow() {
    modal.css("display", "none");
}