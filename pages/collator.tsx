import type { GetServerSideProps, NextPage } from "next";
import { Col, Row } from "react-bootstrap";

interface Props {
  locale: string
  locales: string
}

interface CollatorOptions {
  caseFirst?: "upper" | "lower" | "false"
  ignorePunctuation?: boolean
  numeric?: boolean
  sensitivity?: "base" | "accent" | "case" | "variant"
  usage?: "sort" | "search"
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale
    }
  }
};

const CollatorPage: NextPage<Props> = ({ locale }) => {

  const collatorOptions: CollatorOptions = {
    // caseFirst: "lower",

    // ignorePunctuation: false,

    // numeric: false,

    // sensitivity: "variant",

    // usage: "sort",
  }

  const formatter = Intl.Collator(locale, collatorOptions);

  const letters = ["c", "C", "B", "X", "r", "R", "W", "a", "u", "z", "1", "ú", "ü", "ñ", "ß", "@", "😸", "🟢", "コ", "ニ", "圖", "加"];

  const sort = (values: string[]) => values.sort(formatter.compare)

  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center">Intl.Collator</h1>
          <h5 className="text-center">List</h5>
          <p className="text-center" style={{
            width: "500px",
            wordWrap: "break-word"
          }}>{JSON.stringify(letters)}</p>
        </Col>
        <Col>
          <h5 className="text-center">formatted</h5>
          <ul>
            {
              sort(letters).map((letter, i) => (
                <li key={i}>
                  {letter}
                </li>
              ))
            }
          </ul>
        </Col>
        <Col>
          <h5 className="text-center">Options</h5>
          {
            JSON.stringify((collatorOptions))
              .replace(/[\{\}"]/g, " ")
              .split(",")
              .map((element, i) => <p className="text-center p-0 m-0" key={i}>{element}</p>)
          }
        </Col>
      </Row>
    </>
  );
};

export default CollatorPage;