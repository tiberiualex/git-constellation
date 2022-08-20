import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";
import Head from "next/head";
import { AppDispatch } from "state/store";
import {
  setUsername,
  getUserStars,
  selectAllStars,
} from "state/slices/starsSlice";
import { useAppDispatch, useAppSelector } from "state/hooks";

const StarsPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const dispatch: AppDispatch = useAppDispatch();
  const [status, error] = useAppSelector(({ stars }) => [
    stars.status,
    stars.error,
  ]);
  const loading = status === "LOADING";
  const stars = useAppSelector((state) => selectAllStars(state));

  useEffect(() => {
    dispatch(setUsername(username as string));
  }, [dispatch, username]);

  const getStars = useCallback(() => {
    dispatch(getUserStars(username as string));
  }, [dispatch, username]);

  useEffect(() => {
    if (username) {
      getStars();
    }
  }, [getStars, username]);

  return (
    <div>
      <Head>
        <title>{`Stars for ${username}`}</title>
      </Head>
      <main>
        <h1>{`${username}'s stars`} </h1>
        {loading && <p>stars loading...</p>}
        {stars.length && <p>{stars.length}</p>}
      </main>
    </div>
  );
};

export default StarsPage;
