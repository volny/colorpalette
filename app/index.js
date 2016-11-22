import './style.scss'
import Clipboard from 'clipboard'

const clipboard = new Clipboard('.color')

clipboard.on('success', (event) => {
    console.info('Action:', event.action);
    console.info('Text:', event.text);
    console.info('Trigger:', event.trigger);

    const confirmation = document.createElement('p')
    confirmation.className = 'confirmation'
    confirmation.textContent = `copied ${event.text} to clipboard`
    document.body.appendChild(confirmation)

    window.setInterval(() => document.body.removeChild(confirmation), 600)

    event.clearSelection();
});
 
clipboard.on('error', (event) => {
    console.error('Action:', event.action);
    console.error('Trigger:', event.trigger);
});

