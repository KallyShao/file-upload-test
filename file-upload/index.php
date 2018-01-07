<?php

/**
 * @Author: Administrator
 * @Date:   2018-01-03 20:23:43
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-07 13:55:42
 */

//if ($_FILES["myfile"]["error"] > 0)
//{
// echo "Error: " . $_FILES["myfile"]["error"] . "<br />";
//}
// else
// {
  //echo $_FILES["myfile"][0]["name"];
  echo "Upload: " . $_FILES["myfile"]["name"][0] . "<br />";
  echo "Type: " . $_FILES["myfile"]["type"][0] . "<br />";
  echo "Size: " . ($_FILES["myfile"]["size"][0] / 1024) . " Kb<br />";
  echo "Stored in: " . $_FILES["myfile"]["tmp_name"][0];

  echo "Upload: " . $_FILES["myfile"]["name"][1] . "<br />";
  echo "Type: " . $_FILES["myfile"]["type"][1] . "<br />";
  echo "Size: " . ($_FILES["myfile"]["size"][1] / 1024) . " Kb<br />";
  echo "Stored in: " . $_FILES["myfile"]["tmp_name"][1];
// }

?>