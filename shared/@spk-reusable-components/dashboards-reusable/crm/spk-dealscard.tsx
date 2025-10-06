import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Card } from "react-bootstrap";

interface Deal {
  imgSrc: string;
  title: string;
  price: string;
  company: string;
  date: string;
}

interface SpkDealsCardProps {
  deal: Deal; 
  cardClass?: string;
  bodyClass?: string; 
}

const SpkDealsCard: React.FC<SpkDealsCardProps> = ({ deal, cardClass, bodyClass }) => {

  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        <Card.Body className={bodyClass}>
          <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <div className="lh-1">
                <span className="avatar avatar-sm avatar-rounded">
                  <Image width={28} height={28} src={deal.imgSrc} alt={deal.title} />
                </span>
              </div>
              <div className="fs-14">{deal.title}</div>
            </div>
            <div>{deal.price}</div>
          </div>
          <div className="deal-description">
            <div className="my-1">
              <Link scroll={false} href="#!" className="company-name">
                {deal.company}
              </Link>
            </div>
            <div className="text-muted fs-12">{deal.date}</div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkDealsCard;
