import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

interface Props {
  locale: string
  locales: string
}

interface DateTimeFormatOptions {
  calendar?: "buddhist" | "chinese" | "coptic" | "dangi" | "ethioaa" | "ethiopic" | "gregory" | "hebrew" | "indian" | "islamic" | "islamic-umalqura" | "islamic-tbla" | "islamic-civil" | "islamic-rgsa" | "iso8601" | "japanese" | "persian" | "roc" | "islamicc"
  /**
   *  can be used with timeStyle, but not with other options (e.g. weekday, hour, month, etc.).
   */
  dateStyle?: "full" | "long" | "medium" | "short"
  /**
   * timeStyle can be used with dateStyle, but not with other options (e.g. weekday, hour, month, etc.).
   */
  timeStyle?: "full" | "long" | "medium" | "short"

  hour12?: boolean

  numberingSystem?: "arab" | "arabext" | "bali" | "beng" | "deva" | "fullwide" | "gujr" | "guru" | "hanidec" | "khmr" | "knda" | "laoo" | "latn" | "limb" | "mlym" | "mong" | "mymr" | "orya" | "tamldec" | "telu" | "thai" | "tibt"

  /**
   * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
   */
  timeZone?: string
  timeZoneName?: "long" | "short" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric"

  era?: "narrow" | "short" | "long"
  year?: "numeric" | "2-digit"
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow"
  weekday?: "narrow" | "short" | "long"
  dayPeriod?: "narrow" | "short" | "long"
  day?: "numeric" | "2-digit"
  hour?: "numeric" | "2-digit"
  minute?: "numeric" | "2-digit"
  second?: "numeric" | "2-digit"
  fractionalSecondDigits?: 1 | 2 | 3
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale
    }
  }
};

const DatePage: NextPage<Props> = ({ locale }) => {
  const dateOptions: DateTimeFormatOptions = {

    // dateStyle: "short",
    // timeStyle: "short",

    // calendar: "chinese",

    // hour12: false,

    // numberingSystem: "hanidec",

    // timeZone: "America/Merida",
    // timeZone: "Pacific/Chatham",
    // timeZone: "Japan",
    // timeZone: "UTC",

    // era: "long",
    // year: "2-digit",
    // month: "long",
    // weekday: "long",
    // dayPeriod: "narrow"
    // day: "2-digit",
    // hour: "2-digit",
    // minute: "numeric",
    // second: "2-digit",
    // fractionalSecondDigits: 3,
    // timeZoneName: "long"
  }

  const formatter = Intl.DateTimeFormat(locale, dateOptions)

  const [today, setToday] = useState<Date>()

  useEffect(() => {
    setToday(new Date);
  }, [])

  const getFormattedDate = (date?: Date) => date && formatter.format(date)

  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center">Intl.DateTimeFormat</h1>
          <h5 className="text-center">Today</h5>
          <p className="text-center">{JSON.stringify(today)}</p>

          <br />

          <h5 className="text-center">formatted</h5>
          <p className="text-center">{JSON.stringify((getFormattedDate(today)))}</p>
        </Col>
        <Col>
          <h5 className="text-center">Options</h5>
          {
            JSON.stringify((dateOptions))
              .replace(/[\{\}"]/g, " ")
              .split(",")
              .map((element, i) => <p className="text-center p-0 m-0" key={i}>{element}</p>)
          }
        </Col>
      </Row>
    </>
  );
};

export default DatePage;