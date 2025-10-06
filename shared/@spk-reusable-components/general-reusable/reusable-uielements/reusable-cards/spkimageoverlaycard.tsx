"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, } from 'react-bootstrap'

interface Imgoverlay {
  Imgsrc?: string
  Footertext?: string;
  Overlayclass?: string;
  CustomTitleclass?: string;
  Customimgclass?: string;
  Custombodyclass?: string;
  Customfooterclass?: string;
  Text?: string;
  Title?: string;
  CustomClass?: string;
  children?: React.ReactNode;
  CardHeader?: boolean;
  CardFooter?: boolean;
  stretchedLink?: boolean;
}

const Spkimageoverlaycard: React.FC<Imgoverlay> = ({ Imgsrc, CustomClass,stretchedLink = false,CardHeader = true, Overlayclass, CardFooter = true, Footertext, Customfooterclass, Custombodyclass, CustomTitleclass, Customimgclass, Title, children }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${CustomClass}`}>
      {stretchedLink ?
      <Link href="/pages/blog/blog-details" className="stretched-link"></Link>
      :""}
        <Image fill src={Imgsrc as string} className={Customimgclass} alt="..." />
        <div className={`card-img-overlay d-flex flex-column p-0 ${Overlayclass}`}>
          {CardHeader ?
            <Card.Header className="card-header">
              <div className={`card-title ${CustomTitleclass}`}>
                {Title}
              </div>
            </Card.Header>
            : ""}
          <Card.Body className={Custombodyclass}>
            {children}
          </Card.Body>
          {CardFooter ? <Card.Footer className={Customfooterclass}>{Footertext}</Card.Footer> : ""}

        </div>
      </Card>
    </Fragment>
  )
}

export default Spkimageoverlaycard