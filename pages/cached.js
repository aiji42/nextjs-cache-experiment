export async function getServerSideProps({ res }) {
  const date = new Date();
  const currentTime = date.toLocaleString();

  res.setHeader("Cache-Control", "max-age=0, s-maxage=10, stale-while-revalidate=10");

  return {
    props: {
      currentTime,
    },
  };
}

export default function Page(props) {
  return (<p>{props.currentTime}</p>);
}