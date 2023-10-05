const API_BASE_URL = 'https://be-balikpapan-29-production.up.railway.app';
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const target = e.target;
  const name = target.querySelector('#name').value;
  const from = target.querySelector('#email').value;
  const subject = target.querySelector('#subject').value;
  const message = target.querySelector('#message').value;

  // Validasi alamat email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(from)) {
    alert('Invalid email address. Please enter a valid email.');
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/email`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        from,
        subject,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const data = await response.json(); // Menambahkan ini untuk mengambil respons JSON dari server
      alert(data.message); // Menampilkan pesan dari server
      contactForm.reset();
    } else {
      const errorData = await response.json(); // Menambahkan ini untuk mengambil pesan kesalahan dari server
      alert(`Error: ${errorData.message}`);
    }
  } catch (error) {
    console.error(error);
    alert('Something went wrong with the request.');
  }
});













































