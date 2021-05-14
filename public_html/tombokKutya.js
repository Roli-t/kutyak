$(function () {


    tablazatbaKiir();
    urlapFeltolt();

    $("article").on("click", "th", rendezes);

    
}
);

var tomb = [
    {
        Név: "Morzsi",
        Kor: 5,
        Súly: 20
    },
    {
        Név: "Foltos",
        Kor: 11,
        Súly: 7
    },
    {
        Név: "Kormi",
        Kor: 13,
        Súly: 40
    },
    {
        Név: "Zsemle",
        Kor: 2,
        Súly: 15
    }
];
var irany = true;
function kiemel(){
    $(this).toggleClass("kiemel");
}

function urlapFeltolt() {
    $("form").append("<label for='nev'>Kutya neve: </label><br>");
    $("form").append("<input type='text' id='nev' value=''><br>");
    $("form").append("<label for='kor'>Kutya kora: </label><br>");
    $("form").append("<input type='text' id='kor' value=''><br>");
    $("form").append("<label for='suly'>Kutya súlya: </label><br>");
    $("form").append("<input type='text' id='suly' value=''><br>");
    $("form").append("<button type='button' name='button'>Küldés</button>");
    
    
  
}




function tablazatbaKiir() {
    

    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr></tr>");
    for (var item in tomb[0]) {
        $("article table tr").append("<th id='" + item + "'>" + item + " </th>");

    }
    for (var i = 0; i < tomb.length; i++) {
        $("article table").append("<tr>");
        for (var item in tomb[i]) {

            $("article table tr").eq(i + 1).append("<td>" + tomb[i][item] + " </td>");

        }
        ;
    }

$("article th").hover( kiemel);
}



function rendezes() {
    var mezo = $(this).attr("id");

    if (mezo === "Kor") {
        
        if (irany) {
            tomb.sort(
                    function (a, b) {
                        return a[mezo] - b[mezo];
                    }
            );
        } else {
            tomb.sort(
                    function (a, b) {
                        return b[mezo] - a[mezo];
                    }
            );

        }

    } else {
       
        if (irany) {
            tomb.sort(
                    function (a, b) {
                        return Number(a[mezo] > b[mezo]) - 0.5;
                    }
            );
        } else {
            tomb.sort(
                    function (a, b) {
                        return Number(a[mezo] < b[mezo]) - 0.5;
                    }
            );
        }

    }
    irany = !irany;
    console.log("aktuális objektum " + JSON.stringify(tomb));
    tablazatbaKiir();
}






//