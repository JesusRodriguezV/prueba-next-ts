import type { GetServerSideProps, NextPage } from "next";
import { Col, Row } from "react-bootstrap";

interface Props {
  locale: string
  locales: string
}

interface NumberFormatOptions {
  compactDisplay?: "short" | "long",

  currency?: string
  currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name"

  notation?: "standard" | "scientific" | "engineering" | "compact"

  numberingSystem?: "arab" | "arabext" | "bali" | "beng" | "deva" | "fullwide" | "gujr" | "guru" | "hanidec" | "khmr" | "knda" | "laoo" | "latn" | "limb" | "mlym" | "mong" | "mymr" | "orya" | "tamldec" | "telu" | "thai" | "tibt"

  signDisplay?: "auto" | "always" | "exceptZero" | "never"

  style?: "decimal" | "currency" | "percent" | "unit"

  unit?: "degree" | "acre" | "hectare" | "percent" | "bit" | "byte" | "kilobit" | "kilobyte" | "megabit" | "megabyte" | "gigabit" | "gigabyte" | "terabit" | "terabyte" | "petabyte" | "millisecond" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year" | "millimeter" | "centimeter" | "meter" | "kilometer" | "inch" | "foot" | "yard" | "mile" | "mile-scandinavian" | "gram" | "kilogram" | "ounce" | "pound" | "stone" | "celsius" | "fahrenheit" | "liter" | "milliliter" | "gallon" | "fluid-ounce"
  unitDisplay?: "long" | "short" | "narrow"

  useGrouping?: boolean

  maximumFractionDigits?: number
  maximumSignificantDigits?: number
  minimumFractionDigits?: number
  minimumIntegerDigits?: number
  minimumSignificantDigits?: number
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale
    }
  }
};

const NumberPage: NextPage<Props> = ({ locale }) => {
  const numberOptions: NumberFormatOptions = {

    // notation: "scientific",
    // notation: "compact",
    // compactDisplay: "long",

    // useGrouping: false,

    // numberingSystem: "hanidec",

    // style: "decimal",

    // style: "percent",

    // style: "currency",
    // currency: "JPY",
    // currency: "USD",
    // currencyDisplay: "name",
    // maximumFractionDigits: 3,
    // minimumFractionDigits: 0,

    // style: "unit",
    // unit: "celsius",
    // unitDisplay: "long",

    // minimumIntegerDigits: 10,

    // maximumSignificantDigits: 2,
    // minimumSignificantDigits: 1,

    // signDisplay: "exceptZero",
  }

  const formatter = Intl.NumberFormat(locale, numberOptions)

  const numberValue = 123456.7890

  const getFormattedValue = (value?: number) => value && formatter.format(value)

  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center">Intl.NumberFormat</h1>
          <h5 className="text-center">Number</h5>
          <p className="text-center">{numberValue}</p>

          <br />

          <h5 className="text-center">formatted</h5>
          <p className="text-center">{JSON.stringify((getFormattedValue(numberValue)))}</p>
        </Col>
        <Col>
          <h5 className="text-center">Options</h5>
          {
            JSON.stringify((numberOptions))
              .replace(/[\{\}"]/g, " ")
              .split(",")
              .map((element, i) => <p className="text-center p-0 m-0" key={i}>{element}</p>)
          }
        </Col>
      </Row>
    </>
  );
};

export default NumberPage;