var images = ["f.jpg", "p.jpg", "m.jpg", "d.jpg", "pu.jpg"];

var names = ["Lunawat Family", "Paresh Lunawat", "Smital Lunawat", "Diveet Lunawat", "Purab Lunawat"];

var i = 0;
function update()
{
    i++;
    var number_of_family_member_in_array = 5
    if(i > number_of_family_member_in_array )
    {
        i = 0++;
    }
    var updatedImage = images[i++];
    var updatedName = names[i++];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}