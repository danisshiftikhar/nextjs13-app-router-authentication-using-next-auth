import { NextResponse } from 'next/server'
import data from '../../../data/data.json'
import bcrypt from 'bcrypt'
interface RequestBody {
  username: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()
  const user = data
  if (user.name === body.username) {
    if (await bcrypt.compare(body.password, user.password)) {
      const { password, ...userWithoutPass } = user
      return NextResponse.json(userWithoutPass)
    } else {
      return NextResponse.json(null)
    }
  } else {
    return NextResponse.json(null)
  }
}
