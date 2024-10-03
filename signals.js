document.getElementById('signalsForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const symbol = document.getElementById('symbol').value;
    const timeframe = document.getElementById('timeframe').value;
    
    const token = localStorage.getItem('token');

    try {
        const response = await fetch('/api/signals/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify({ symbol, timeframe })
        });

        const data = await response.json();

        if (response.ok) {
            const signalResultsDiv = document.getElementById('signalResults');
            signalResultsDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        } else {
            alert('Failed to generate signal.');
        }
    } catch (err) {
        console.error('Error generating signal', err);
    }
});

document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
});
