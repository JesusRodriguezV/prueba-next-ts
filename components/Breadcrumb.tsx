import { useRouter } from "next/router";
import { Breadcrumb as BreadcrumbBoostrap } from "react-bootstrap";

const Breadcrumb = () => {
  const router = useRouter();
  const value = router.asPath.toLowerCase().split("/");

  const crumbs = value.map((v) => {
    if (v == "") return;
    return <BreadcrumbBoostrap.Item key={v}>{v}</BreadcrumbBoostrap.Item>;
  });

  return (
    <BreadcrumbBoostrap className="p-2">
      <BreadcrumbBoostrap.Item href="/">Inicio</BreadcrumbBoostrap.Item>
      {crumbs}
    </BreadcrumbBoostrap>
  );
};

export default Breadcrumb;
