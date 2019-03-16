var load = document.getElementById('load');
            var img = document.getElementById('image');
            var xhr = new XMLHttpRequest();
            function dogsImages() {
                xhr.onreadystatechange = function () {
                    if (xhr.readyState != 4 || xhr.status != 200) {
                        load.innerHTML = "<p>Please wait while the image loads</p>"
                        img.style.display = 'none';
                    } 
                    else if (xhr.readyState == 4 && xhr.status == 200) {
                        load.innerHTML = ""
                        img.style.display = '';
                        var imageResponse = JSON.parse(xhr.responseText);
                        img.src = imageResponse.message;
                    }
                };
                xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
                xhr.send();
            }