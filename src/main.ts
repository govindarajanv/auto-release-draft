import * as core from '@actions/core'
import * as event from './event'
import * as version from './version'

async function run(): Promise<void> {
  try {

    const tag = event.getCreatedTag()
        if (tag && version.isSemVer(tag)) {
        }
    core.setOutput('release-url','https://example.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

export { run as run }

run()
