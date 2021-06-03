// let prenom = 'gael';
// let regExp = new RegExp('b');

// console.log(regExp.test(prenom));
//ou
// console.log(/a/.test(prenom));

let form = document.querySelector('#loginForm');
// console.log(form.email);

//écouter la modification de l' email
form.email.addEventListener('change', function () {
  validEmail(this);
});

//écouter la modification du password
form.password.addEventListener('change', function () {
  validPassword(this);
});

//écouter la soumission du formulaire
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validEmail(form.email) && validPassword(form.password)) {
    form.submit();
  }
});
/*******************Validation email**************************/

const validEmail = function (inputEmail) {
  //Création de la reg exp pour la validation email
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
    'g'
  );
  //On teste l' expréssion régulière

  let testEmail = emailRegExp.test(inputEmail.value);
  //récupération de la balise small
  let small = inputEmail.nextElementSibling;
  //   console.log(testEmail);
  if (testEmail) {
    small.innerHTML = 'Adresse valide';
    small.classList.remove('text-danger');
    small.classList.add('text-success');
    return true;
  } else {
    small.innerHTML = 'adresse invalide';
    small.classList.remove('text-success');
    small.classList.add('text-danger');
    return false;
  }
};
/*******************Validation password**************************/

const validPassword = function (inputPassword) {
  //Création de la reg exp pour la validation email
  let msg;
  let valid = false;
  //au moins 3 caractère dans le mot de passe
  if (inputPassword.value.length < 3) {
    msg = 'Le mot de passe doit contenir au moins 3 charactères';
  }
  //au moins 1 maj
  else if (!/[A-Z]/.test(inputPassword.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 majuscule';
  }
  //au moins 1 min
  else if (!/[a-z]/.test(inputPassword.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 minuscule';
  }
  //au moins 1 chiffre
  else if (!/[0-9]/.test(inputPassword.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 chiffre';
    //MDP valide
  } else {
    msg = 'Mot de passe valide';
    valid = true;
  }
  //   console.log(msg);
  let small = inputPassword.nextElementSibling;
  //   console.log(testEmail);
  if (valid) {
    small.innerHTML = 'Mot de passe valide';
    small.classList.remove('text-danger');
    small.classList.add('text-success');
    return true;
  } else {
    small.innerHTML = msg;
    small.classList.remove('text-success');
    small.classList.add('text-danger');
    return false;
  }
};
