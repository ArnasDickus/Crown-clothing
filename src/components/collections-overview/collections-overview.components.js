import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from "reselect";
import './collection-overview.styles.scss'
import CollectionPreviewComponent from "../collection-preview/collection-preview.component";
import {selectCollections} from "../../redux/shop/shop.selector";

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionProps }) => (
                <CollectionPreviewComponent key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(CollectionOverview);
