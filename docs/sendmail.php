<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setFrom('info@test.amazing-amazon.by', 'Microfibra');
    //Кому отправить
    $mail->addAddress('info@test.amazing-amazon.by');
    //Тема письма
    $mail->Subject = 'Письмецо с моего сайта!';


    $body = '<h2>Запрос с сайта "Микрофибра"</h2>';

    if(trim(!empty($_POST['dzen']))){
        $body.='<p><strong>Форма собственности:</strong> '.$_POST['dzen'].'</p>';
    }

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя клиента:</strong> '.$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['comment']))){
        $body.='<p><strong>Комметарий:</strong> '.$_POST['comment'].'</p>';
    }

    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
    }


    $mail->Body = $body;

    //Отправляем
    if(!$mail->send()){
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
    ?>