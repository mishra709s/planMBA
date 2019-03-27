<?php
// Check for empty fields
if (empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['mobile'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
    echo "No arguments Provided!";
    return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$mobile = strip_tags(htmlspecialchars($_POST['mobile']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$recipients = array(
  "planmbaconsultant@gmail.com",
  "amrutha@planmba.in"
);

$to = implode(',', $recipients);
$email_subject = "PlanMBA Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nMobile: $mobile\n\nMessage:\n$message";
$headers = "From: enquiry@planmba.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email";
   
mail($to, $email_subject, $email_body, $headers);
return true;         
?>
