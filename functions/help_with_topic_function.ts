import { SlackAPIClient } from "deno-slack-sdk/types.ts";
import {
  DefineFunction,
  Schema,
  SlackAPI,
  SlackFunction,
} from "deno-slack-sdk/mod.ts";
import lock_code_view from "../views/lock_code_view.ts";
import { FunctionHandlerReturnArgs } from "https://deno.land/x/deno_slack_sdk@1.4.1/functions/types.ts";

export const HelpWithTopicFunction = DefineFunction({
  callback_id: "help_with_topic_function",
  title: "Help with Topic",
  source_file: "functions/help_with_topic_function.ts",
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
  output_parameters: {
    properties: {},
    required: [],
  },
});

export default SlackFunction(
  HelpWithTopicFunction,
  async ({ inputs, env, token }) => {
    const client: SlackAPIClient = SlackAPI(token);

    console.log(`Message heard:\n${JSON.stringify(inputs)}`)

    if (inputs.text.includes("code") && !inputs.thread_ts) {
      const view = lock_code_view(env.front_door, env.storage_closet, env.food_cabinet);
      await client.chat.postMessage({
        channel: inputs.channel_id,
        text: "Were you looking for these?",
        attachments: view,
        thread_ts: inputs.message_ts,
      });
    }

    return {
      outputs: {},
    };
  },
);

