// Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});


$(function(){
  $('input.in_url').on('change', function(){
    // console.log('change in_url');
    $('form').attr('action',$(this).val());
  })
  $('input.in_id_name').on('change', function(){
    // console.log('change in_id_name');
    $('input.in_id').attr('name',$(this).val());
  })
  $('input.in_id').on('change', function(){
    console.log('change in_id');
  })
  $('input.in_pw_name').on('change', function(){
    // console.log('change in_pw_name');
    $('input.in_pw').attr('name',$(this).val());
  })
  $('input.in_pw').on('change', function(){
    console.log('change in_pw');
  })
  $('input.in_hd_name').on('change', function(){
    // console.log('change in_hd_name');
    $('input.in_hd').attr('name',$(this).val());
  })
  $('input.in_hd').on('change', function(){
    console.log('change in_hd');
  })
});