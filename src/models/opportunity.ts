import mongoose from 'mongoose';

export interface OpportunityModel extends mongoose.Document {
  opportunity_id: string;
  value: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
}

const opportunitySchema = new mongoose.Schema({
  opportunity_id: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Opportunity = mongoose.model<OpportunityModel>(
  'opportunity',
  opportunitySchema
);

export default Opportunity;
