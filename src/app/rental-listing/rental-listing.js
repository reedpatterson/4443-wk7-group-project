class RentalProperty {
  id; //number
  location; //string
  numRooms; //number
  petsAllowed; //boolean
  smokingAllowed; //boolean

  constructor(id, location, numRooms, petsAllowed, smokingAllowed) {
    this.id = id;
    this.location = location;
    this.numRooms = numRooms;
    this.petsAllowed = petsAllowed;
    this.smokingAllowed = smokingAllowed;
  }
}

var rentalArr = [];

function onInit() {
  var rental1 = new RentalProperty(1, '1553 Silvers Rd', 'Suburban home in a quiet neighborhood', 6, true, false)
  rentalArr.push(rental1)
  this.displayListings();
}

function displayListings() {
  var listingContainer = document.getElementById('listing-container');
  for (var r of rentalArr) {
    var tempDiv = document.createElement("div");
    tempDiv.classList.add("col-3");
    tempDiv.classList.add("p-3");
    tempDiv.innerHTML =
      `
        <div class="card">
        <img id="image${r.id}" src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${r.location}</h5>
    
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
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal${r.id}">
  View Property Details
</button>

<div class="modal fade" id="modal${r.id}" tabindex="-1" aria-labelledby="modal${r.id}Label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal${r.id}Label">${r.location}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
`
    listingContainer.appendChild(tempDiv);
    document.getElementById(`image${r.id}`).src = `../../../assets/images/house${r.id}/front.jpg`;
    // dynamically set check boxes baseed on object bools
  }
}

  function goToDetails(id) {
    console.log
  }
