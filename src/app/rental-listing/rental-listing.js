class RentalProperty {
    id; //number
    location; //string
    description; //string
    squareFeet; //number
    numRooms; //number
    petsAllowed; //boolean
    smokingAllowed; //boolean
    displayImagePath; //string

    constructor(id, location, description, squareFeet, numRooms, petsAllowed, smokingAllowed, displayImagePath) {
        this.id = id;
        this.location = location;
        this.description = description;
        this.squareFeet = squareFeet;
        this.numRooms = numRooms;
        this.petsAllowed = petsAllowed;
        this.smokingAllowed = smokingAllowed;
        this.displayImagePath = displayImagePath;
    }
}

var rentalArr = [];

function onInit() {
    var rental1 = new RentalProperty(1, '1553 Silvers Rd', 'Suburban home in a quiet neighborhood', 3000, 6, true, false, "../../../assets/images/stock1.jpg")
    rentalArr.push(rental1)
    console.log(rentalArr)
    this.displayListings();
}

function displayListings() {
    var rentHeader = document.getElementById('rent-header');
    for(var r of rentalArr) {
        rentHeader.insertAdjacentHTML("afterend", `
        <div class="col-3">
        <div class="card">
        <img id="image${r.id}" src""= class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${r.location}</h5>
    <p class="card-text">${r.description}</p>
    
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" disabled>
    <label class="form-check-label">
      Pets?
    </label>
    <br/>
    <input class="form-check-input" type="checkbox" value="" disabled>
    <label class="form-check-label">
      Smoking?
    </label>
  </div>


  </div>
</div>
</div>
`)
document.getElementById(`image${r.id}`).src = r.displayImagePath;
// dynamically set check boxes baseed on object bools
    }
}
