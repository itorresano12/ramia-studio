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
    'metacrilato lila pastel': 'Pastel lilac acrylic',
    'metacrilato rojo translúcido': 'Translucent red acrylic',
    'acrílico pastel satinado': 'Satin pastel acrylic',
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

export function autoTranslateDescription(descEs: string, titleEs: string = ''): string {
  if (!descEs) return descEs;
  
  // Exact translations for the specific collection
  const tLower = titleEs.toLowerCase();
  if (tLower.includes('aura hippocampus')) {
    return "Marine-inspired organic silhouette in hand-polished acrylic. Lilac tones with soft light reflections and an ultralight structure mounted on hypoallergenic fittings.";
  }
  if (tLower.includes('nova star')) {
    return "Celestial geometry with high-definition laser cutting. Eye-catching statement piece designed to bring immediate luminosity to the face with zero weight on the lobe.";
  }
  if (tLower.includes('bruma pastel')) {
    return "Powdery hues and clean architectural lines. Handcrafted from optical-grade acrylic with a lightweight assembly engineered for comfortable, all-day wear.";
  }
  if (tLower.includes('carmen carmín') || tLower.includes('carmen carmin')) {
    return "Bold, deep red statement piece with a semi-translucent vitreous gloss finish. The ideal contrast accent to elevate any everyday look without sacrificing maximum comfort.";
  }

  // Poetic contemporary jewelry replacements for general fallbacks
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
