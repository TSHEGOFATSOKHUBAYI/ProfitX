document.addEventListener('DOMContentLoaded', async function() {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetch('/api/dashboard', {
            headers: {
                'auth-token': token
            }
        });

        const data = await response.json();

        if (response.ok) {
            const marketDataDiv = document.getElementById('marketData');
            marketDataDiv.innerHTML = `<pre>${JSON.stringify(data.marketData, null, 2)}</pre>`;
        } else {
            alert('Failed to load dashboard data.');
        }
    } catch (err) {
        console.error('Error loading dashboard data', err);
    }
});

document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
});
