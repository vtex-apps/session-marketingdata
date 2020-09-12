import { json } from 'co-body'

export async function process(ctx: Context, next: () => Promise<any>) {
  ctx.set('Cache-Control', 'no-cache')
  
  // Parse request body
  const body = await json(ctx.req)
  
  // Perform any content calculation
  console.log('Received body:', body)

  // Define response
  ctx.response.status = 200      
  ctx.response.body = {
    public:{
      utm_source:{
        value: body["hello"]
      } 
    }
  }
  await next()
}
