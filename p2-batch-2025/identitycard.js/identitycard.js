// Create ID Card Container
const card = document.createElement('div');
card.style.width = '300px';
card.style.border = '1px solid #000';
card.style.borderRadius = '8px';
card.style.padding = '16px';
card.style.fontFamily = 'Arial, sans-serif';
card.style.background = '#f9f9f9';
card.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
card.style.margin = '20px auto';
card.style.textAlign = 'center';

// Add photo
const photo = document.createElement('img');
photo.src = 'image3.png.jpg'; // Placeholder image
photo.alt = 'Profile Photo';
photo.style.borderRadius = '50%';  
photo.style.width = '100px';
photo.style.height = '100px';
photo.style.objectFit = 'cover';
photo.style.marginBottom = '10px';
card.appendChild(photo);

// Add Name
const name = document.createElement('h2');
name.innerText = 'Minal Suryawanshi';
name.style.margin = '10px 0 5px 0';
card.appendChild(name);

// Add other details
const id = document.createElement('p');
id.innerText = 'ID: 123456789';
card.appendChild(id);

const role = document.createElement('p');
role.innerText = 'student';
card.appendChild(role);

const company = document.createElement('p');
company.innerText = 'College : MET BKC Adgoan,Nashik';
card.appendChild(company);

// Add to body
document.body.appendChild(card);
