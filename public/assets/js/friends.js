$("#submit").on("click", function(){
        console.log("yep")
        form()
    })
    
function form() {
    var userData = {
        photo: $("#photo").val(), 
        group: "people", 
        name: $("#name").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    }
    console.log(userData)
}