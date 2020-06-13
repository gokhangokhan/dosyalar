<?php
function get_stat( $url, $headers )
{
    $handle = curl_init();
    curl_setopt( $handle, CURLOPT_URL, $url );
    curl_setopt( $handle, CURLOPT_HTTPHEADER, $headers );
    curl_setopt( $handle, CURLOPT_SSL_VERIFYPEER, false );
    curl_setopt( $handle, CURLOPT_SSL_VERIFYHOST, false );
    curl_setopt( $handle, CURLOPT_RETURNTRANSFER, true );
    $response = curl_exec( $handle );
    $code = curl_getinfo( $handle, CURLINFO_HTTP_CODE );
    return array( "code" => $code, "response" => $response );
}

$url_yandex_disk = "https://yadi.sk/i/bxiDyczj4xqFIA";

$result = get_stat( "https://cloud-api.yandex.net:443/v1/disk/public/resources/download?public_key=" . urlencode( $url_yandex_disk ), array() );
if( $result["code"] == 200 )
{
  $result["response"] = json_decode( $result["response"], true );
  echo '<a href="' . $result["response"]["href"] . '">Скачать</a>';
}
else
{
  echo "error";
}
 
