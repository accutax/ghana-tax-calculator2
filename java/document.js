document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculateBtn');
  const resetBtn = document.getElementById('resetBtn');
  const showBreakdownBtn = document.getElementById('showBreakdownBtn');
  const resultsDiv = document.getElementById('results');

  calculateBtn.addEventListener('click', function() {
      const basicIncome = parseFloat(document.getElementById('basicIncome').value) || 0;
      const allowances = parseFloat(document.getElementById('allowances').value) || 0;
      const taxRelief = parseFloat(document.getElementById('taxRelief').value) || 0;

      // Add your tax calculation logic here
      const totalIncome = basicIncome + allowances;
      const taxableIncome = totalIncome - taxRelief;

      // Display results
      resultsDiv.style.display = 'block';
      resultsDiv.innerHTML = `
          <h3>Calculation Results:</h3>
          <p>Total Income: GHC ${totalIncome.toFixed(2)}</p>
          <p>Taxable Income: GHC ${taxableIncome.toFixed(2)}</p>
      `;
  });

  resetBtn.addEventListener('click', function() {
      resultsDiv.style.display = 'none';
  });

  showBreakdownBtn.addEventListener('click', function() {
      // Add tax breakdown logic here
      resultsDiv.style.display = 'block';
      resultsDiv.innerHTML += '<h3>Tax Breakdown:</h3><p>Detailed breakdown will appear here...</p>';
  });
});