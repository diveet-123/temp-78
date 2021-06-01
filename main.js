var images = ["f.jpg", "p.jpg", "m.jpg", "d.jpg", "pu.jpg"];

var names = ["Lunawat Family", "Paresh Lunawat", "Smital Lunawat", "Diveet Lunawat", "Purab Lunawat"];

var i = 0;
function update()
{
    i++;
    if(i > 4 )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family").src = updatedImage;
    document.getElementById("Family_name").innerHTML = updatedName;
}