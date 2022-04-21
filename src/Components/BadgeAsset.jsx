import React from 'react'
import {Badge} from 'react-bootstrap'


const BadgeAsset =(helloGuys) => {
    <Badge pill variant={helloGuys.color}>{helloGuys.text}</Badge>
}
export default BadgeAsset