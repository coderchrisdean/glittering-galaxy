const form = document.querySelector('#login-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch('/login', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // redirect to dashboard on login
      window.location.href = '/dashboard';
    } else {
      const error = await response.text();
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
});