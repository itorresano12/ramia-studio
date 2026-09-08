const fs = require('fs');

function fixEncoding(text) {
  return text
    .replace(/diseo/g, 'diseño')
    .replace(/joyera/g, 'joyería')
    .replace(/Espaa/g, 'España')
    .replace(/diseadas/g, 'diseñadas')
    .replace(/Gua/g, 'Guía')
    .replace(/Atencin/g, 'Atención')
    .replace(/Poltica/g, 'Política')
    .replace(/TǸrminos/g, 'Términos')
    .replace(/Trminos/g, 'Términos')
    .replace(/Ivn/g, 'Iván')
    .replace(/Ivǭn/g, 'Iván')
    .replace(/envo/g, 'envío')
    .replace(//g, '€')
    .replace(//g, '©');
}

let footer = fs.readFileSync('src/components/layout/Footer.astro', 'utf8');
footer = fixEncoding(footer);
footer = footer.replace(/href="#"(.*?)aria-label="Instagram"/g, 'href="https://instagram.com" target="_blank" rel="noopener noreferrer"-label="Instagram"');
footer = footer.replace(/href="#"(.*?)aria-label="TikTok"/g, 'href="https://tiktok.com" target="_blank" rel="noopener noreferrer"-label="TikTok"');
fs.writeFileSync('src/components/layout/Footer.astro', footer, 'utf8');

let drawer = fs.readFileSync('src/components/cart/CartDrawer.astro', 'utf8');
drawer = fixEncoding(drawer);
drawer = drawer.replace(
  /<aside id="cart-drawer"[\s\S]*?aria-label=/g,
  '<aside id="cart-drawer"\n         class="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 translate-x-full transition-transform duration-500 ease-out flex flex-col h-[100dvh] max-h-[100dvh] overflow-hidden"\n         aria-label='
);
drawer = drawer.replace(
  /<div class="flex-1 overflow-y-auto.*?id="cart-items-container">/g,
  '<div class="flex-1 overflow-y-auto p-4 min-h-0 overscroll-contain" id="cart-items-container">'
);
drawer = drawer.replace(
  /<footer id="cart-footer".*?>/g,
  '<footer id="cart-footer" class="shrink-0 bg-white border-t border-neutral-100 p-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">'
);
fs.writeFileSync('src/components/cart/CartDrawer.astro', drawer, 'utf8');

let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
layout = fixEncoding(layout);
if (!layout.includes('<meta charset="UTF-8" />')) {
  layout = layout.replace('<head>', '<head>\n    <meta charset="UTF-8" />');
}
const newMailto = 
      function setupMailtoIntercept() {
        const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
        
        function handleMailtoClick(e) {
          e.preventDefault();
          e.stopPropagation();

          const link = e.currentTarget;
          const rawHref = link.getAttribute('href') || '';
          const email = rawHref.replace(/^mailto:/i, '').split('?')[0].trim();
          if (!email) return;

          const isEs = document.documentElement.lang === 'es';
          const successMsg = isEs ? '¡CORREO COPIADO!' : 'COPIED TO CLIPBOARD';

          function showToast() {
            let toast = document.getElementById('ramia-toast');
            if (toast) toast.remove();
            
            toast = document.createElement('div');
            toast.id = 'ramia-toast';
            toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[11px] tracking-widest uppercase px-5 py-2.5 rounded-full shadow-2xl z-[9999] transition-all duration-300 opacity-0 translate-y-4';
            toast.textContent = successMsg;
            document.body.appendChild(toast);

            void toast.offsetWidth;
            toast.classList.remove('opacity-0', 'translate-y-4');
            toast.classList.add('opacity-100', 'translate-y-0');

            setTimeout(() => {
              toast.classList.remove('opacity-100', 'translate-y-0');
              toast.classList.add('opacity-0', 'translate-y-4');
              setTimeout(() => toast.remove(), 300);
            }, 2500);
          }

          function fallbackCopy() {
            try {
              const textArea = document.createElement('textarea');
              textArea.value = email;
              textArea.style.top = '0';
              textArea.style.left = '0';
              textArea.style.position = 'fixed';
              textArea.style.opacity = '0';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              const successful = document.execCommand('copy');
              document.body.removeChild(textArea);
              
              if (successful) {
                showToast();
              } else {
                window.location.href = rawHref;
              }
            } catch (err) {
              window.location.href = rawHref;
            }
          }

          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(email)
              .then(showToast)
              .catch(fallbackCopy);
          } else {
            fallbackCopy();
          }
        }

        mailtoLinks.forEach((link) => {
          if (link.dataset.hasMailtoListener) return;
          link.dataset.hasMailtoListener = 'true';
          
          link.addEventListener('click', handleMailtoClick);
          link.addEventListener('touchend', (e) => {
            e.preventDefault();
            handleMailtoClick(e);
          }, { passive: false });
        });
      }
;

layout = layout.replace(/function setupMailtoIntercept\(\) \{[\s\S]*?\}\s*\/\/\s*Soporte/g, newMailto.trim() + '\n\n        // Soporte');
fs.writeFileSync('src/layouts/Layout.astro', layout, 'utf8');
console.log('Done');
