import test from 'node:test';
import assert from 'node:assert/strict';
import { filterItineraries } from './itineraryFilters.js';

test('filters itineraries by travel style and trip length', () => {
  const itineraries = [
    {
      slug: 'classic-safari',
      title: 'Classic Safari',
      priceLevel: 'premium',
      lengthGroup: 'classic',
      tripType: 'Safari',
      safariStyle: 'Private road safari',
      startFrom: 'Arusha',
      standardLevel: 'Mid-range',
      specialization: 'Classic wildlife',
    },
    {
      slug: 'beach-and-safari',
      title: 'Beach & Safari',
      priceLevel: 'luxury',
      lengthGroup: 'extended',
      tripType: 'Beach + Safari',
      safariStyle: 'Fly-in luxury',
      startFrom: 'Zanzibar',
      standardLevel: 'Luxury',
      specialization: 'Beach escape',
    },
  ];

  const filtered = filterItineraries(itineraries, {
    price: 'premium',
    length: 'classic',
    tripType: 'Safari',
    safariStyle: 'all',
    startFrom: 'all',
    standardLevel: 'all',
    specialization: 'all',
  });

  assert.equal(filtered.length, 1);
  assert.equal(filtered[0].slug, 'classic-safari');
});
