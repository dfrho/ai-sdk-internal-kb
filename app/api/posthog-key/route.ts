import { NextResponse } from 'next/server'
import getConfig from 'next/config'

export async function GET() {
  const { serverRuntimeConfig } = getConfig()
  return NextResponse.json({ posthogKey: serverRuntimeConfig.POSTHOG_KEY })
}