export type PageTab = 'home' | 'the-collection' | 'olfactory-art-&-craft' | 'private-atelier-&-booking';

export interface OlfactoryNotes {
  top: string;
  heart: string;
  base: string;
  topDesc?: string;
  heartDesc?: string;
  baseDesc?: string;
}

export interface FormulationAccord {
  name: string;
  percentage: number;
  color: string;
}

export interface Fragrance {
  id: string;
  number: string;
  name: string;
  family: string;
  category: 'boise' | 'floral' | 'oriental' | 'fresh';
  tier: 'Extrait' | 'Absolu Élixir';
  concentration: string;
  rating: number;
  price: number;
  badge?: string;
  volume: string;
  description: string;
  image: string;
  longevity: string;
  preorderBatch: string;
  notes: OlfactoryNotes;
  accords: FormulationAccord[];
  sourceOrigin: string;
  sillage: 'Intimate' | 'Luminous' | 'Enveloping' | 'Monumental';
  season: string;
  affinityTag?: string;
}

export interface CartItem {
  fragrance: Fragrance;
  volume: '50ml' | '100ml' | 'Crystal';
  price: number;
  quantity: number;
  monogram?: string;
}

export interface Terroir {
  id: string;
  name: string;
  botanical: string;
  location: string;
  coords: string;
  description: string;
  badges: string[];
  chartTitle: string;
  batch: string;
  metric1: { label: string; value: string };
  metric2: { label: string; value: string };
  metric3: { label: string; value: string };
  mapCoords: string;
}

export interface BookingData {
  ceremony: string;
  location: string;
  date: string;
  timeSlot: string;
  patronName: string;
  contact: string;
  email: string;
  preferences: string;
  emotionalNarrative: string;
}
