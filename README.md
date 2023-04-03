<p align="center">
  <a href="https://github.com/donovan-fournier/action-post-md-slack/actions"><img alt="typescript-action status" src="https://github.com/donovan-fournier/action-post-md-slack/workflows/build-test/badge.svg"></a>
</p>

# Post MD on Slack

This Github Actions allows you to post a message on a Slack channel, imitating a Markdown formatting, using Slack Blocks.

# Usage

```yml
- uses: donovan-fournier/action-post-md-slack@v0.0.1
  with:
    input-md: README.md
    slack-token: ${{ secrets.SLACK_APP_KEY }}
    slack-channel: ${{ secrets.SLACK_CHANNEL_ID }}
```
