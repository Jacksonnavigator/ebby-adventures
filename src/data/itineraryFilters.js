export function filterItineraries(itineraries, filters) {
  return itineraries.filter((itinerary) => {
    const matchesPrice = filters.price === "all" || itinerary.priceLevel === filters.price;
    const matchesLength = filters.length === "all" || itinerary.lengthGroup === filters.length;
    const matchesTripType = filters.tripType === "all" || itinerary.tripType === filters.tripType;
    const matchesStyle = filters.safariStyle === "all" || itinerary.safariStyle === filters.safariStyle;
    const matchesStart = filters.startFrom === "all" || itinerary.startFrom === filters.startFrom;
    const matchesStandard = filters.standardLevel === "all" || itinerary.standardLevel === filters.standardLevel;
    const matchesSpecialization = filters.specialization === "all" || itinerary.specialization === filters.specialization;

    return matchesPrice && matchesLength && matchesTripType && matchesStyle && matchesStart && matchesStandard && matchesSpecialization;
  });
}

export function buildFilterOptions(itineraries) {
  const priceOptions = [
    { value: "all", label: "All prices" },
    ...Array.from(new Set(itineraries.map((item) => item.priceLevel))).map((value) => ({ value, label: value })),
  ];

  const lengthOptions = [
    { value: "all", label: "Any length" },
    ...Array.from(new Set(itineraries.map((item) => item.lengthGroup))).map((value) => ({ value, label: value === "short" ? "Short (1–7 days)" : value === "classic" ? "Classic (8–12 days)" : "Extended (13+ days)" })),
  ];

  const tripTypeOptions = [
    { value: "all", label: "Any trip type" },
    ...Array.from(new Set(itineraries.map((item) => item.tripType))).map((value) => ({ value, label: value })),
  ];

  const safariStyleOptions = [
    { value: "all", label: "Any safari style" },
    ...Array.from(new Set(itineraries.map((item) => item.safariStyle))).map((value) => ({ value, label: value })),
  ];

  const startOptions = [
    { value: "all", label: "Any start" },
    ...Array.from(new Set(itineraries.map((item) => item.startFrom))).map((value) => ({ value, label: value })),
  ];

  const standardOptions = [
    { value: "all", label: "Any standard" },
    ...Array.from(new Set(itineraries.map((item) => item.standardLevel))).map((value) => ({ value, label: value })),
  ];

  const specializationOptions = [
    { value: "all", label: "Any special focus" },
    ...Array.from(new Set(itineraries.map((item) => item.specialization))).map((value) => ({ value, label: value })),
  ];

  return [
    { key: "price", label: "Price level", options: priceOptions },
    { key: "length", label: "Trip length", options: lengthOptions },
    { key: "tripType", label: "Trip type", options: tripTypeOptions },
    { key: "safariStyle", label: "Safari style", options: safariStyleOptions },
    { key: "startFrom", label: "Starting point", options: startOptions },
    { key: "standardLevel", label: "Standard level", options: standardOptions },
    { key: "specialization", label: "Special focus", options: specializationOptions },
  ];
}
