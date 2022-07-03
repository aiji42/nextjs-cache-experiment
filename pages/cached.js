export async function getServerSideProps({ res }) {
  const date = new Date();
  const currentTime = date.toLocaleString();

  res.setHeader("Cache-Control", "public, max-age==10, stale-while-revalidate=86400");

  return {
    props: {
      currentTime,
    },
  };
}

export default function Page(props) {
  return (<p>{props.currentTime}</p>);
}