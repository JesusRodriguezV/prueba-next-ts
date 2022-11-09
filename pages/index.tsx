import type { GetServerSideProps, NextPage } from "next";

interface Props {
  locale: string
  locales: string
}

export const getServerSideProps: GetServerSideProps = async ({ locale, locales }) => {
  return {
    props: {
      locale,
      locales
    }
  }
};

const Main: NextPage<Props> = ({ locale, locales }) => {
  return (
    <>
      <h1>Principal</h1>
      <p>{JSON.stringify(locales)}</p>
      <p>{JSON.stringify(locale)}</p>
    </>
  );
};

export default Main;
