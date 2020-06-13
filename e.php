<?php
function ya_link( $url){
    $url = "https://cloud-api.yandex.net:443/v1/disk/public/resources/download?public_key=" . urlencode( $url );
    $options = array(
            CURLOPT_RETURNTRANSFER => true,     // return web page
            CURLOPT_FOLLOWLOCATION => true,     // follow redirects
            CURLOPT_ENCODING       => "",       // handle all encodings
            CURLOPT_AUTOREFERER    => true,     // set referer on redirect
            CURLOPT_CONNECTTIMEOUT => 12,       // timeout on connect
            CURLOPT_TIMEOUT        => 12,       // timeout on response
            CURLOPT_MAXREDIRS      => 10,       // stop after 10 redirects
        //  CURLOPT_HTTPHEADER => array('Authorization:TOKEN'), //Send Disk access token
        CURLOPT_SSL_VERIFYPEER => false     // Disabled SSL Cert checks
        );
    $ch = curl_init( $url );
    curl_setopt_array( $ch, $options );
    $content = curl_exec( $ch );
    curl_close( $ch );
    $json = json_decode($content);
    if(isset($json->href))
        return $json->href;
    else 
        return '';
}

echo ya_link("https://yadi.sk/i/bxiDyczj4xqFIA");
