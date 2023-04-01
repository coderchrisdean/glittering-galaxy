const form = document.querySelector('form');
const textfield = document.querySelector('input[name=user]');

const loginButton = document.querySelector('button[type="submit"]');
loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (textfield.value != "") {
    document.querySelector("#output").classList.add("alert", "alert-success", "animated", "fadeInUp");
    document.querySelector("#output").innerHTML = "Welcome back " + "<span style='text-transform:uppercase'>" + textfield.value + "</span>";
    document.querySelector("#output").classList.remove('alert-danger');
    document.querySelectorAll('input').forEach(input => {
      input.style.height = "0";
      input.style.padding = "0";
      input.style.margin = "0";
      input.style.opacity = "0";
    });

    //change button text 
    loginButton.innerHTML = "continue";
    loginButton.classList.remove("btn-info");
    loginButton.classList.add("btn-default");
    loginButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('input').forEach(input => {
        input.style.height = "auto";
        input.style.padding = "10px";
        input.style.opacity = "1";
        input.value = "";
      });
    });

    //show avatar
    const avatar = document.querySelector('.avatar');
    avatar.style.backgroundImage = "url('http://api.randomuser.me/0.3.2/portraits/women/35.jpg')";
  } else {
    document.querySelector("#output").classList.remove('alert-success');
    document.querySelector("#output").classList.add("alert", "alert-danger", "animated", "fadeInUp");
    document.querySelector("#output").innerHTML = "sorry enter a username ";
  }
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('input[name="user"]').value.trim();
  const password = document.querySelector('input[type="password"]').value.trim();

  if (email && password) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // redirect to profile on login
        window.location.href = '/profile';
      } else {
        alert('Failed to log in.');
        // redirect to login page
        window.location.href = '/login';
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('Please provide email and password.');
  }
});
