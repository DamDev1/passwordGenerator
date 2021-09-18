const generate = document.querySelector(".generate");

generate.addEventListener("click", function(){
    var pass = '0123456789uvwxyz!@#z!@#$%^&*RSTUVWXYZcdefghijkklmnopqrstu'

    var passLength = 10;
    var password = '';

    for(var i = 0; i<=passLength; i++){
        var random = Math.floor(Math.random() * pass.length);
        password += pass.substring(random, random+1);

        document.getElementById('viewGenerate').value = password;
    }
})

function copyPass(){
    var copyText = document.getElementById('viewGenerate');
    copyText.select()
    copyText.setSelectionRange(0, 999);
    document.execCommand('copy')
}