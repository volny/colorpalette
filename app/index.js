import './style.scss'
import Clipboard from 'clipboard'

const clipboard = new Clipboard('.color')

clipboard.on('success', (event) => {
    const confirmation = document.createElement('div')
    confirmation.className = 'fullscreen'
    confirmation.innerHTML = `<div class="inner animated tada"><p class="message" style="color: ${event.text};">copied</p></div>`
    document.body.appendChild(confirmation)
    window.setTimeout(() => document.body.removeChild(confirmation), 700)
    event.clearSelection();
});
 
clipboard.on('error', (event) => {
    console.error('Action:', event.action);
    console.error('Trigger:', event.trigger);
});

