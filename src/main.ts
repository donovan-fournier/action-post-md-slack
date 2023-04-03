import * as core from '@actions/core'
import * as fs from 'fs'
import {markdownToBlocks} from '@tryfabric/mack'
import {WebClient, LogLevel} from '@slack/web-api'

async function run(): Promise<void> {
  try {
    const inputMd: string = core.getInput('input-md')
    const slackToken: string = core.getInput('slack-token')
    const slackChannel: string = core.getInput('slack-channel')

    const md = fs.readFileSync(inputMd, 'utf8')
    const blocks = await markdownToBlocks(md)

    const client = new WebClient(slackToken, {
      logLevel: LogLevel.DEBUG
    })
    await client.chat.postMessage({
      channel: slackChannel,
      blocks: blocks
    })
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
