<?php
$fullname = '';
$email = '';
$subject = '';
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $fullname = $_POST['fullname'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  sendEmail('tuanquynh0508@gmail.com', $subject, $message, $email, $fullname);

  $data = new stdClass();
  $data->status = 'success';
  header('Content-Type: application/json');
  echo json_encode($data);
} else {
  echo ':)';
}

function sendEmail($to, $subject, $message, $fromEmail='', $fromName='') {
  mb_language('Japanese');
  mb_internal_encoding('UTF-8');
  $headers = 'From: ' . mb_encode_mimeheader($fromName) . '<' . $fromEmail . '>';
  $headers .= "\n";
  $headers .= 'Reply-To: ' . $fromEmail;
  $parameters = '-f  '. $fromEmail;
  return @mb_send_mail($to, $subject, $message, $headers, $parameters);
}
