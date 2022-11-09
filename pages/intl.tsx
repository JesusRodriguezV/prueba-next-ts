import type { GetServerSideProps, NextPage } from "next";
import { Badge, Button, Col, Row } from "react-bootstrap";

interface Props {
  locale: string
  locales: string
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale
    }
  }
};

const IntlPage: NextPage<Props> = ({ locale }) => {


  return (
    <>
      <h1 className="text-center">Intl</h1>
      <h2 className="text-center">
        <Badge className="m-1" bg="primary">Namespace</Badge>
        <Badge className="m-1" bg="primary">ECMAScript</Badge>
        <Badge className="m-1" bg="primary">API</Badge>
        <Badge className="m-1" bg="primary">Number</Badge>
        <Badge className="m-1" bg="primary">Formatting</Badge>
        <Badge className="m-1" bg="primary">2019</Badge>
      </h2>
      <h2 className="text-center">
        <Button className="m-1" href="https://www.techonthenet.com/js/language_tags.php" variant="success">BCP 47</Button>
        <Button className="m-1" href="https://www.ibm.com/docs/en/cloudpakw3700/2.3.0.0?topic=SS6PD2_2.3.0/doc/psapsys_restapi/time_zone_list.htm" variant="success">Time Zones</Button>
        <Button className="m-1" href="https://www.iso.org/iso-4217-currency-codes.html" variant="success">ISO 4217</Button>

      </h2>
      <h3 className="text-center">
        <Button className="m-1" href="https://momentjs.com/" variant="danger">Moment.js</Button>
        <Button className="m-1" href="https://date-fns.org/" variant="danger">date-fns</Button>
        <Button className="m-1" href="https://moment.github.io/luxon/#/" variant="danger">Luxon</Button>
        <Button className="m-1" href="https://day.js.org/" variant="danger">day.js</Button>
      </h3>
      <ul>
        <Row>
          <Col>
            <h5>Constructors</h5>
            <ul>
              <li><code>Intl.Collator()</code></li>
              <li><code>Intl.DateTimeFormat()</code></li>
              <li><code>Intl.ListFormat()</code></li>
              <li><code>Intl.NumberFormat()</code></li>
              <li><code>Intl.PluralRules()</code></li>
              <li><code>Intl.RelativeTimeFormat()</code></li>
              <li><code>Intl.Locale()</code></li>
              <li><code>Intl.Segmenter()</code></li>
            </ul>
          </Col>
          <Col>
            <h5>Methods</h5>
            <ul>
              <li><code>String.prototype.localeCompare()</code></li>
              <li><code>Number.prototype.toLocaleString()</code></li>
              <li><code>Date.prototype.toLocaleString()</code></li>
              <li><code>Date.prototype.toLocaleDateString()</code></li>
              <li><code>Date.prototype.toLocaleTimeString()</code></li>
            </ul>
          </Col>
        </Row>
      </ul>
    </>
  );
};

export default IntlPage;