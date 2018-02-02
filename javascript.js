        document.addEventListener("DOMContentLoaded", loadJson);


        let menuer;
        async function loadJson() {
            let menuListe = await fetch("menu.json");
            menuer = await menuListe.json();
            console.log(menuer);
            // find og filtrer retter efter kategori og gem dem i nyt array
            let forretter = menuer.filter(ret => ret.kategori == "forretter");
            let hovedretter = menuer.filter(ret => ret.kategori == "hovedretter");
            let desserter = menuer.filter(ret => ret.kategori == "desserter");
            let drikkevarer = menuer.filter(ret => ret.kategori == "drikkevarer");

            document.querySelector("#filter_alle").addEventListener("click", () => {
                visMenu(menuer, "Menu")
            });
            document.querySelector("#filter_forretter").addEventListener("click", () => {
                visMenu(forretter, "Forretter")
            });
            document.querySelector("#filter_hovedretter").addEventListener("click", () => {
                visMenu(hovedretter, "Hovedretter")
            });
            document.querySelector("#filter_desserter").addEventListener("click", () => {
                visMenu(desserter, "Desserter")
            });
            document.querySelector("#filter_drikkevarer").addEventListener("click", () => {
                visMenu(drikkevarer, "Drikkevarer")
            });

            visMenu(menuer, "Menu");

        }


        function visMenu(menuer, overskrift) {
            document.querySelector("#overskrift").textContent = overskrift;
            let templateModtager = document.querySelector(".templateModtager");
            let template = document.querySelector(".menuTemplate");
            templateModtager.innerHTML = "";
            //for hver ret vis dem i DOM:
            menuer.forEach(minMenu => {
                let klon = template.cloneNode(true).content;
                klon.querySelector(".foto").src = "imgs/small/" +
                    minMenu.billede + "-sm.jpg";
                klon.querySelector(".foto").alt = "Billede af " + minMenu.navn;
                klon.querySelector(".navn").textContent = minMenu.navn
                klon.querySelector(".pris").textContent = minMenu.pris;
                klon.querySelector(".kortbeskrivelse").textContent = minMenu.kortbeskrivelse;

                templateModtager.appendChild(klon);

            })
        }
