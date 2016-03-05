<?php
header("Content-Type: application/xml");
    $file_XML = file_get_contents("http://xml.tutiempo.net/xml/946.xml");
    echo $file_XML;
