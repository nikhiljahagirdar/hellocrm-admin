"use client"

import React from 'react'
import { ProgressBar } from 'react-bootstrap';

interface SpkProgressProps {
    variant?: string;
    now: number | any;
    mainClass?: string;
    animated?: boolean;
    striped?: boolean;
    children?: any;
    label?: string | number;
    bg?: string
}

const SpkProgress: React.FC<SpkProgressProps> = ({ variant, now = 0, mainClass, animated, striped, label, bg }) => {
    return (
        <ProgressBar variant={variant} now={now} className={mainClass} animated={animated} striped={striped} label={label} />
    )
}

export default SpkProgress