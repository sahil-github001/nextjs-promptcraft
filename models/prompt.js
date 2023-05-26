import { Schema, model, models } from "mongoose";

// Define the schema for the Prompt collection
const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

// Create a Prompt model based on the schema
const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
