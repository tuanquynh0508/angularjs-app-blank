<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

}

function sendEmail($to, $subject, $message, $fromEmail='', $fromName='') {
  $fromName = (!empty($fromName))?$fromName:Yii::app()->params['adminName'];
  $from = (!empty($fromEmail))?$fromEmail:Yii::app()->params['adminEmail'];
  mb_language('Japanese');
  mb_internal_encoding('UTF-8');
  $headers = 'From: ' . mb_encode_mimeheader($fromName) . '<' . $from . '>';
  $headers .= "\n";
  $headers .= 'Reply-To: ' . $from;
  $parameters = '-f  '. $from;
  return @mb_send_mail($to, $subject, $message, $headers, $parameters);
}