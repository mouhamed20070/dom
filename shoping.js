// Corrected code

var del = Array.from(document.getElementsByClassName('delete-btn'));

for (let el of del) {
    el.addEventListener("click", function(event) {
        var r = confirm("Are you sure to delete this item?");
        if (r == true) {
            const parent = el.closest(".item");
            parent.remove();
            sum();
        }
    });
}

var dec = Array.from(document.getElementsByClassName('minus-btn'));

for (let el of dec) {
    el.addEventListener("click", function() {
        let t = el.nextElementSibling.value;
        let s = parseInt(t, 10);
        if (s > 0) {
            s--;
        }
        el.nextElementSibling.value = s;
        sum();
    });
}

var inc = Array.from(document.getElementsByClassName('plus-btn'));
for (let el of inc) {
    el.addEventListener("click", function() {
        let t = el.previousElementSibling.value;
        let s = parseInt(t, 10);
        s++;
        el.previousElementSibling.value = s;
        sum();
    });
}

function sum() {
    var qte = Array.from(document.getElementsByClassName("quantity"));
    var price = Array.from(document.getElementsByClassName("price"));
    var total = 0;
    for (let i = 0; i < price.length; i++) {
        total += parseInt(qte[i].value) * parseInt(price[i].innerText);
        console.log(parseInt(qte[i].value));
        console.log(parseInt(qte[i].innerText));
    }
    console.log(total);
    document.querySelector("#total").innerText = "total: " + total + " ";
}

var like = document.getElementsByClassName('fa-heart');
for (let el of like) {
    el.addEventListener("click", function() {
        if (el.style.color === "rgb(221, 160, 221)") {
            el.style.color = "rgb(221, 160, 221)";
        } else {
            el.style.color = "rgb(221, 160, 221)";
        }
    });
}
