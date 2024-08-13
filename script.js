const carlist = document.getElementById("car-list")
const filterBtn = document.getElementById("filter-btn")

filterBtn.addEventListener("click", ()=> {
    const totalCars = document.getElementById("total-cars")
    const filterId = document.getElementById("filter-id")

    fetchCars(totalCars, filterId);
})

async function fetchCars (totalCars, filterId) {
    const response = await fetch(
        "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    );
    const data =await response.json();
    const filteredCars= data.filter((car) => car.codigo === filterId);
    displayCars(filteredCars.slice(0, totalCars));
    console.log(data);
    

}

function displayCars(cars){
    carlist.innerHTML ="";
    cars.forEach((car) => {
        const carDiv =document.createElement("div");
        carDiv.textContent = `Name: ${car.nome}, Code: ${car.codigo}`;
     carlist.appendChild(carDiv);
    });
}



