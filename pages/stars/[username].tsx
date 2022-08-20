import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";
import Head from "next/head";

const StarsPage = () => {
  const router = useRouter();
  const { user } = router.query;

  return (
    <Head>
      <title>Stars for {user}</title>
    </Head>
  );
};

export default StarsPage;
