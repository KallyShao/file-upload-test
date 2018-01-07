/*
* @Author: Administrator
* @Date:   2018-01-06 15:46:17
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-07 13:49:31
*/

$(function(){
    $('#submit').click(function(event) {　　 //formdata储存异步上传数据
        var formData = new FormData($('form')[0]);
        console.log($(':file')[0].files);
        console.log($(':file')[1].files);
        formData.append('myfile[]', $(':file')[0].files[0]);
        formData.append('myfile[]', $(':file')[1].files[0]);
        // 坑点: 无论怎么传数据,console.log(formData)都会显示为空,但其实值是存在的,f12查看Net tab可以看到数据被上传了
        $.ajax({
            url: 'index.php',
            type: 'POST',
            data: formData,
            //这两个设置项必填
            contentType: false,
            processData: false,
            success: function(data) {
                console.log(data);
                // var srcPath = data;
                // console.log();　　　　 //注意这里的路径要根据自己的储存文件的路径设置
                // $('.picDis img').attr('src', '..' + srcPath);
            },
            error: function(err){
                console.log(err);
            }
        })
    });
});
