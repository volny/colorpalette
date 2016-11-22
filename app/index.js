import './style.scss'
import Clipboard from 'clipboard'

const clipboard = new Clipboard('.color')

clipboard.on('success', (event) => {
    console.info('Action:', event.action);
    console.info('Text:', event.text);
    console.info('Trigger:', event.trigger);

    const confirmation = document.createElement('div')
    confirmation.className = 'fullscreen'
    confirmation.innerHTML = `<div class="inner animated tada"><p class="message">copied</p></div>`
    document.body.appendChild(confirmation)
    window.setInterval(() => document.body.removeChild(confirmation), 700)
    event.clearSelection();
});
 
clipboard.on('error', (event) => {
    console.error('Action:', event.action);
    console.error('Trigger:', event.trigger);
});

