import { Trigger } from "deno-slack-api/types.ts";
import { HelpWithTopicWorkflow } from "../workflows/help_with_topic_workflow.ts";

const helpGeneralListenerTrigger: Trigger<
  typeof HelpWithTopicWorkflow.definition
  > = {
    type: "event",
    name: "Help-General Listener Trigger",
    description: "Listen to help-general to see if bot can help.",
    workflow: "#/workflows/help_with_topic_workflow",
    event: {
      event_type: "slack#/events/message_posted",
      channel_ids: ["C0496K38TJT"],
      filter: {
        version: 1,
        root: {
          statement: "{{data.channel_id}} == C0496K38TJT"
        }
      }
    },
    inputs: {
      channel_id: {
        value: "{{data.channel_id}}",
      },
      user_id: {
        value: "{{data.user_id}}",
      },
      text: {
        value: "{{data.text}}",
      },
      message_ts: {
        value: "{{data.message_ts}}",
      },
      thread_ts: {
        value: "{{data.thread_ts}}",
      },
    }
  }

  export default helpGeneralListenerTrigger;