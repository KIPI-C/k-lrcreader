<!DOCTYPE html>
<html lang="en">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="KIPI-C">
    <Meta name="Copyright" Content="本页版权归kipi-c所有。All Rights Reserved">
    <title>k-lrcreader.js测试页面</title>


</head>
<body>
<audio src="http://m10.music.126.net/20170729201849/cb88f5f05fa84078a4d1c20b06dffb6b/ymusic/5c08/a94f/e769/8d06c4a05c0bb5671110255ec35ca1dc.mp3" controls style="display: block;"></audio>
<p id="0" style="background: deepskyblue;color: #fff;display: inline-block;padding: 1px 2px">

</p>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="k-lrcreader.js"></script>
<script>
    lrcread("https://raw.githubusercontent.com/KIPI-C/k-audio.js/master/1.lrc",document.getElementsByTagName("audio")[0],document.getElementById("0"),"alt");
</script>
</body>
</html>
