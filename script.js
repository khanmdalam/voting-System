document.getElementById('votingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
  
    const voterName = document.getElementById('voterName').value;
    const candidate = document.querySelector('input[name="candidate"]:checked')?.value;
  
    if (voterName && candidate) {
      // Simulate vote submission
      console.log(`Voter: ${voterName}, Voted for: ${candidate}`);
  
      // Show Thank You Modal
      const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
      thankYouModal.show();
  
      // Reset the form
      this.reset();
    } else {
      alert('Please fill out all fields!');
    }
  });
  