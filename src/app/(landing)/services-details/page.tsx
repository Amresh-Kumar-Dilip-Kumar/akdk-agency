import React from "react";
// import { useParams } from "react-router-dom";

import Markdown from "react-markdown";
import NotFoundPage from "../../not-found-page";
import { serviceDetail } from "../../../service-detail/services";
import { allowedServices } from "../../../service-detail/services";

const allowedServicesArray = Object.values(allowedServices);

function ServiceDetailPage() {
  // const { servicename } = useParams<{ servicename: string }>();
  const servicename = "web-development";
  if (!servicename) return <NotFoundPage />;

  if (
    !allowedServicesArray.includes(
      servicename as (typeof allowedServicesArray)[number]
    )
  ) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <div>ServiceDetailPage: {servicename}</div>
      <div className="prose mx-auto py-24">
        {servicename == allowedServices.webDevelopment ? (
          <Markdown>{serviceDetail.webDevelopment}</Markdown>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ServiceDetailPage;
