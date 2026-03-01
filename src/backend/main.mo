import Text "mo:core/Text";
import Set "mo:core/Set";

actor {
  let completedTopics = Set.empty<Text>();

  public shared ({ caller }) func markTopicComplete(topicId : Text) : async () {
    completedTopics.add(topicId);
  };

  public query ({ caller }) func getCompletedTopics() : async [Text] {
    completedTopics.toArray();
  };

  public shared ({ caller }) func resetProgress() : async () {
    completedTopics.clear();
  };
};
