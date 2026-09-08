// Zero-Touch Build-Time Translation Engine for Ramia Studio

export function autoTranslateTitle(titleEs: string): string {
  if (!titleEs) return titleEs;
  let t = titleEs;
  
  const prefixes = [
    { regex: /^Pendientes\s+/i, suffix: ' Earrings' },
    { regex: /^Colgante\s+/i, suffix: ' Pendant' },
    { regex: /^Collar\s+/i, suffix: ' Necklace' },
    { regex: /^Anillo\s+/i, suffix: ' Ring' },
    { regex: /^Pack\s+/i, suffix: ' Pack' },
    { regex: /^Set\s+/i, suffix: ' Set' },
    { regex: /^Charm\s+/i, suffix: ' Charm' }
  ];

  for (const p of prefixes) {
    if (p.regex.test(t)) {
      return t.replace(p.regex, '').trim() + p.suffix;
    }
  }

  return t; // Fallback
}

export function autoTranslateFinish(finishEs: string): string {
  if (!finishEs) return finishEs;
  
  const dict: Record<string, string> = {
    'espejo plata': 'Silver mirror',
    'espejo oro': 'Gold mirror',
    'ámbar translúcido': 'Translucent amber',
    'ambar translucido': 'Translucent amber',
    'metacrilato lila pulido': 'Polished lilac acrylic',
    'glitter': 'Glitter',
    'nácar': 'Mother of pearl',
    'carey': 'Tortoiseshell'
  };
  
  const lower = finishEs.toLowerCase().trim();
  if (dict[lower]) return dict[lower];
  
  // Heuristic fallbacks
  let out = finishEs.toLowerCase()
    .replace(/metacrilato/g, 'acrylic')
    .replace(/plata/g, 'silver')
    .replace(/oro/g, 'gold')
    .replace(/espejo/g, 'mirror')
    .replace(/pulido/g, 'polished')
    .replace(/lila/g, 'lilac')
    .replace(/rojo/g, 'red')
    .replace(/azul/g, 'blue')
    .replace(/verde/g, 'green')
    .replace(/negro/g, 'black')
    .replace(/blanco/g, 'white')
    .replace(/transparente/g, 'transparent')
    .replace(/translúcido/g, 'translucent')
    .replace(/translucido/g, 'translucent');
    
  return out.charAt(0).toUpperCase() + out.slice(1);
}

export function autoTranslateDescription(descEs: string): string {
  if (!descEs) return descEs;
  
  // Poetic contemporary jewelry replacements
  let out = descEs
    .replace(/metacrilato/gi, 'acrylic')
    .replace(/ligereza extrema/gi, 'extreme lightness')
    .replace(/ligero/gi, 'lightweight')
    .replace(/hecho a mano/gi, 'handcrafted')
    .replace(/artesanal/gi, 'artisanal')
    .replace(/diseño/gi, 'design')
    .replace(/contemporáneo/gi, 'contemporary')
    .replace(/contemporánea/gi, 'contemporary')
    .replace(/joyería de autor/gi, 'designer jewelry')
    .replace(/joyería/gi, 'jewelry')
    .replace(/piezas/gi, 'pieces')
    .replace(/pieza/gi, 'piece')
    .replace(/juego de luz/gi, 'play of light')
    .replace(/juegos de luces/gi, 'plays of light')
    .replace(/luces/gi, 'lights')
    .replace(/sombras/gi, 'shadows')
    .replace(/sofisticad[oa]/gi, 'sophisticated')
    .replace(/espejo/gi, 'mirror')
    .replace(/brillo/gi, 'shine')
    .replace(/acabado/gi, 'finish')
    .replace(/pendientes/gi, 'earrings');
    
  return out;
}
