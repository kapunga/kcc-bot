import { Manifest } from "deno-slack-sdk/mod.ts";
import { HelpWithTopicFunction } from "./functions/help_with_topic_function.ts";
import { HelpWithTopicWorkflow } from "./workflows/help_with_topic_workflow.ts";

export default Manifest({
  name: "KCC Bot",
  description: "Automation Tools for Kids Co-op Cambridge",
  icon: "assets/icon.gif",
  functions: [HelpWithTopicFunction],
  workflows: [HelpWithTopicWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "channels:history", "chat:write", "chat:write.public"],
});
