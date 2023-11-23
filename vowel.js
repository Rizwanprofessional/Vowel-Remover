//Removal Work
        function nani() {
            let input = document.getElementById("input").value;
            let vowelremover = input.replace(/[aeiouAEIOU]/g, ''); 
            document.getElementById("result").textContent = `Result: ${vowelremover}`;
            let vowelremover2 = input.replace(/[bBCcDdfFGgHhJjKklLmMnNPpQqRrSsTtVvWwXxYyZz]/g, ''); 
            document.getElementById("result2").textContent = `Vowels: ${vowelremover2}`;
       } 
       //Page Themes
       function DarkMode() {
        //body
        document.querySelector(".body").classList.remove("light");
        document.querySelector(".body").classList.add("dark");
        //container
        document.querySelector("#row").classList.remove("rowlight");
        document.querySelector("#row").classList.add("rowdark");
        //h1
        document.querySelector("#h1").classList.remove("h1light");
        document.querySelector("#h1").classList.add("h1dark");
        //input
        document.querySelector("#input").classList.remove("inputlight");
        document.querySelector("#input").classList.add("inputdark");
        //btn
        document.querySelector("#btn").classList.remove("btnlight");
        document.querySelector("#btn").classList.add("btndark");
        //result
        document.querySelector("#result").classList.remove("resultlight");
        document.querySelector("#result").classList.add("resultdark");
        //theme btn
        document.querySelector("#themebtn1").classList.remove("lightcolor");
        document.querySelector("#themebtn2").classList.remove("lighttheme");
        document.querySelector("#themebtn1").classList.add("darkcolor");
        document.querySelector("#themebtn2").classList.add("darktheme");
    }
    function LightMode() {
        //body
        document.querySelector(".body").classList.add("light");
        document.querySelector(".body").classList.remove("dark");
        //container
        document.querySelector("#row").classList.add("rowlight");
        document.querySelector("#row").classList.remove("rowdark");
        //h1
        document.querySelector("#h1").classList.add("h1light");
        document.querySelector("#h1").classList.remove("h1dark");
        //input
        document.querySelector("#input").classList.remove("inputdark");
        document.querySelector("#input").classList.add("inputlight");
        //btn
        document.querySelector("#btn").classList.remove("btndark");
        document.querySelector("#btn").classList.add("btnlight");
        //result
        document.querySelector("#result").classList.remove("resultdark");
        document.querySelector("#result").classList.add("resultlight");
        //theme btn
        document.querySelector("#themebtn1").classList.remove("darkcolor");
        document.querySelector("#themebtn2").classList.remove("darktheme");
        document.querySelector("#themebtn1").classList.add("lightcolor");
        document.querySelector("#themebtn2").classList.add("lighttheme");
       }