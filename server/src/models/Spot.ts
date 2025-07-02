import { Schema, model } from 'mongoose';

const ratingSchema = new Schema(
  {
    vibe: { type: Number, default: 0 },
    uniqueness: { type: Number, default: 0 },
    safety: { type: Number, default: 0 },
    crowd: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  { _id: false }
);

const spotSchema = new Schema({
  name: String,
  description: String,
  category: { type: String, enum: ['Romantic', 'Serene', 'Creative'] },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [lng, lat]
  },
  images: [String],
  stories: [
    {
      body: String,
      public: { type: Boolean, default: true },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  ratings: { type: ratingSchema, default: () => ({}) }
});

spotSchema.index({ location: '2dsphere' });

export default model('Spot', spotSchema);
