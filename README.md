## Description

This repository reproduces an issue in Vercel when using `searchParams` in Next.js. When the `searchParams` uses the same key that is used in the Dynamic Segment, it is removed from the `searchParams` object. The property is not removed locally in development or when the app is built locally, it also works fine in other hosting services like Netlify.

## Steps to reproduce

1. Create a dynamic segment (e.g., `/src/app/[language]`):

```bash
mkdir ./src/app/\[language\]
```

2. Create a page for the dynamic segment:

```bash
touch ./src/app/\[language\]/page.tsx
```

3. Add the following code to the page to print the `params` and `searchParams` object:

```typescript
export default function Language({
  params,
  searchParams,
}: {
  params: { language: string };
  searchParams?: {
    language?: string;
  };
}) {
  return <pre>{JSON.stringify({ params, searchParams }, null, 2)}</pre>;
}
```

4. Deploy your application to Vercel and visit an URL that matches the dynamic segment and includes the query parameter (e.g., `en?language=hello`).

Deployed app to vercel: https://params-and-search-params.vercel.app/en?language=hello

5. Observe that the `language` key is removed from the `searchParams` object in Vercel:

**Current Output**

```json
{
  "params": {
    "language": "en"
  },
  "searchParams": {}
}
```

**Expected Output**

The property is not removed locally in development or when the app is built locally. It also works fine in other hosting services like Netlify or StackBlitz.

StackBlitz project: https://stackblitz.com/~/github.com/byrpatrick/params-and-search-params
Link Netlify deployment: https://params-and-search-params.netlify.app/en?language=hello

```json
{
  "params": {
    "language": "en"
  },
  "searchParams": {
    "language": "hello"
  }
}
```

