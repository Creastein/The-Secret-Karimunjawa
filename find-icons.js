const h = require('hugeicons-react');
const k = Object.keys(h);
const search = [
    'anchor', 'utensil', 'pot', 'restaurant', 'car', 'paw', 'eye', 'smoking', 'concierge',
    'sunrise', 'coffee', 'leaf', 'sparkle', 'smartphone', 'map', 'globe', 'earth', 'quote',
    'ship', 'wave', 'mountain', 'navigation', 'arrowleft', 'arrowright', 'arrowup', 'expand',
    'cancel', 'multiply', 'menu', 'plus', 'minus', 'chevron', 'bubble', 'message', 'call',
    'instagram', 'facebook'
];
search.forEach(q => {
    console.log(q, k.filter(n => n.toLowerCase().includes(q.toLowerCase())).slice(0, 5));
});
