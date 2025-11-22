<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $greeting = "code";
    $read = false;
    if ($read){
        $massig = "you had read the : $greeting";
    } else{
        $massig = "you had not read the : $greeting";
    }

    ?>


    <h1><?php
    $x = 10;
    $y = 10;

    function test(){
        global $x, $y;
        $y = $x + $y;
    }
test();
echo $y;

    ?></h1>
</body>
</html>
