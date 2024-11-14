export default function Language({
  params,
  searchParams,
}: {
  params: { language: string };
  searchParams?: {
    something?: string;
  };
}) {
  return <pre>{JSON.stringify({ params, searchParams }, null, 2)}</pre>;
}
