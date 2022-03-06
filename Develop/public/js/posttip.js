async function newFormHandler(event) {
    event.preventDefault();
  
    const userName = document.querySelector('#userName').value;
    const tip = document.querySelector('#tip').value;
    // const votes = document.querySelector('#votes').value;
  
    const response = await fetch(`/api/tip`, {
      method: 'POST',
      body: JSON.stringify({
        userName,
        tip,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add tip');
    }
  }
  
  document
    .querySelector('.new-tip-form')
    .addEventListener('submit', newFormHandler);
  