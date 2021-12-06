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
  var rental1 = new RentalProperty(1, '1553 Silvers Rd', 3, true, false);
  var rental2 = new RentalProperty(2, '3288 Ritter Street', 4, true, true);
  var rental3 = new RentalProperty(3, '3275 Lonely Oak Drive', 5, false, false);
  var rental4 = new RentalProperty(4, '4442 Hickory Street', 1, false, false);
  var rental5 = new RentalProperty(5, '2396 Broad Street', 2, false, true);
  var rental6 = new RentalProperty(6, '2078 Retreat Avenue', 3, true, false);
  rentalArr.push(rental1);
  rentalArr.push(rental2);
  rentalArr.push(rental3);
  rentalArr.push(rental4);
  rentalArr.push(rental5);
  rentalArr.push(rental6);
  this.displayListings();
}

function displayListings() {
  var listingContainer = document.getElementById('listing-container');
  for (var r of rentalArr) {
    var tempDiv = document.createElement("div");
    tempDiv.classList.add("col-lg-4");
    tempDiv.classList.add("col-12");
    tempDiv.classList.add("p-3");
    tempDiv.innerHTML =
      `
        <div class="card">
        <img id="image${r.id}" src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${r.location}</h5>
    <p class="card-text">Bedrooms: ${r.numRooms}</p>
    <div class="form-check">
    <input id="petCheck${r.id}" class="form-check-input" type="checkbox" value="" disabled>
    <label class="form-check-label">
      Pets?
    </label>
    <br/>
    <input id="smokeCheck${r.id}" class="form-check-input" type="checkbox" value="" disabled>
    <label class="form-check-label">
      Smoking?
    </label>
  </div>
  <div class="pt-3 row justify-content-around">
  <button type="button" class="col-5 px-0 btn btn-secondary" data-toggle="modal" data-target="#modal${r.id}">
  View Gallery
  </button>
  <button type="button" class="col-5 px-0 btn btn-primary">
  <a href="" style="color: #ffffff; text-decoration: none">
  Book Property
  </a>
  </button>
  </div>
  </div>
  
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
      <div class="" id="galleryAccordion">
      <div class="card">
        <div class="card-header" id="headingFront${r.id}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFront${r.id}" aria-expanded="true" aria-controls="collapseFront${r.id}">
              Front
            </button>
          </h2>
        </div>
    
        <div id="collapseFront${r.id}" class="collapse show" aria-labelledby="headingFront${r.id}" data-parent="#galleryAccordion">
          <div class="card-body">
          <img class="img-fluid" src="../../../assets/images/house${r.id}/front.jpg" />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingLivingRoom${r.id}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseLivingRoom${r.id}" aria-expanded="false" aria-controls="collapseLivingRoom${r.id}">
              Living Room
            </button>
          </h2>
        </div>
        <div id="collapseLivingRoom${r.id}" class="collapse" aria-labelledby="headingLivingRoom${r.id}" data-parent="#galleryAccordion">
          <div class="card-body">
          <img class="img-fluid" src="../../../assets/images/house${r.id}/living-room.jpg" />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingBedroom${r.id}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseBedroom${r.id}" aria-expanded="false" aria-controls="collapseBedroom${r.id}">
              Master Bedroom
            </button>
          </h2>
        </div>
        <div id="collapseBedroom${r.id}" class="collapse" aria-labelledby="headingBedroom${r.id}" data-parent="#galleryAccordion">
          <div class="card-body">
          <img class="img-fluid" src="../../../assets/images/house${r.id}/bedroom.jpg" />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingKitchen${r.id}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseKitchen${r.id}" aria-expanded="false" aria-controls="collapseKitchen${r.id}">
              Kitchen
            </button>
          </h2>
        </div>
        <div id="collapseKitchen${r.id}" class="collapse" aria-labelledby="headingKitchen${r.id}" data-parent="#galleryAccordion">
          <div class="card-body">
          <img class="img-fluid" src="../../../assets/images/house${r.id}/kitchen.jpg" />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingBathroom${r.id}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseBathroom${r.id}" aria-expanded="false" aria-controls="collapseBathroom${r.id}">
              Bathroom
            </button>
          </h2>
        </div>
        <div id="collapseBathroom${r.id}" class="collapse" aria-labelledby="headingBathroom${r.id}" data-parent="#galleryAccordion">
          <div class="card-body">
          <img class="img-fluid" src="../../../assets/images/house${r.id}/bathroom.jpg" />
          </div>
        </div>
      </div>
    </div>
      </div>
      <div class="modal-footer">
      <button type="button" class="col-5 px-0 btn btn-primary">
      <a href="" style="color: #ffffff; text-decoration: none">
      Book Property
      </a>
      </button>      </div>
    </div>
  </div>
</div>
</div>
`
    listingContainer.appendChild(tempDiv);
    document.getElementById(`image${r.id}`).src = `../../../assets/images/house${r.id}/front.jpg`;
    document.getElementById(`petCheck${r.id}`).checked = r.petsAllowed;
    document.getElementById(`smokeCheck${r.id}`).checked = r.smokingAllowed;
    // dynamically set check boxes baseed on object bools
  }
}

