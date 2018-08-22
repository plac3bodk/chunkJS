function chunkJS(url,element) {
    $.ajax({
        url: url,
        dataType: 'text',
        type: 'GET',
        success: function (d) {
            element.replaceWith(d);
        },
        error: function (d) {
            console.log(d);
        }
    });
};
$(document).ready(function(){
    $.each($('div[chunk]', document),function(k,e){
        chunkJS($(e).attr('chunk'),$(e));
    });
});
