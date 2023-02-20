export default function Test({ data }: any) {
  return (
    <>
      <div>{data}</div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // console.dir("test");
  // Pass data to the page via props
  return { props: { data: "test" } };
}
