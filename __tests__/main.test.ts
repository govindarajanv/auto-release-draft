import * as core from "@actions/core"
import { run } from '../src/main'

describe ('when running the action', ()=> {
    const fakeSetOutput = core.setOutput as jest.MockedFunction<typeof core.setOutput>
    test('it should set the created release URL as output parameter', async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
})
})