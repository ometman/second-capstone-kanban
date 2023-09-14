// popup interface
// create item image container
export const resItemImage = document.createElement('img');
resItemImage.className = 'item-image';
resItemImage.alt = 'image of the selected item';

export const itemIdContainer = document.createElement('div');
itemIdContainer.className = 'close-btn-container';

export const closeBtn = document.createElement('p');
closeBtn.className = 'close-btn-container';

// create Item title
export const itemTitle = document.createElement('h2');
itemTitle.className = 'item-data-heading';

// create Item details
export const itemDetails = document.createElement('div');
itemDetails.className = 'item-details-container';

// create reservation title
export const popupTitle = document.createElement('h2');
popupTitle.className = 'item-data-heading';

// create reservation list container
export const resListContainer = document.createElement('ul');
resListContainer.className = 'reserve-list-container';

// create reservation form title
export const resFormInstruction = document.createElement('h3');
resFormInstruction.className = 'reserve-form-title';
resFormInstruction.innerText = 'Add a reservation';

// create username input
export const userInput = document.createElement('input');
userInput.className = 'username';
userInput.id = 'username';
userInput.type = 'text';
// userInput.value = '';
userInput.placeholder = 'Your name';
userInput.maxLength = '20';
userInput.required = true;

// create start date input
export const startDate = document.createElement('input');
startDate.className = 'startdate';
startDate.id = 'startdate';
startDate.type = 'date';
// startDate.value = '';
startDate.required = true;

// create end date input
export const endDate = document.createElement('input');
endDate.className = 'enddate';
endDate.id = 'enddate';
endDate.type = 'date';
// endDate.value = '';
endDate.required = true;

// create submit btn
export const submitBtn = document.createElement('button');
submitBtn.className = 'submit';
submitBtn.id = 'submit';
submitBtn.type = 'submit';
submitBtn.innerText = 'Reserve';

// create reservation form
export const resForm = document.createElement('form');
resForm.className = 'reserve-form';
resForm.appendChild(userInput);
resForm.appendChild(startDate);
resForm.appendChild(endDate);
resForm.appendChild(submitBtn);

// add modal elements
export const itemModal = document.querySelector('.reserve-modal');
itemModal.appendChild(closeBtn);
itemModal.appendChild(resItemImage);
itemModal.appendChild(itemTitle);
itemModal.appendChild(itemDetails);
itemModal.appendChild(popupTitle);
itemModal.appendChild(resListContainer);
itemModal.appendChild(resFormInstruction);
itemModal.appendChild(resForm);
