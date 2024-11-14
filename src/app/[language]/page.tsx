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
