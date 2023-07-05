export default function handler(req, res) {
  const MessageResponse = require("twilio").twiml.MessagingResponse;

  var messageResponse = new MessageResponse();
  messageResponse.message("Reply is Here");

  res.writeHead(200, {
    "Content-Type": "text/xml",
  });

  res.end(messageResponse.toString());
}

