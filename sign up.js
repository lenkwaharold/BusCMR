function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const switchToSignup = document.getElementById('switch-to-signup');
  const switchToSignin = document.getElementById('switch-to-signin');
  const signupCard = document.getElementById('signup-card');
  const signinCard = document.getElementById('signin-card');

  if (switchToSignup && switchToSignin) {
    switchToSignup.addEventListener('click', (e) => {
      e.preventDefault();
      signinCard.style.display = 'none';
      signupCard.style.display = 'block';
    });

    switchToSignin.addEventListener('click', (e) => {
      e.preventDefault();
      signupCard.style.display = 'none';
      signinCard.style.display = 'block';
    });
  }

  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Account successfully created! Redirecting to home...');
      window.location.href = 'home.html';
    });
  }

  const signinForm = document.getElementById('signin-form');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Signed in successfully!');
      window.location.href = 'home.html';
    });
  }
});