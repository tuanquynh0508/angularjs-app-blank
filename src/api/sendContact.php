<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);

  sendEmail('tuanquynh0508@gmail.com', $request->subject, $request->message, $request->email, $request->fullname);

  $data = new stdClass();
  $data->status = 'success';
  header('Content-Type: application/json');
  echo json_encode($data);
} else {
  echo ':)';
}

function sendEmail($to, $subject, $message, $fromEmail='', $fromName='') {
  //mb_language('Japanese');
  mb_internal_encoding('UTF-8');
  $headers = 'From: ' . mb_encode_mimeheader($fromName) . '<' . $fromEmail . '>';
  $headers .= "\n";
  $headers .= 'Reply-To: ' . $fromEmail;
  $parameters = '-f  '. $fromEmail;
  return @mb_send_mail($to, $subject, $message, $headers, $parameters);
}
