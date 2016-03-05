<?php
header("Content-Type: application/xml");

$puertos["01"] = "Todos los puertos";
$puertos["02"] = "Alpes";
$puertos["03"] = "Pirineos";
$puertos["04"] = "Resto cordilleras";




foreach($puertos as $codigo => $nombre) {
$elementos_xml[] = "<puerto>\n<codigo>$codigo</codigo>\n<nombre>".$nombre."</nombre>\n</puerto>";
}

echo "<puertos>\n".implode("\n", $elementos_xml)."\n</puertos>"

?>
