/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

/**
 * [IV]
 * View Import
 */
import Mobile from './Views/Mobile/tpl';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import PixelPerfect from 'vendor/PixelPerfect/component';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';

class Question extends Component {
    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    /**
     * [CR]
     * Render function
     */
    render() {
        /**
         * [RPD]
         * Props destructuring
         */
        const { mediaType } = this.props;

        /**
         * [RCD]
         * Config destructuring
         */
        const { id } = config;

        /**
         * [RV]
         * View
         */
        const view = (
            <Mobile mediaType={ mediaType }/>
        );

        /**
         * [RR]
         * Return Component
         */
        return (
            <PixelPerfect component={ id }>
                { view }
            </PixelPerfect>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Question;
