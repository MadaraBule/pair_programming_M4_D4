import React from 'react'
import {Badge} from 'react-bootstrap'


const BadgeAsset =(prop) => (
    <Badge variant={prop.color}>{prop.text}</Badge>
)
export default BadgeAsset