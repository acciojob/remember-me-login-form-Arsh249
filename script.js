//your JS code here. If required.
if (localStorage.getItem('username') && localStorage.getItem('password')) {
    var existingBtn = document.createElement('button');
    existingBtn.id = 'existing';
    existingBtn.textContent = 'Login as existing user';
    document.getElementById('loginForm').appendChild(existingBtn);
  }

  // Handle form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var remember = document.getElementById('remember').checked;

    if (remember) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert('Logged in as ' + username);

    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });

  // Handle existing user login
  document.getElementById('loginForm').addEventListener('click', function(event) {
    if (event.target.id === 'existing') {
      var savedUsername = localStorage.getItem('username');
      alert('Logged in as ' + savedUsername);
    }
  });
