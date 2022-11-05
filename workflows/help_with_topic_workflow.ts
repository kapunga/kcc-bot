import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { HelpWithTopicFunction } from "../functions/help_with_topic_function.ts";

export const HelpWithTopicWorkflow = DefineWorkflow({
  callback_id: "help_with_topic_workflow",
  title: "Help With Topic Workflow",
  description: "Try to answer member questions.",
  input_parameters: {
    properties: {
      channel_id: {
        type: Schema.slack.types.channel_id,
      },
      user_id: {
        type: Schema.slack.types.user_id,
      },
      text: {
        type: Schema.types.string,
      },
      message_ts: {
        type: Schema.types.string,
      },
      thread_ts: {
        type: Schema.types.string,
      },
    },
    required: ["channel_id", "user_id", "text", "message_ts"],
  },
});

HelpWithTopicWorkflow.addStep(HelpWithTopicFunction, HelpWithTopicWorkflow.inputs);