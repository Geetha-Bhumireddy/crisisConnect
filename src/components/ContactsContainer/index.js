import * as React from 'react'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

function randomID(len) {
  let result = ''
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP'
  const maxPos = chars.length
  const length = len || 5 // Assign to a new variable instead of modifying the parameter
  let i = 0 // Initialize loop variable outside the loop
  while (i < length) {
    // Loop condition based on the loop variable
    result += chars.charAt(Math.floor(Math.random() * maxPos))
    i += 1 // Increment the loop variable inside the loop body
  }
  return result
}

export function getUrlParams(url = window.location.href) {
  const urlStr = url.split('?')[1]
  return new URLSearchParams(urlStr)
}

export default function ContactsContainer() {
  const roomID = getUrlParams().get('roomID') || randomID(5)
  const myMeeting = async element => {
    // generate Kit Token
    const appID = 13754272
    const serverSecret = '7dc2a56d01e29cda6852feef39abc15a'
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5), // Pass the desired length directly
      randomID(5), // Pass the desired length directly
    )

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken)
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneOnOneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    })
  }

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{width: '100vw', height: '100vh'}}
    >
      <p color="white">hi</p>
    </div>
  )
}
