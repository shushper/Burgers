<?php 

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $building = $_POST['building'];
    $corpus = $_POST['corpus'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $payment = $_POST['payment'];

    $dont_call = $_POST['dont-callback'];
    $dont_call = isset($dont_call) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $building . '</li>
            <li>Корпус: ' . $corpus . '</li>
            <li>Квартира: ' . $flat . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий: ' . $comment . '</li>
            <li>Способ оплаты: ' . $payment . '</li>
            <li>Можно перезвонить клиенту: ' . $dont_call . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <admin@mrburger.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('shushper@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['success'] = true;
    }else{
        $data['success'] = false;
        $data['message'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>