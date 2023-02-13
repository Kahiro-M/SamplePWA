// オフライン時のサービスワーカーを登録
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

// post送信するための処理
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