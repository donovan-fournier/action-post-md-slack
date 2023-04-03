import * as core from '@actions/core'
import * as fs from 'fs'
import {LogLevel, WebClient} from '@slack/web-api'
import {markdownToBlocks} from '@tryfabric/mack'

async function run(): Promise<void> {
  try {
    const inputMd: string = core.getInput('input-md')
    const slackToken: string = core.getInput('slack-token')
    const slackChannel: string = core.getInput('slack-channel')
    const defaultText: string = core.getInput('default-text')

    const md = fs.readFileSync(inputMd, 'utf8')
    const blocks = await markdownToBlocks(md)

    const client = new WebClient(slackToken, {
      logLevel: LogLevel.DEBUG
    })
    await client.chat.postMessage({
      channel: slackChannel,
      blocks,
      text: defaultText
    })
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
