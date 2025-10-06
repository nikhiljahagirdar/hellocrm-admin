"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card } from "react-bootstrap";

interface CardProps {
  header?: string | any;
  children?: React.ReactNode;
  footer?: boolean | React.ReactNode;
  imgSrc?: string;
  title?: string;
  bodyText?: string | object | any;
  titleClass?: string;
  subTitle?: string
  imgClass?: string;
  cardClass?: string;
  bodyClass?: string;
  cardFooter?: string;
  cardHeader?: string;
  useDivHeader?: boolean;
  imgSrcA?: string;
  imgClassA?: string
  imgSrcB?: string;
  imgClassB?: string
  linkTag?: boolean;
  singleImg?: string;
  imgSingleSrc?: string;
  imgSrcC?: string
  imgClassC?: string
}

const SpkCard: React.FC<CardProps> = ({ header, footer, title, bodyText, imgSrc, titleClass, subTitle, imgClass, cardClass, bodyClass, cardHeader, cardFooter, useDivHeader = false, imgSrcA, imgClassA, imgSrcB, imgSingleSrc, imgClassB, imgSrcC, imgClassC, linkTag = false, singleImg }) => {
  return (
    <Card className={`custom-card ${cardClass}`}>

      {imgSrcA && <Image fill src={imgSrcA} alt="..." className={imgClassA} />}
      {linkTag && <Link scroll={false} href="#!" className="card-anchor"></Link>}
      {singleImg == 'top' && <Link scroll={false} href="#!" className='p-3 pb-0 rounded-5' ><Image fill src={imgSingleSrc as string} className="rounded-2 card-img-top" alt="..." /></Link>}
      {header && (
        useDivHeader ? (
          <Card.Header className={cardHeader}> {header} </Card.Header>
        ) : (
          <Card.Header className={cardHeader}>
            <h5 className={`card-title ${!imgSrcC ? 'fw-medium' : ''} `}>{header}</h5>
          </Card.Header>
        )
      )}

      {imgSrc && <Image fill src={imgSrc} alt="..." className={imgClass} />}

      <Card.Body className={bodyClass}>
        {title && <h6 className={`card-title ${titleClass}`}>{title}</h6>}
        {subTitle && <div className="card-subtitle mb-3 text-muted ">{subTitle}</div>}
        {bodyText}
      </Card.Body>

      {imgSrcB && <Image fill src={imgSrcB} alt="..." className={imgClassB} />}
      {footer && (
        <Card.Footer className={cardFooter}>
          {typeof footer === 'string' ? (
            <span dangerouslySetInnerHTML={{ __html: footer }} />
          ) : (
            footer
          )}
        </Card.Footer>
      )}
      {imgSrcC && <Image fill src={imgSrcC} alt="..." className={imgClassC} />}
      {singleImg == 'bottom' && <Link scroll={false} href="#!" className="p-3 pt-0 rounded-5">
        <Image fill src={imgSingleSrc as string} className="rounded-2 card-img-bottom" alt="..." />
      </Link>}

    </Card>
  );
};

export default SpkCard;
