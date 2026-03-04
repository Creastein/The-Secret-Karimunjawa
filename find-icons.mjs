import * as h from 'hugeicons-react';
import fs from 'fs';
const k = Object.keys(h);
const search = [
    'anchor', 'utensil', 'pot', 'restaurant', 'car', 'paw', 'eye', 'smoking', 'concierge',
    'sunrise', 'coffee', 'leaf', 'sparkle', 'smartphone', 'map', 'globe', 'earth', 'quote',
    'ship', 'wave', 'mountain', 'navigation', 'arrowleft', 'arrowright', 'arrowup', 'expand',
    'cancel', 'multiply', 'menu', 'plus', 'minus', 'chevron', 'bubble', 'message', 'call',
    'instagram', 'facebook'
];
const out = search.map(q => q + ': ' + k.filter(n => n.toLowerCase().includes(q.toLowerCase())).slice(0, 5).join(', ')).join('\n');
fs.writeFileSync('out.txt', out);
