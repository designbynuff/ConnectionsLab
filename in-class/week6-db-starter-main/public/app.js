window.addEventListener('load', () => {
  let feed = document.getElementById('feed');

  //STEP 5. Fetch all the messages from the server
  fetch('/messages')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      //STEP 6. Add messages to htlm
      let messages = data.data;
      console.log(messages);
      for (let i = 0; i < messages.length; i++) {
        console.log(messages[i]);

        let message = messages[i].message;
        let time = messages[i].time;
        let messageContent = time + ": " + message;
        let newMessage = document.createElement('p');
        newMessage.innerHTML = messageContent;

        //append to the feed
        feed.appendChild(newMessage);
      }
    })
});
