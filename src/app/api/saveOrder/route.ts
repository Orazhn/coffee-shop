import { Redis } from '@upstash/redis';
import { getAuth } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';


const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!
});

async function GetUserData(req: NextRequest) {
  const { userId } = getAuth(req);
  return userId;
}

export async function GET(req: NextRequest) {
  const userId = await GetUserData(req);
  
  try {
    if (userId) {
      const data = await redis.lrange(`user:${userId}`, 0, -1);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
    })}
  } catch (error) {
    console.error('Redis error:', error);
    return new Response('Redis error', { status: 500 });
  }
}


export async function POST(req: NextRequest) {
    const userId = await GetUserData(req);
    const data = await req.json();
    const { bagItems, total, date } = data;
  
    if (!userId) {
      console.log('User ID not found');
      return new Response('User ID not found', { status: 400 });
    }

    try {
      await redis.rpush(`user:${userId}`, JSON.stringify({bagItems, total, date}));
      return new Response('Messages posted successfully', { status: 201 });
    } catch (error) {
      console.error('Redis error while posting:', error);
      return new Response('Failed to post messages', { status: 500 });
    }
  }