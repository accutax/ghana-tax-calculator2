function validateInputs() {
  const basicIncome = document.getElementById('basicIncome').value;
  const allowances = document.getElementById('allowances').value;
  const taxRelief = document.getElementById('taxRelief').value;

  if (basicIncome === '' || isNaN(basicIncome) || basicIncome < 0) {
      showError('basicIncome', 'Please enter a valid basic income amount');
      return false;
  }

  if (allowances === '' || isNaN(allowances) || allowances < 0) {
      showError('allowances', 'Please enter a valid allowances amount');
      return false;
  }

  if (taxRelief === '' || isNaN(taxRelief) || taxRelief < 0) {
      showError('taxRelief', 'Please enter a valid tax relief amount');
      return false;
  }

  return true;
}