const fs = require('fs');
let content = fs.readFileSync('src/components/cart/CartDrawer.astro', 'utf8');

// Replace the first lines of the script to introduce formatPrice
content = content.replace(
  /const isEs = lang === 'es';/g,
  "const isEs = lang === 'es';\n\n    const formatPrice = (amount) => new Intl.NumberFormat(isEs ? 'es-ES' : 'en-IE', { style: 'currency', currency: 'EUR' }).format(amount);"
);

// cartTotal.subscribe block
content = content.replace(
  /\$\{total\.toFixed\(2\)\}[^]*/g,
  "\"
);
content = content.replace(
  /Faltan \$\{remaining\.toFixed\(2\)\}[^\]*\/g,
  "FALTAN \ PARA ENVÍO GRATUITO"
);
content = content.replace(
  /Add \$\{remaining\.toFixed\(2\)\}[^\]*\/g,
  "ADD \ FOR FREE SHIPPING"
);
content = content.replace(
  /"Gastos de env.*?calculados en el siguiente paso\."/g,
  '"IVA incluido. Envío estándar calculado en el checkout."'
);
content = content.replace(
  /"Shipping costs calculated at checkout\."/g,
  '"VAT included. Shipping calculated at checkout."'
);
content = content.replace(
  /.*?Tienes env.*?o gratuito asegurado!/,
  "¡TIENES ENVÍO GRATUITO ASEGURADO!"
);
content = content.replace(
  /You have secured free shipping!/,
  "YOU HAVE SECURED FREE SHIPPING!"
);
content = content.replace(
  /"Env.*?o est.*?ndar gratuito aplicado\."/,
  '"IVA incluido. Envío estándar gratuito aplicado."'
);
content = content.replace(
  /"Free standard shipping applied\."/,
  '"VAT included. Free standard shipping applied."'
);

// cartItems.subscribe block
content = content.replace(
  /\$\{\(item\.price \* item\.quantity\)\.toFixed\(2\)\}.*?<\/span>/g,
  "\</span>"
);
content = content.replace(
  /\(isEs \? 'Opci.*?n Clip' : 'Clip Option'\)/g,
  "(isEs ? 'Opción Clip' : 'Clip Option')"
);

// WhatsApp block
content = content.replace(
  /const total = items\.reduce\(\(sum, i\) => sum \+ i\.price \* i\.quantity, 0\)\.toFixed\(2\);/g,
  "const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);"
);
content = content.replace(
  /\$\{i\.price\.toFixed\(2\)\}[^\)]*\)/g,
  "\)"
);

content = content.replace(
  /.*?Hola Ramia Studio! Quiero formalizar el siguiente encargo:\\n\$\{orderList\}\\nTotal estimado: \$\{total\}.*?\\n.*?Ten.*?is disponibilidad para proceder con el env.*?o\?/g,
  "¡Hola Ramia Studio! Quiero formalizar el siguiente encargo:\\n\\\nTotal estimado: \\\n¿Tenéis disponibilidad para proceder con el envío?"
);

content = content.replace(
  /Hello Ramia Studio! I'd like to place the following order:\\n\$\{orderList\}\\nEstimated total: \$\{total\}.*?\\nDo you have availability to proceed with shipping\?/g,
  "Hello Ramia Studio! I'd like to place the following order:\\n\\\nEstimated total: \\\nDo you have availability to proceed with shipping?"
);

fs.writeFileSync('src/components/cart/CartDrawer.astro', content, 'utf8');
