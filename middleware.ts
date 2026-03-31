import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cardápio em atualização</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #0a0a0a;
      color: #fff;
      text-align: center;
      padding: 2rem;
    }
    h1 { font-size: 1.6rem; margin-bottom: 0.75rem; }
    p { color: #888; font-size: 1rem; line-height: 1.6; }
  </style>
</head>
<body>
  <div>
    <h1>🍺 Cardápio em atualização</h1>
    <p>Estamos preparando novidades.<br>Em breve o cardápio estará disponível novamente!</p>
  </div>
</body>
</html>`,
    {
      status: 503,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Retry-After': '3600',
      },
    }
  )
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}