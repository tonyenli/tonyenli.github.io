$(function () {

    $("#btn").click(function () {

        var message1 = $("[name=message1]").val();
        $("#message1").text(message1);
        var message2 = $("[name=message2]").val();
        $("#message2").text(message2);
        var message3 = $("[name=message3]").val();
        $("#message3").text(message3);
        var message4 = $("[name=message4]").val();
        $("#message4").text(message4);

    });

});
