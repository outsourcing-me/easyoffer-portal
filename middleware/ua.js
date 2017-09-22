export default function(context) {
  // console.log(navigator, '---')
  try {
    if (context.isServer) {
      if (context.req) context.userAgent = context.req.headers['user-agent']
    } else {
      context.userAgent = navigator.userAgent
    }
  } catch (e) {
    console.log(e)
  }
}
