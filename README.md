This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



<br><br>

## Progress Report


### Video Audio issue. Toggle are hard constraints during initial calls
If offer side does not offer video. Offer side will not receive answer side video
despite answer side toggles video on.

1. This is a unidirection issue. To fix will require using tranceiver API
2. If Offer side later decides to transmit video. Current `softToggle` mechanism will not work, and requires renegotiations.

<br>

### Mic/Video toggle issue 1: inconsistent toggle behavior

Mic turns off on offer side...
```
Offer Side:
- Turns off mic

Answer Side:
- No longer able to hear offer voice. Expected behavior.
```

Mic turns off on answer side...
```
Offer side:
- able to here answer side voice. Unexpected behavior.

Answer side:
- turns off mic
```

UPDATE:\
Situation refined. Happens on Mobile device using `softToggle`. When user on 
mobile turns off mic, peer can still hear, but toggling off video works as expected

<br>

### ~~Mic retoggle issues 2: Call disconnects when toggle~~
**solved via using soft toggle mechanism instead.**


```
Offer side:
- turn off mic

Answer side:
- cannot hear. Expected behavior


Offer side retoggles:
- answer cannot hear. Unexpected behavior.
- call seems to be disconnected
```


